import Parser from 'rss-parser';
import fs from 'fs';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const HASHNODE_USERNAME = "leerenjie";
const HASHNODE_API = "https://gql.hashnode.com/";
const HASHNODE_HOST = `${HASHNODE_USERNAME}.hashnode.dev`;
const FCC_FEED = "https://www.freecodecamp.org/news/author/LeeRenJie/rss.xml";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchHashnodeGraphQL() {
  console.log("🔍 Fetching all Hashnode posts via GraphQL (paginated)...");

  let allPosts = [];
  let cursor = null;
  let hasNextPage = true;
  let page = 1;

  while (hasNextPage) {
    console.log(`  → Page ${page}${cursor ? ` (after: ${cursor.substring(0, 12)}...)` : ''}`);

    const query = `
      query Publication {
        publication(host: "${HASHNODE_HOST}") {
          posts(first: 20${cursor ? `, after: "${cursor}"` : ''}) {
            edges {
              node {
                title
                brief
                slug
                publishedAt
                url
              }
              cursor
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
      }
    `;

    const res = await fetch(HASHNODE_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Blog-Updater/1.0"
      },
      body: JSON.stringify({ query }),
    });

    const data = await res.json();

    if (!data.data?.publication?.posts?.edges) {
      throw new Error(`Failed to fetch Hashnode page ${page}: ${JSON.stringify(data.errors || data)}`);
    }

    const postsPage = data.data.publication.posts;

    const pagePosts = postsPage.edges.map((edge) => ({
      title: edge.node.title,
      brief: edge.node.brief || '',
      link: edge.node.url,
      pubDate: edge.node.publishedAt,
      source: "Hashnode",
    }));

    allPosts = [...allPosts, ...pagePosts];
    hasNextPage = postsPage.pageInfo.hasNextPage;
    cursor = postsPage.pageInfo.endCursor;
    page++;

    if (hasNextPage) await delay(1000);
  }

  console.log(`📝 Hashnode: ${allPosts.length} total posts`);
  return allPosts;
}

async function fetchFreeCodeCamp() {
  console.log("🔍 Fetching all FreeCodeCamp posts...");
  const parser = new Parser({
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; Blog-Updater/1.0)'
    }
  });

  try {
    const feed = await parser.parseURL(FCC_FEED);
    const posts = feed.items.map((item) => ({
      title: item.title?.replace(/\n/g, '').trim(),
      brief: item.contentSnippet?.substring(0, 400).trim() || '',
      link: item.link,
      pubDate: item.pubDate,
      source: "FreeCodeCamp",
    }));
    console.log(`📝 FreeCodeCamp: ${posts.length} total posts`);
    return posts;
  } catch (error) {
    console.warn("⚠️ Could not fetch FreeCodeCamp posts:", error.message);
    return [];
  }
}

function updateReadme(posts) {
  console.log("📝 Updating README.md...");

  try {
    const readmePath = path.join(ROOT_DIR, 'README.md');
    let readmeContent = fs.readFileSync(readmePath, 'utf-8');

    const blogSection = posts
      .map(post => `- [${post.title} - [${post.source}]](${post.link})`)
      .join('\n');

    const newBlogSection = `<!-- BLOG-POST-LIST:START -->\n${blogSection}\n<!-- BLOG-POST-LIST:END -->`;

    if (readmeContent.includes('<!-- BLOG-POST-LIST:START -->')) {
      readmeContent = readmeContent.replace(
        /<!-- BLOG-POST-LIST:START -->[\s\S]*?<!-- BLOG-POST-LIST:END -->/,
        newBlogSection
      );
    } else {
      readmeContent += '\n\n### Recent Articles 📖\n' + newBlogSection;
    }

    fs.writeFileSync(readmePath, readmeContent);
    console.log("✅ README.md updated successfully");
  } catch (error) {
    console.error("❌ Failed to update README.md:", error.message);
  }
}

async function main() {
  try {
    const hashnodePosts = await fetchHashnodeGraphQL();
    await delay(2000);
    const fccPosts = await fetchFreeCodeCamp();

    console.log("\n📊 Summary:");
    console.log(`  Hashnode:     ${hashnodePosts.length} posts`);
    console.log(`  FreeCodeCamp: ${fccPosts.length} posts`);

    const allPosts = [...hashnodePosts, ...fccPosts].sort(
      (a, b) => new Date(b.pubDate) - new Date(a.pubDate)
    );

    console.log(`  Total:        ${allPosts.length} posts`);

    if (allPosts.length === 0) {
      console.warn("⚠️ No posts found from any source");
      return;
    }

    console.log("\n📋 All posts (sorted by date):");
    allPosts.forEach((post, i) => {
      const date = new Date(post.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
      console.log(`  ${String(i + 1).padStart(2, '0')}. [${post.source.padEnd(12)}] ${date}  ${post.title}`);
    });

    const outputPath = path.join(ROOT_DIR, 'public', 'blogs.json');
    fs.writeFileSync(outputPath, JSON.stringify(allPosts, null, 2));
    console.log(`\n✅ Saved ${allPosts.length} posts to ${outputPath}`);

    updateReadme(allPosts);
    console.log("✅ Done");
  } catch (err) {
    console.error("❌ Failed:", err);
    process.exit(1);
  }
}

main();

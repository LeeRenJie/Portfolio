import React from 'react';
import Post from './Post';
import './BlogPosts.scss';
import * as SVGLoaders from 'svg-loaders-react';

const query = `
    {
      user(username: "LeeRenJie") {
        publication {
          posts{
            slug
            title
            brief
            coverImage
          }
        }
      }
    }
  `;

class BlogPosts extends React.Component {
  state = {
    posts: [],
    loading: true
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    const response = await fetch('https://api.hashnode.com', {
      method: 'POST',
      headers: {
          'Content-type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
    const ApiResponse = await response.json();

    console.log(ApiResponse.data.user.publication.posts);
    this.setState({ posts: ApiResponse.data.user.publication.posts, loading: false });
  };

  render() {
    if (this.state.loading) return <div className="spinner"><SVGLoaders.TailSpin fill="#fff" trokeOpacity=".125" /></div>;

    return (
      <div className="blog-container">
        {this.state.posts.map((post, index) => (
          <a className="card-link" key={index} href={`https://leerenjie.hashnode.dev/${post.slug}`} >
            <Post post={post} />
          </a>
        ))}
      </div>
    );
  }
}

export default BlogPosts;

{/* <Circles />
<Grid />
<Hearts />
<Oval />
<Puff />
<Rings />
<SpinningCircles />
<TailSpin />
<ThreeDots /> */}

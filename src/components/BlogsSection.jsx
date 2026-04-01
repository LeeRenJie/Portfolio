import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

function formatDate(dateStr) {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric'
  });
}

function SourceBadge({ source }) {
  const isHashnode = source === 'Hashnode';
  return (
    <span
      className={`text-[7px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full border ${
        isHashnode
          ? 'border-blue-500/50 text-blue-400 bg-blue-500/10'
          : 'border-[var(--accent-color)]/50 text-[var(--accent-color)] bg-[var(--accent-dim)]'
      }`}
    >
      {source}
    </span>
  );
}

export default function BlogsSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const mobileScrollRef = useRef(null);

  useEffect(() => {
    fetch('/blogs.json')
      .then(r => r.json())
      .then(data => {
        setPosts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const gap = 16;
    const newIndex = Math.round(container.scrollLeft / (container.clientWidth + gap));
    if (newIndex !== mobileIndex && newIndex >= 0 && newIndex < posts.length) {
      setMobileIndex(newIndex);
    }
  };

  const scrollMobile = (dir) => {
    const newIndex = dir === 'prev'
      ? Math.max(0, mobileIndex - 1)
      : Math.min(posts.length - 1, mobileIndex + 1);
    setMobileIndex(newIndex);
    if (mobileScrollRef.current) {
      const card = mobileScrollRef.current.children[newIndex];
      if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }
  };

  const active = posts[activeIndex];

  return (
    <section className="h-full lg:min-h-[calc(100vh-8rem)] w-full flex flex-col overflow-hidden bg-[var(--bg-color)]">
      <div className="w-full h-full lg:min-h-[calc(100vh-8rem)] flex flex-col py-8 md:py-12 lg:py-8 px-4 md:px-12 lg:px-20">

        {/* Header */}
        <div className="flex items-end justify-between pb-4 lg:pb-3 mb-4 md:mb-6 lg:mb-4 border-b border-[var(--border-color)] shrink-0">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-2xl font-bold text-[var(--text-primary)] tracking-tight uppercase">Writing</h2>
            <div className="text-[9px] md:text-[10px] text-[var(--accent-color)] mt-2 font-mono tracking-[0.2em] md:tracking-[0.3em] uppercase">
              Articles // {loading ? 'Loading...' : `${posts.length > 0 ? `${posts.length} Posts` : 'No Posts'}`}
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-3 text-[9px] text-[var(--text-secondary)] font-mono uppercase tracking-widest opacity-40">
            <div className="w-1.5 h-1.5 bg-[var(--accent-color)] rounded-full animate-pulse shadow-[0_0_8px_var(--accent-color)]"></div>
            Auto-synced daily
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="text-[var(--accent-color)] text-[10px] font-black tracking-[0.4em] uppercase animate-pulse">
                Loading articles...
              </div>
              <div className="flex gap-1.5 justify-center">
                {[0, 1, 2].map(i => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 bg-[var(--accent-color)] rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Empty state */}
        {!loading && posts.length === 0 && (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-3 opacity-40">
              <div className="text-[var(--text-secondary)] text-[10px] font-black tracking-[0.3em] uppercase">
                No articles found
              </div>
              <div className="text-[var(--text-secondary)] text-[9px] font-mono tracking-widest">
                Run the GitHub Action to populate feed
              </div>
            </div>
          </div>
        )}

        {/* MOBILE VIEW */}
        {!loading && posts.length > 0 && (
          <div className="md:hidden flex-1 flex flex-col">
            <div className="flex-1 flex items-center overflow-hidden">
              <div
                ref={mobileScrollRef}
                onScroll={handleMobileScroll}
                className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory w-full"
                style={{ scrollSnapType: 'x mandatory' }}
              >
                {posts.map((post, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 w-full snap-start bg-[var(--panel-bg)] border border-[var(--border-color)] rounded-2xl p-5 flex flex-col gap-3"
                  >
                    <div className="flex items-center justify-between">
                      <SourceBadge source={post.source} />
                      <div className="text-[8px] text-[var(--text-secondary)] font-bold tracking-wider uppercase">
                        {formatDate(post.pubDate)}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="text-[8px] text-[var(--text-secondary)] font-bold tracking-wider uppercase mb-1 opacity-50">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-base font-black text-[var(--text-primary)] uppercase tracking-tight leading-tight mb-3">
                        {post.title}
                      </h3>
                      {post.brief && (
                        <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed line-clamp-4">
                          {post.brief}
                        </p>
                      )}
                    </div>

                    <a
                      href={post.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 rounded-lg text-[9px] font-black tracking-widest uppercase flex items-center justify-center gap-2 bg-[var(--accent-color)] text-black transition-all active:scale-95"
                      onClick={e => e.stopPropagation()}
                    >
                      Read Article <ExternalLink size={11} />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)] shrink-0">
              <button
                onClick={() => scrollMobile('prev')}
                disabled={mobileIndex === 0}
                className={`px-4 py-2 border rounded-full transition-all text-[9px] font-black tracking-wider ${
                  mobileIndex === 0
                    ? 'border-[var(--border-color)] text-[var(--text-secondary)] opacity-30 cursor-not-allowed'
                    : 'border-[var(--accent-color)] text-[var(--accent-color)]'
                }`}
              >
                PREVIOUS_LOG
              </button>
              <div className="text-[8px] text-[var(--text-secondary)] font-bold tracking-widest">
                {mobileIndex + 1} / {posts.length}
              </div>
              <button
                onClick={() => scrollMobile('next')}
                disabled={mobileIndex === posts.length - 1}
                className={`px-4 py-2 border rounded-full transition-all text-[9px] font-black tracking-wider ${
                  mobileIndex === posts.length - 1
                    ? 'border-[var(--border-color)] text-[var(--text-secondary)] opacity-30 cursor-not-allowed'
                    : 'border-[var(--accent-color)] text-[var(--accent-color)]'
                }`}
              >
                NEXT_LOG
              </button>
            </div>
          </div>
        )}

        {/* DESKTOP VIEW */}
        {!loading && posts.length > 0 && (
          <div className="hidden md:flex flex-row gap-0 flex-1 overflow-hidden">

            {/* Post list */}
            <div className="flex-col w-44 lg:w-56 overflow-y-auto no-scrollbar bg-[var(--panel-bg)]/50 border-r border-[var(--border-color)] shrink-0 hidden md:flex">
              {posts.map((post, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`text-left px-4 lg:px-8 py-4 lg:py-6 border-b border-[var(--border-color)] transition-all duration-300 font-mono relative overflow-hidden group shrink-0 ${
                    activeIndex === idx
                      ? 'bg-[var(--accent-color)] text-black'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--accent-dim)]'
                  }`}
                >
                  <div className="flex flex-col gap-1.5">
                    <span className={`text-[8px] lg:text-[9px] font-bold ${activeIndex === idx ? 'text-black/50' : 'text-[var(--accent-color)]/50'}`}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="font-black uppercase tracking-wider text-[9px] lg:text-[10px] line-clamp-2 leading-tight">
                      {post.title}
                    </span>
                    <span className={`text-[8px] font-bold tracking-wider mt-0.5 ${activeIndex === idx ? 'text-black/50' : 'text-[var(--text-secondary)]/60'}`}>
                      {post.source}
                    </span>
                  </div>
                  {activeIndex === idx && (
                    <div className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 w-1 lg:w-1.5 h-1 lg:h-1.5 bg-black rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Post detail */}
            {active && (
              <div className="flex-1 bg-transparent p-6 lg:p-12 relative overflow-hidden flex flex-col">
                <div className="absolute top-10 lg:top-20 right-10 lg:right-20 text-[80px] lg:text-[120px] font-black text-[var(--accent-color)] opacity-5 select-none uppercase tracking-tighter leading-none pointer-events-none">
                  ART_{activeIndex + 1}
                </div>

                <div className="relative z-10 fade-in flex flex-col h-full min-h-0" key={activeIndex}>
                  <div className="mb-4 lg:mb-8 shrink-0">
                    <div className="flex items-center gap-3 mb-3 lg:mb-4 flex-wrap">
                      <SourceBadge source={active.source} />
                      <div className="h-[1px] w-8 bg-[var(--border-color)]"></div>
                      <div className="text-[var(--text-secondary)] text-[9px] lg:text-[10px] font-bold uppercase tracking-[0.2em]">
                        {formatDate(active.pubDate)}
                      </div>
                    </div>
                    <h3 className="text-xl lg:text-3xl font-black text-[var(--text-primary)] tracking-tighter uppercase leading-none">
                      {active.title}
                    </h3>
                  </div>

                  <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar pr-2">
                    {active.brief ? (
                      <p className="text-sm lg:text-base text-[var(--text-secondary)] leading-relaxed font-sans mb-8">
                        {active.brief}
                      </p>
                    ) : (
                      <p className="text-sm text-[var(--text-secondary)] opacity-40 italic mb-8">
                        No preview available.
                      </p>
                    )}

                    <a
                      href={active.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent-color)] text-black rounded-full text-[10px] font-black tracking-widest hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)] transition-all duration-300 shadow-xl"
                    >
                      Read Full Article <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}

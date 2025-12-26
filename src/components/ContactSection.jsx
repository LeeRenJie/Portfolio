import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Mail, BookOpen, PenTool, ExternalLink } from 'lucide-react';

const GitHubIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedInIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

GitHubIcon.propTypes = {
  size: PropTypes.number
};

LinkedInIcon.propTypes = {
  size: PropTypes.number
};

const links = [
  {
    id: "github",
    name: "GitHub",
    icon: GitHubIcon,
    link: "https://github.com/LeeRenJie",
    display: "@LeeRenJie",
    desc: "Source code for mission-critical systems.",
    color: "#6e5494"
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/leerenjie/",
    display: "Lee Ren Jie",
    desc: "Professional deployment history.",
    color: "#0077b5"
  },
  {
    id: "email",
    name: "Email",
    icon: Mail,
    link: "mailto:work.renjie@gmail.com",
    display: "work.renjie@gmail.com",
    desc: "Direct secure communication line.",
    color: "#ea4335"
  },
  {
    id: "hashnode",
    name: "Hashnode",
    icon: BookOpen,
    link: "https://hashnode.com/@LeeRenJie",
    display: "RJ's Blog",
    desc: "Deep tech analysis and engineering logs.",
    color: "#2962ff"
  },
  {
    id: "freecodecamp",
    name: "FreeCodeCamp",
    icon: PenTool,
    link: "https://www.freecodecamp.org/news/author/LeeRenJie/",
    display: "Author Profile",
    desc: "Educational artifacts for 30k+ readers.",
    color: "#00f3ff"
  }
];

export default function ContactSection() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handleCardClick = (idx) => {
    if (activeCardIndex === idx) {
      // Already active, redirect
      window.open(links[idx].link, '_blank');
    } else {
      // Bring to front
      setActiveCardIndex(idx);
    }
  };

  const handleAccessClick = (e, link) => {
    e.stopPropagation();
    window.open(link, '_blank');
  };

  return (
    <section className="h-full lg:min-h-[calc(100vh-8rem)] w-full flex flex-col justify-center overflow-hidden bg-[var(--bg-color)]">
      <div className="w-full flex flex-col h-full lg:min-h-[calc(100vh-8rem)] py-8 md:py-12 lg:py-8 px-4 md:px-12 lg:px-20">
        <div className="flex justify-between items-end border-b border-[var(--border-color)] pb-4 lg:pb-3 mb-4 md:mb-6 lg:mb-4 shrink-0">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-2xl font-bold text-[var(--text-primary)] tracking-tight uppercase leading-none">External Uplinks</h2>
            <div className="text-[9px] md:text-[10px] text-[var(--accent-color)] mt-2 font-mono tracking-[0.2em] md:tracking-[0.3em] uppercase">Communication_Channels // Active</div>
          </div>
        </div>

        {/* MOBILE VIEW - Horizontal File Stack with Icon Selector */}
        <div className="md:hidden flex flex-col">
          {/* Icon selector row - same contrast theme */}
          <div className="flex justify-start gap-2 mb-6 shrink-0">
            {links.map((link, idx) => {
              const IconComponent = link.icon;
              const isActive = activeCardIndex === idx;
              return (
                <button
                  key={link.id}
                  onClick={() => setActiveCardIndex(idx)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 border ${
                    isActive
                      ? 'bg-[var(--accent-color)] text-black border-[var(--accent-color)]'
                      : 'bg-[var(--panel-bg)] text-[var(--text-secondary)] border-[var(--border-color)]'
                  }`}
                >
                  <IconComponent size={16} />
                </button>
              );
            })}
          </div>

          {/* Stacked files area */}
          <div className="flex-1 flex items-center justify-start relative min-h-0">
            <div className="relative w-full aspect-[4/3] max-h-[300px]">
              {links.map((link, idx) => {
                const IconComponent = link.icon;
                const isActive = activeCardIndex === idx;

                // Horizontal stack from left to right
                const stackOffset = (idx - (activeCardIndex ?? 0)) * 10;
                const zIndex = isActive ? 50 : (links.length - Math.abs(idx - (activeCardIndex ?? 0)));
                const rotation = isActive ? 0 : (idx - (activeCardIndex ?? 0)) * 1.5;
                const opacity = isActive ? 1 : 0.5;
                const scale = isActive ? 1 : 0.95;

                return (
                  <div
                    key={link.id}
                    className="absolute inset-0 w-full h-full bg-[var(--panel-bg)] border border-[var(--border-color)] rounded-2xl p-4 transition-all duration-500 ease-out flex flex-col"
                    style={{
                      transform: `translateX(${stackOffset}px) rotate(${rotation}deg) scale(${scale})`,
                      zIndex,
                      opacity,
                      boxShadow: isActive
                        ? '0 15px 30px rgba(0,0,0,0.4)'
                        : '0 4px 12px rgba(0,0,0,0.2)'
                    }}
                  >
                    {/* File tab - same theme color */}
                    <div className="absolute -top-2.5 left-5 px-2.5 py-0.5 rounded-t-md text-[7px] font-black tracking-widest uppercase bg-[var(--accent-color)] text-black">
                      {link.name}
                    </div>

                    <div className="flex items-start gap-3 mt-1">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-[var(--accent-dim)] text-[var(--accent-color)]">
                        <IconComponent size={24} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-lg font-black text-[var(--text-primary)] leading-tight mb-0.5 truncate">{link.display}</div>
                        <div className="text-[9px] text-[var(--text-secondary)] uppercase tracking-wider">{link.name}_UPLINK</div>
                      </div>
                    </div>

                    <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed mt-2">
                      {link.desc}
                    </p>

                    {/* Link preview */}
                    <div className="flex-1 flex items-end">
                      <div className="w-full py-2 px-3 rounded-lg bg-[var(--bg-color)] border border-[var(--border-color)] mt-2">
                        <div className="text-[8px] text-[var(--text-secondary)] uppercase tracking-widest opacity-50 mb-1">ENDPOINT</div>
                        <div className="text-[10px] text-[var(--accent-color)] font-mono truncate">{link.link.replace('mailto:', '').replace('https://', '')}</div>
                      </div>
                    </div>

                    {/* Button aligned to bottom */}
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-2.5 rounded-lg text-[9px] font-black tracking-widest uppercase flex items-center justify-center gap-2 transition-all active:scale-95 bg-[var(--accent-color)] text-black mt-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      ACCESS_UPLINK <ExternalLink size={11} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* DESKTOP VIEW - Responsive Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-0 border border-[var(--border-color)] flex-1 overflow-y-auto no-scrollbar min-h-0">
          {links.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.id}
                href={link.link}
                target="_blank"
                rel="noreferrer"
                className="group relative p-4 lg:p-6 border-r border-b border-[var(--border-color)] [&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 hover:bg-[var(--accent-color)] transition-all duration-500 overflow-hidden flex flex-col justify-center"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 lg:h-1 bg-[var(--text-primary)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>

                <div className="relative z-10 flex flex-col items-start gap-2 lg:gap-4">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl bg-[var(--bg-color)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] group-hover:bg-[var(--bg-color)] group-hover:text-[var(--accent-color)] group-hover:border-[var(--bg-color)] transition-all duration-500 shrink-0">
                    <IconComponent size={16} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-[7px] lg:text-[9px] text-[var(--text-secondary)] font-bold uppercase tracking-wider lg:tracking-widest mb-0.5 group-hover:text-[var(--bg-color)]/50 transition-colors">{link.name}</div>
                    <div className="text-xs lg:text-base font-black text-[var(--text-primary)] group-hover:text-[var(--bg-color)] transition-colors mb-0.5 lg:mb-1 leading-none truncate">{link.display}</div>
                    <div className="hidden lg:block text-[9px] text-[var(--text-secondary)] font-mono group-hover:text-[var(--bg-color)]/70 transition-colors leading-relaxed line-clamp-2 uppercase">
                      {link.desc}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-2 lg:bottom-4 right-3 lg:right-6 text-[20px] lg:text-[30px] font-black text-[var(--text-primary)] opacity-5 group-hover:text-[var(--bg-color)]/10 select-none uppercase tracking-tighter">
                  0{index + 1}
                </div>
              </a>
            );
          })}

          {/* Signal Strength Box - Large screens only */}
          <div className="hidden lg:flex p-6 items-center justify-center border-b border-[var(--border-color)] bg-[var(--accent-dim)]">
            <div className="text-xl font-black text-[var(--accent-color)] tracking-tighter opacity-20">SIGNAL_STRENGTH: 100%</div>
          </div>
        </div>
      </div>
    </section>
  );
}

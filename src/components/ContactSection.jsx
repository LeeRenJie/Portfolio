import React from 'react';
import PropTypes from 'prop-types';
import { Mail, Globe, BookOpen } from 'lucide-react';

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

export default function ContactSection() {
  const links = [
    {
      id: "github",
      name: "GitHub",
      icon: <GitHubIcon size={24} />,
      link: "https://github.com/LeeRenJie",
      display: "@LeeRenJie",
      desc: "Source code for mission-critical systems."
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: <LinkedInIcon size={24} />,
      link: "https://www.linkedin.com/in/leerenjie/",
      display: "Lee Ren Jie",
      desc: "Professional deployment history."
    },
    {
      id: "email",
      name: "Email",
      icon: <Mail size={24} />,
      link: "mailto:work.renjie@gmail.com",
      display: "work.renjie@gmail.com",
      desc: "Direct secure communication line."
    },
    {
      id: "hashnode",
      name: "Hashnode",
      icon: <BookOpen size={24} />,
      link: "https://hashnode.com/@LeeRenJie",
      display: "RJ's Blog",
      desc: "Deep tech analysis and engineering logs."
    },
    {
      id: "freecodecamp",
      name: "FreeCodeCamp",
      icon: <Globe size={24} />,
      link: "https://www.freecodecamp.org/news/author/LeeRenJie/",
      display: "Author Profile",
      desc: "Educational artifacts for 30k+ readers."
    }
  ];

  return (
    <section className="h-full lg:min-h-[calc(100vh-8rem)] w-full flex flex-col justify-center overflow-hidden bg-[var(--bg-color)]">
      <div className="w-full flex flex-col h-full lg:min-h-[calc(100vh-8rem)] py-12 lg:py-8 px-12 lg:px-20">
        <div className="flex justify-between items-end border-b border-[var(--border-color)] pb-4 lg:pb-3 mb-6 lg:mb-4 shrink-0">
          <div>
            <h2 className="text-3xl lg:text-2xl font-bold text-[var(--text-primary)] tracking-tight uppercase leading-none">External Uplinks</h2>
            <div className="text-[10px] text-[var(--accent-color)] mt-2 font-mono tracking-[0.3em] uppercase">Communication_Channels // Active</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-rows-none md:grid-rows-3 lg:grid-rows-2 gap-0 border border-[var(--border-color)] flex-1 overflow-y-auto no-scrollbar min-h-0">
          {links.map((link, index) => (
            <a
              key={link.id}
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className="group relative p-6 lg:p-8 border-r border-b border-[var(--border-color)] last:border-r-0 hover:bg-[var(--accent-color)] transition-all duration-500 overflow-hidden h-full flex flex-col justify-center"
            >
              {/* Hover Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[var(--text-primary)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>

              <div className="relative z-10 flex flex-col items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-[var(--bg-color)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] group-hover:bg-[var(--bg-color)] group-hover:text-[var(--accent-color)] group-hover:border-[var(--bg-color)] transition-all duration-500 shrink-0">
                  {React.cloneElement(link.icon, { size: 20 })}
                </div>

                <div className="flex-1">
                  <div className="text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-widest mb-1 group-hover:text-[var(--bg-color)]/50 transition-colors">{link.name}</div>
                  <div className="text-xl font-black text-[var(--text-primary)] group-hover:text-[var(--bg-color)] transition-colors mb-2 leading-none">{link.display}</div>
                  <div className="text-[10px] text-[var(--text-secondary)] font-mono group-hover:text-[var(--bg-color)]/70 transition-colors leading-relaxed line-clamp-2 uppercase">
                    {link.desc}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 right-6 text-[30px] font-black text-[var(--text-primary)] opacity-5 group-hover:text-[var(--bg-color)]/10 select-none uppercase tracking-tighter">
                0{index + 1}
              </div>
            </a>
          ))}

          {/* Signal Strength Box */}
          <div className="p-6 lg:p-8 flex items-center justify-center border-b border-[var(--border-color)] bg-[var(--accent-dim)]">
            <div className="text-xl font-black text-[var(--accent-color)] tracking-tighter opacity-20">SIGNAL_STRENGTH: 100%</div>
          </div>
        </div>
      </div>
    </section>
  );
}

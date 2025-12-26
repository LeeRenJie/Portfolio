import React, { useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: "Arkmind Sdn. Bhd.",
    role: "Associate Software Developer",
    period: "Nov 2024 — Present",
    location: "Puchong, MY",
    highlights: [
      "Focused primarily on a Loan Management System digitizing the hire purchase loan process for motorcycles.",
      "Delivered core frontend features for CredMatch, enabling borrowers to apply with 10+ licensed lenders through a single application.",
      "Built and launched an Islamic financing product landing page, supporting adoption by thousands of borrowers.",
      "Developed and maintained multiple white-label fintech product variants, reducing bug turnaround times.",
      "Contributed to a subscription-based SaaS lending platform for licensed moneylenders.",
      "Led the revamp of Arkmind's corporate and AoDL association WordPress websites.",
      "Collaborated cross-functionally with Tech Leads and Business Analysts to deliver compliant features under tight deadlines."
    ],
    tech: ["React", "TypeScript", "Redux", "Node.js", "Prisma", "MySQL", "Jenkins", "Ant Design", "TailwindCSS", ".NET"]
  },
  {
    company: "Codeo",
    role: "Software Developer",
    period: "Jul 2023 — Feb 2024",
    location: "Puchong, MY",
    highlights: [
      "Spearheaded Codeo's landing page development with TailwindCSS, achieving a Lighthouse performance score of 100.",
      "Designed and implemented custom animations and mobile-first layouts, improving engagement and responsiveness.",
      "Built an Express server handling JWT authentication and Google service account integration, streamlining user sign-ups to Google Sheets.",
      "Developed lesson features for the Codeo.ai mobile app using React Native, Redux, and NativeBase, tested with Jest.",
      "Collaborated with Product Manager and UI/UX Designer to ensure design fidelity and improve user engagement."
    ],
    tech: ["React Native", "Redux", "NativeBase", "TailwindCSS", "Express", "Node.js", "Jest", "Hasura", "Apollo GraphQL"]
  },
  {
    company: "Sigma Studios",
    role: "Software Developer Intern",
    period: "Jul 2023 — Nov 2023",
    location: "Puchong, MY",
    highlights: [
      "Developed a highly interactive and responsive landing page leveraging Pug for HTML templating, CSS for styling, and JavaScript for dynamic functionalities."
    ],
    tech: ["Pug", "CSS", "JavaScript"]
  },
  {
    company: "FreeCodeCamp & Hashnode",
    role: "Contributing Writer",
    period: "Apr 2021 — Present",
    location: "Remote",
    highlights: [
      "Authored articles on software engineering, web development, and career tips, reaching over 30,000+ readers worldwide.",
      "Recognized as Top 50 Author on Hashnode (April 2021).",
      "Sharpened ability to simplify complex technical concepts for global developer audiences."
    ],
    tech: ["Technical Writing", "Developer Advocacy", "SEO"]
  },
  {
    company: "Coden",
    role: "Founder",
    period: "Apr 2021 — Jan 2022",
    location: "Remote",
    highlights: [
      "Founded and grew a Discord tech community to 300+ students and developers, fostering learning and peer mentorship.",
      "Led open-source projects like JobBuddy (Discord hiring bot), connecting employers with community talent.",
      "Built a trusted space that evolved into a recruitment pipeline for companies seeking early tech talent."
    ],
    tech: ["Community Building", "Discord Bot Development", "Open Source Leadership"]
  }
];

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileModalOpen, setMobileModalOpen] = useState(false);
  const [selectedExp, setSelectedExp] = useState(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const mobileScrollRef = useRef(null);

  const openMobileModal = (exp) => {
    setSelectedExp(exp);
    setMobileModalOpen(true);
  };

  const closeMobileModal = () => {
    setMobileModalOpen(false);
    setSelectedExp(null);
  };

  const scrollMobile = (dir) => {
    const newIndex = dir === 'prev'
      ? Math.max(0, mobileIndex - 1)
      : Math.min(experiences.length - 1, mobileIndex + 1);
    setMobileIndex(newIndex);
    if (mobileScrollRef.current) {
      const card = mobileScrollRef.current.children[newIndex];
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      }
    }
  };

  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const container = mobileScrollRef.current;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.clientWidth;
    const gap = 16; // gap-4 = 1rem = 16px
    const newIndex = Math.round(scrollLeft / (containerWidth + gap));
    if (newIndex !== mobileIndex && newIndex >= 0 && newIndex < experiences.length) {
      setMobileIndex(newIndex);
    }
  };

  return (
    <section className="h-full lg:min-h-[calc(100vh-8rem)] w-full flex flex-col justify-center overflow-hidden bg-[var(--bg-color)]">
      <div className="w-full h-full lg:min-h-[calc(100vh-8rem)] flex flex-col py-8 md:py-12 lg:py-8 px-4 md:px-12 lg:px-20">
        <div className="flex items-end justify-between pb-4 lg:pb-3 mb-4 md:mb-6 lg:mb-4 border-b border-[var(--border-color)] shrink-0">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-2xl font-bold text-[var(--text-primary)] tracking-tight uppercase">Deployment Log</h2>
            <div className="text-[9px] md:text-[10px] text-[var(--accent-color)] mt-2 font-mono tracking-[0.2em] md:tracking-[0.3em] uppercase">SYSTEM_CHRONOLOGY // ALL_RECORDS_ACTIVE</div>
          </div>
        </div>

        {/* MOBILE VIEW - Horizontal Scrollable Carousel */}
        <div className="md:hidden flex-1 flex flex-col">
          {/* Carousel Container */}
          <div className="flex-1 flex items-center overflow-hidden">
            <div
              ref={mobileScrollRef}
              onScroll={handleMobileScroll}
              className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory w-full"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {experiences.map((exp, idx) => (
                <button
                  key={exp.company}
                  onClick={() => openMobileModal(exp)}
                  className="flex-shrink-0 w-full snap-start bg-[var(--panel-bg)] border border-[var(--border-color)] rounded-2xl p-5 text-left transition-all active:scale-[0.98] active:border-[var(--accent-color)]"
                >
                  {/* Record number badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="px-3 py-1 bg-[var(--accent-color)] text-black text-[8px] font-black tracking-widest rounded-full">
                      REC_0{idx + 1}
                    </div>
                    <div className="text-[8px] text-[var(--text-secondary)] font-bold tracking-wider uppercase">
                      {exp.location}
                    </div>
                  </div>

                  {/* Role & Company */}
                  <div className="mb-4">
                    <h3 className="text-lg font-black text-[var(--text-primary)] uppercase tracking-tight leading-tight mb-2">
                      {exp.role}
                    </h3>
                    <div className="text-sm text-[var(--accent-color)] font-black uppercase tracking-widest">
                      @ {exp.company}
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[var(--border-color)]">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_6px_#22c55e]"></div>
                    <div className="text-[10px] text-[var(--text-secondary)] font-bold tracking-widest uppercase">
                      {exp.period}
                    </div>
                  </div>

                  {/* Tech stack preview */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {exp.tech.slice(0, 4).map(t => (
                      <span key={t} className="px-2 py-1 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-full text-[8px] text-[var(--text-secondary)] font-bold uppercase">
                        {t}
                      </span>
                    ))}
                    {exp.tech.length > 4 && (
                      <span className="px-2 py-1 text-[8px] text-[var(--accent-color)] font-bold">+{exp.tech.length - 4} more</span>
                    )}
                  </div>

                  {/* Tap hint */}
                  <div className="flex items-center justify-center gap-2 text-[9px] text-[var(--accent-color)] font-black tracking-widest uppercase">
                    <span>TAP_FOR_DETAILS</span>
                    <span>&gt;&gt;</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Controls - Same style as Projects section */}
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

            <button
              onClick={() => scrollMobile('next')}
              disabled={mobileIndex === experiences.length - 1}
              className={`px-4 py-2 border rounded-full transition-all text-[9px] font-black tracking-wider ${
                mobileIndex === experiences.length - 1
                  ? 'border-[var(--border-color)] text-[var(--text-secondary)] opacity-30 cursor-not-allowed'
                  : 'border-[var(--accent-color)] text-[var(--accent-color)]'
              }`}
            >
              NEXT_LOG
            </button>
          </div>
        </div>

        {/* MOBILE MODAL */}
        {mobileModalOpen && selectedExp && (
          <div className="md:hidden fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-[var(--border-color)]">
              <div className="text-[10px] text-[var(--accent-color)] font-bold tracking-widest uppercase">DEPLOYMENT_DETAILS</div>
              <button
                onClick={closeMobileModal}
                className="w-8 h-8 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)]"
              >
                <X size={16} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              <div>
                <div className="text-[9px] text-[var(--accent-color)] font-bold tracking-widest uppercase mb-2">{selectedExp.period} // {selectedExp.location}</div>
                <h3 className="text-2xl font-black text-[var(--text-primary)] uppercase tracking-tight leading-none mb-2">{selectedExp.role}</h3>
                <div className="text-sm text-[var(--accent-color)] font-black uppercase tracking-widest">@ {selectedExp.company}</div>
              </div>

              <div>
                <div className="text-[9px] text-[var(--text-secondary)] font-bold tracking-widest uppercase mb-3 opacity-50">Mission_Highlights</div>
                <ul className="space-y-3">
                  {selectedExp.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-[var(--text-secondary)] leading-relaxed flex items-start gap-3">
                      <span className="text-[var(--accent-color)] text-[8px] font-black mt-1 shrink-0">{`>>`}</span>
                      <span className="opacity-90">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-[9px] text-[var(--text-secondary)] font-bold tracking-widest uppercase mb-3 opacity-50">Stack_Used</div>
                <div className="flex flex-wrap gap-2">
                  {selectedExp.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-[var(--panel-bg)] border border-[var(--border-color)] rounded-full text-[10px] text-[var(--text-secondary)] font-bold uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DESKTOP VIEW - Original tabbed layout */}
        <div className="hidden md:flex flex-row gap-0 flex-1 overflow-hidden">
          {/* Nav - Narrower on tablet, wider on desktop */}
          <div className="flex-col w-44 lg:w-56 overflow-y-auto no-scrollbar bg-[var(--panel-bg)]/50 border-r border-[var(--border-color)] shrink-0 hidden md:flex">
            {experiences.map((exp, idx) => (
              <button
                key={exp.company}
                onClick={() => setActiveIndex(idx)}
                className={`text-left px-4 lg:px-8 py-4 lg:py-6 border-b border-[var(--border-color)] transition-all duration-300 font-mono text-[10px] lg:text-[11px] relative overflow-hidden group shrink-0 ${activeIndex === idx
                    ? 'bg-[var(--accent-color)] text-black'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--accent-dim)]'
                  }`}
              >
                <div className="flex flex-col">
                  <span className={`text-[8px] lg:text-[9px] mb-1 font-bold ${activeIndex === idx ? 'text-black/50' : 'text-[var(--accent-color)]/50'}`}>0{idx + 1}</span>
                  <span className="font-black uppercase tracking-wider lg:tracking-widest text-[9px] lg:text-[11px]">{exp.company}</span>
                </div>
                {activeIndex === idx && (
                  <div className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 w-1 lg:w-1.5 h-1 lg:h-1.5 bg-black rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 bg-transparent p-6 lg:p-12 relative overflow-hidden flex flex-col">
            <div className="absolute top-10 lg:top-20 right-10 lg:right-20 text-[80px] lg:text-[120px] font-black text-[var(--accent-color)] opacity-5 select-none uppercase tracking-tighter leading-none pointer-events-none">
              REC_{activeIndex + 1}
            </div>

            <div className="relative z-10 fade-in flex flex-col h-full min-h-0" key={activeIndex}>
              <div className="mb-4 lg:mb-8 shrink-0">
                <h3 className="text-xl lg:text-3xl font-black text-[var(--text-primary)] tracking-tighter uppercase mb-2 lg:mb-4 leading-none">{experiences[activeIndex].role}</h3>
                <div className="flex items-center gap-2 lg:gap-4 flex-wrap">
                  <div className="text-[var(--accent-color)] text-xs lg:text-sm font-black tracking-widest uppercase">@ {experiences[activeIndex].company}</div>
                  <div className="h-[1px] w-8 lg:w-12 bg-[var(--border-color)] hidden lg:block"></div>
                  <div className="text-[var(--text-secondary)] text-[9px] lg:text-[10px] uppercase font-bold tracking-[0.15em] lg:tracking-[0.2em]">{experiences[activeIndex].period}</div>
                </div>
              </div>

              <div className="grid lg:grid-cols-[1fr_180px] gap-4 lg:gap-8 flex-1 min-h-0">
                <ul className="space-y-3 lg:space-y-4 overflow-y-auto no-scrollbar pr-2 lg:pr-4">
                  {experiences[activeIndex].highlights.map((h) => (
                    <li key={h} className="text-xs lg:text-sm text-[var(--text-secondary)] leading-relaxed flex items-start gap-2 lg:gap-4">
                      <span className="text-[var(--accent-color)] mt-1 text-[7px] lg:text-[8px] font-black shrink-0 tracking-tighter opacity-80">{`>>`}</span>
                      <span className="flex-1 opacity-90">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-4 lg:space-y-6 self-start sticky top-0 hidden lg:block">
                  <div>
                    <div className="text-[9px] lg:text-[10px] text-[var(--text-secondary)] font-black uppercase tracking-widest mb-2 lg:mb-3 opacity-50">Stack_Used</div>
                    <div className="flex flex-wrap gap-1.5 lg:gap-2">
                      {experiences[activeIndex].tech.map(t => (
                        <span key={t} className="px-2 lg:px-3 py-1 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-full text-[var(--text-secondary)] text-[9px] lg:text-[10px] font-bold hover:bg-[var(--accent-color)] hover:text-black hover:border-[var(--accent-color)] transition-all duration-300 cursor-default">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-[9px] lg:text-[10px] text-[var(--text-secondary)] font-black uppercase tracking-widest mb-2 lg:mb-3 opacity-50">Location</div>
                    <div className="text-[var(--text-primary)] text-[10px] lg:text-xs font-bold uppercase">{experiences[activeIndex].location}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

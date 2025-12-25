import React, { useState } from 'react';

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

  return (
    <section className="h-full lg:min-h-[calc(100vh-8rem)] w-full flex flex-col justify-center overflow-hidden bg-[var(--bg-color)]">
      <div className="w-full h-full lg:min-h-[calc(100vh-8rem)] flex flex-col py-12 lg:py-8 px-12 lg:px-20">
        <div className="flex items-end justify-between pb-4 lg:pb-3 mb-6 lg:mb-4 border-b border-[var(--border-color)] shrink-0">
          <div>
            <h2 className="text-3xl lg:text-2xl font-bold text-[var(--text-primary)] tracking-tight uppercase">Deployment Log</h2>
            <div className="text-[10px] text-[var(--accent-color)] mt-2 font-mono tracking-[0.3em] uppercase">SYSTEM_CHRONOLOGY // ALL_RECORDS_ACTIVE</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-0 flex-1 overflow-hidden">
          {/* Nav - Scrollable for overflow */}
          <div className="flex md:flex-col md:w-64 max-h-[20vh] md:max-h-full overflow-y-auto no-scrollbar md:bg-[var(--panel-bg)]/50 border-r border-[var(--border-color)] shrink-0">
            {experiences.map((exp, idx) => (
              <button
                key={exp.company}
                onClick={() => setActiveIndex(idx)}
                className={`text-left px-12 py-8 border-b border-[var(--border-color)] transition-all duration-300 font-mono text-[11px] relative overflow-hidden group shrink-0 ${activeIndex === idx
                    ? 'bg-[var(--accent-color)] text-black'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--accent-dim)]'
                  }`}
              >
                <div className="flex flex-col">
                  <span className={`text-[9px] mb-1 font-bold ${activeIndex === idx ? 'text-black/50' : 'text-[var(--accent-color)]/50'}`}>0{idx + 1}</span>
                  <span className="font-black uppercase tracking-widest">{exp.company}</span>
                </div>
                {activeIndex === idx && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-black rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Content - Flush to nav */}
          <div className="flex-1 bg-transparent p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col">
            <div className="absolute top-20 right-20 text-[120px] font-black text-[var(--accent-color)] opacity-5 select-none uppercase tracking-tighter leading-none pointer-events-none">
              REC_{activeIndex + 1}
            </div>

            <div className="relative z-10 fade-in flex flex-col h-full min-h-0" key={activeIndex}>
              {/* Fixed Header */}
              <div className="mb-8 shrink-0">
                <h3 className="text-3xl lg:text-4xl font-black text-[var(--text-primary)] tracking-tighter uppercase mb-4 leading-none">{experiences[activeIndex].role}</h3>
                <div className="flex items-center gap-4">
                  <div className="text-[var(--accent-color)] text-sm font-black tracking-widest uppercase">@ {experiences[activeIndex].company}</div>
                  <div className="h-[1px] w-12 bg-[var(--border-color)]"></div>
                  <div className="text-[var(--text-secondary)] text-[10px] uppercase font-bold tracking-[0.2em]">{experiences[activeIndex].period}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-[1fr_200px] gap-8 lg:gap-12 flex-1 min-h-0">
                {/* Scrollable Description */}
                <ul className="space-y-4 overflow-y-auto no-scrollbar pr-4">
                  {experiences[activeIndex].highlights.map((h) => (
                    <li key={h} className="text-sm lg:text-[15px] text-[var(--text-secondary)] leading-relaxed flex items-start gap-4">
                      <span className="text-[var(--accent-color)] mt-1.5 text-[8px] font-black shrink-0 tracking-tighter opacity-80">
                        {`>>`}
                      </span>
                      <span className="flex-1 opacity-90">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Fixed Stack & Location */}
                <div className="space-y-6 self-start sticky top-0">
                  <div>
                    <div className="text-[10px] text-[var(--text-secondary)] font-black uppercase tracking-widest mb-3 opacity-50">Stack_Used</div>
                    <div className="flex flex-wrap gap-2">
                      {experiences[activeIndex].tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-full text-[var(--text-secondary)] text-[10px] font-bold hover:bg-[var(--accent-color)] hover:text-black hover:border-[var(--accent-color)] transition-all duration-300 cursor-default hover:scale-110">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--text-secondary)] font-black uppercase tracking-widest mb-3 opacity-50">Location</div>
                    <div className="text-[var(--text-primary)] text-xs font-bold uppercase">{experiences[activeIndex].location}</div>
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

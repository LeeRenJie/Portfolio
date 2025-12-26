import { useState } from 'react';
import PropTypes from 'prop-types';

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 90, projects: ["CredMatch", "ArkHP", "redCASH", "SaaS Lending"] },
      { name: "Next.js", level: 55, projects: ["Hireti", "VerifyMy"] },
      { name: "React Native", level: 65, projects: ["Codeo Mobile App"] },
      { name: "TypeScript", level: 88, projects: ["CredMatch", "ArkHP", "Hireti", "SaaS Lending"] },
      { name: "Redux", level: 85, projects: ["CredMatch", "Codeo App"] },
      { name: "Ant Design", level: 88, projects: ["CredMatch"] },
      { name: "TailwindCSS", level: 92, projects: ["Hireti", "Codeo Landing", "redCASH"] },
      { name: "Pug", level: 45, projects: ["Sigma Studios Landing"] }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 80, projects: ["ArkHP", "Codeo Backend", "JobBuddy"] },
      { name: "Express.js", level: 78, projects: ["Codeo Backend", "Sheet Linker"] },
      { name: ".NET", level: 60, projects: ["ArkCash White-Label"] },
      { name: "Ruby On Rails", level: 55, projects: ["Internal Tools"] },
      { name: "Prisma ORM", level: 85, projects: ["ArkHP", "SaaS Lending"] },
      { name: "Apollo GraphQL", level: 40, projects: ["Codeo Mobile App"] },
      { name: "Hasura", level: 40, projects: ["Codeo Mobile App"] }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", level: 88, projects: ["ArkHP", "CredMatch", "SaaS Lending"] },
      { name: "MongoDB", level: 60, projects: ["JobBuddy Discord Bot"] }
    ]
  },
  {
    category: "DevOps & Infrastructure",
    skills: [
      { name: "Docker", level: 60, projects: ["Microservices Deployment"] },
      { name: "Kubernetes (K8s)", level: 55, projects: ["Cluster Orchestration"] },
      { name: "GitHub Actions", level: 82, projects: ["CI/CD Automation"] },
      { name: "Jenkins", level: 45, projects: ["Arkmind CI/CD Pipeline"] },
      { name: "AWS", level: 50, projects: ["Hireti Hosting", "Lambda Functions"] },
      { name: "DigitalOcean", level: 78, projects: ["App Hosting", "Static Sites"] },
      { name: "NGINX", level: 75, projects: ["Reverse Proxy"] },
      { name: "PM2", level: 75, projects: ["Process Management"] },
      { name: "Linux", level: 68, projects: ["Server Administration"] }
    ]
  },
  {
    category: "AI & Automation",
    skills: [
      { name: "Prompt Engineering", level: 95, projects: ["AI-Powered Workflows"] },
      { name: "Claude Code", level: 95, projects: ["Rapid Development"] },
      { name: "Respond.io", level: 88, projects: ["Customer Automation | Villa Customer Communication Workflow"] }
    ]
  },
  {
    category: "Tools & Analytics",
    skills: [
      { name: "GitHub", level: 95, projects: ["Version Control", "Collaboration"] },
      { name: "VS Code", level: 80, projects: ["Primary IDE"] },
      { name: "Postman", level: 70, projects: ["API Testing"] },
      { name: "GA4", level: 50, projects: ["User Analytics"] },
      { name: "GTM", level: 50, projects: ["Event Tracking"] },
      { name: "WordPress", level: 85, projects: ["Arkmind Website", "AoDL Website", "Other Freelance Projects"] },
      { name: "Termius", level: 90, projects: ["SSH Management"] },
      { name: "Jest", level: 70, projects: ["Codeo App Testing, Arkmind Related Projects"] },
      { name: "SonarQube", level: 75, projects: ["Code Quality Scanning, Arkmind Related Projects"] }
    ]
  }
];

const getSkillStatus = (level) => {
  if (level >= 95) return 'CRITICAL SYSTEMS';
  if (level >= 90) return 'COMBAT READY';
  if (level >= 85) return 'MISSION CAPABLE';
  if (level >= 75) return 'OPERATIONAL';
  if (level >= 65) return 'FUNCTIONAL';
  return 'LIMITED';
};

const SkillBar = ({ name, level }) => {
  const blocks = 10;
  const filledBlocks = Math.floor((level / 100) * blocks);
  const partialFill = ((level / 100) * blocks) % 1; // Get the decimal part

  return (
    <div className="space-y-2 md:space-y-3 group w-full">
      <div className="flex justify-between items-end gap-1">
        <div className="text-[8px] md:text-[10px] font-black tracking-[0.15em] md:tracking-[0.3em] text-[var(--accent-color)] uppercase flex items-center gap-1 md:gap-2 truncate">
          <span className="w-1 md:w-1.5 h-1 md:h-1.5 bg-[var(--accent-color)] rounded-full animate-pulse shrink-0"></span>
          <span className="truncate">{name}</span>
        </div>
        <div className="hidden md:block text-[9px] text-[var(--text-secondary)] font-bold uppercase tracking-widest group-hover:text-[var(--text-primary)] transition-colors shrink-0">
          STATUS: {getSkillStatus(level)}
        </div>
      </div>

      <div className="flex gap-1 md:gap-1.5">
        {Array.from({ length: blocks }, (_, i) => {
          let fillPercentage = 0;

          if (i < filledBlocks) {
            fillPercentage = 100; // Fully filled
          } else if (i === filledBlocks && partialFill > 0) {
            fillPercentage = partialFill * 100; // Partially filled
          }

          return (
            <div
              key={`block-${name}-${i}`}
              className={`h-2 flex-1 rounded-sm transition-all duration-500 relative overflow-hidden ${
                fillPercentage === 0 ? 'bg-[var(--border-color)]' : ''
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {fillPercentage > 0 && (
                <div
                  className="absolute inset-0 bg-[var(--accent-color)] shadow-[0_0_10px_var(--accent-dim)] transition-all duration-500"
                  style={{
                    width: `${fillPercentage}%`,
                    transitionDelay: `${i * 50}ms`
                  }}
                />
              )}
              {fillPercentage === 0 && (
                <div className="w-full h-full bg-[var(--border-color)]" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired
};

export default function StackSection() {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const categorySubtitles = {
    "Frontend": "FRAMEWORK_ANALYSIS // UI_ENGINE",
    "Backend": "SERVER_CORES // API_PROTOCOLS",
    "Database": "DATA_STORAGE // SCHEMA_SYNC",
    "DevOps & Testing": "CI_CD_PIPELINE // QUALITY_CONTROL",
    "Automation": "WORKFLOW_LOGIC // AGENTIC_SYSTEMS",
    "Utility": "UTILITY_GEAR // DEV_ENVIRONMENT"
  };

  return (
    <section className="h-full lg:min-h-[calc(100vh-8rem)] w-full flex flex-col justify-center overflow-hidden bg-[var(--bg-color)]">
      <div className="w-full flex flex-col h-full lg:min-h-[calc(100vh-8rem)] py-8 md:py-12 lg:py-8 px-4 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 lg:pb-3 mb-4 md:mb-6 lg:mb-4 border-b border-[var(--border-color)] gap-3 md:gap-4 shrink-0">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-2xl font-bold text-[var(--text-primary)] tracking-tight uppercase leading-none">System Specs</h2>
            <div className="text-[9px] md:text-[10px] text-[var(--accent-color)] mt-2 font-mono tracking-[0.2em] md:tracking-[0.3em] uppercase">
              {categorySubtitles[activeCategory] || "Module_Mapping // Version_Control"}
            </div>
          </div>

          {/* Category Switcher - Wraps on mobile/tablet, inline on desktop */}
          <div className="flex flex-wrap gap-1.5 md:gap-1.5 lg:gap-2 pb-1 max-w-full lg:max-w-none">
            {skillCategories.map(cat => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-2 md:px-2.5 lg:px-4 py-1 md:py-1 lg:py-1.5 rounded-full text-[8px] md:text-[9px] lg:text-[10px] font-bold font-mono transition-all border whitespace-nowrap ${activeCategory === cat.category
                    ? 'bg-[var(--accent-color)] text-black border-[var(--accent-color)]'
                    : 'bg-transparent text-[var(--text-secondary)] border-[var(--border-color)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]'
                  }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {(() => {
          const skills = skillCategories.find(c => c.category === activeCategory).skills;
          const uniqueProjects = [...new Set(skills.flatMap(s => s.projects))];
          const avgLevel = Math.round(skills.reduce((sum, s) => sum + Math.min(s.level, 100), 0) / skills.length);
          const criticalCount = skills.filter(s => s.level >= 90).length;
          // Dynamic columns: 3 cols only for 9+ skills, otherwise 2 cols (on desktop)
          const gridCols = skills.length >= 9 ? 'lg:grid-cols-3' : 'lg:grid-cols-2';

          return (
            <>
              <div className={`grid grid-cols-2 ${gridCols} gap-x-4 md:gap-x-12 gap-y-4 md:gap-y-10 items-start content-start`}>
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="font-mono text-sm relative group flex items-center"
                  >
                    <SkillBar name={skill.name} level={skill.level} />

                    {/* Deep Dive Tooltip - Hidden on mobile, shown on desktop hover */}
                    <div className="absolute top-[100%] left-0 w-full z-50 mt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 hidden md:block">
                      <div className="bg-[var(--panel-bg)] border border-[var(--accent-color)]/30 p-4 rounded-2xl shadow-2xl relative">
                        <div className="text-[9px] text-[var(--accent-color)] mb-2 font-black tracking-widest uppercase opacity-50">Deployed In:</div>
                        <div className="flex flex-wrap gap-2">
                          {skill.projects.map(p => (
                            <span key={p} className="text-[10px] text-[var(--text-primary)] border-l border-[var(--accent-color)] pl-2 opacity-80">
                              {p}
                            </span>
                          ))}
                        </div>
                        <div className="absolute top-[-6px] left-8 w-3 h-3 bg-[var(--panel-bg)] border-l border-t border-[var(--accent-color)]/30 transform rotate-45"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Card - Desktop only, below progress bars */}
              <div className="hidden lg:flex mt-auto pt-8 gap-8 border-t border-[var(--border-color)]">
                <div className="flex items-center gap-3">
                  <span className="text-[9px] text-[var(--text-secondary)] uppercase tracking-widest">Technologies</span>
                  <span className="text-lg font-black text-[var(--accent-color)]">{skills.length}</span>
                </div>
                <div className="w-px h-6 bg-[var(--border-color)]"></div>
                <div className="flex items-center gap-3">
                  <span className="text-[9px] text-[var(--text-secondary)] uppercase tracking-widest">Deployments</span>
                  <span className="text-lg font-black text-[var(--accent-color)]">{uniqueProjects.length}</span>
                </div>
                <div className="w-px h-6 bg-[var(--border-color)]"></div>
                <div className="flex items-center gap-3">
                  <span className="text-[9px] text-[var(--text-secondary)] uppercase tracking-widest">Avg Proficiency</span>
                  <span className="text-lg font-black text-[var(--accent-color)]">{avgLevel}%</span>
                </div>
                <div className="w-px h-6 bg-[var(--border-color)]"></div>
                <div className="flex items-center gap-3">
                  <span className="text-[9px] text-[var(--text-secondary)] uppercase tracking-widest">Critical Systems</span>
                  <span className="text-lg font-black text-[var(--accent-color)]">{criticalCount}</span>
                </div>
              </div>
            </>
          );
        })()}
      </div>
    </section>
  );
}

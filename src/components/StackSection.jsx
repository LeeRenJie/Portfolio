import { useState } from 'react';
import PropTypes from 'prop-types';

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 95, projects: ["CredMatch", "ArkHP", "redCASH", "SaaS Lending"] },
      { name: "Next.js", level: 60, projects: ["Hireti", "VerifyMy"] },
      { name: "React Native", level: 70, projects: ["Codeo Mobile App"] },
      { name: "TypeScript", level: 90, projects: ["CredMatch", "ArkHP", "Hireti", "SaaS Lending"] },
      { name: "Redux", level: 780, projects: ["CredMatch", "Codeo App"] },
      { name: "Ant Design", level: 90, projects: ["CredMatch"] },
      { name: "TailwindCSS", level: 95, projects: ["Hireti", "Codeo Landing", "redCASH"] },
      { name: "Pug", level: 50, projects: ["Sigma Studios Landing"] }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 70, projects: ["ArkHP", "Codeo Backend", "JobBuddy"] },
      { name: "Express.js", level: 70, projects: ["Codeo Backend", "Sheet Linker"] },
      { name: ".NET", level: 50, projects: ["ArkCash White-Label"] },
      { name: "Ruby On Rails", level: 55, projects: ["Internal Tools"] },
      { name: "Prisma ORM", level: 80, projects: ["ArkHP", "SaaS Lending"] },
      { name: "Apollo GraphQL", level: 40, projects: ["Codeo Mobile App"] },
      { name: "Hasura", level: 40, projects: ["Codeo Mobile App"] }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", level: 90, projects: ["ArkHP", "CredMatch", "SaaS Lending"] },
      { name: "PostgreSQL", level: 60, projects: ["SaaS Infrastructure"] },
      { name: "MongoDB", level: 60, projects: ["JobBuddy Discord Bot"] }
    ]
  },
  {
    category: "DevOps & Infrastructure",
    skills: [
      { name: "Docker", level: 60, projects: ["Microservices Deployment"] },
      { name: "Kubernetes (K8s)", level: 50, projects: ["Cluster Orchestration"] },
      { name: "GitHub Actions", level: 85, projects: ["CI/CD Automation"] },
      { name: "Jenkins", level: 50, projects: ["Arkmind CI/CD Pipeline"] },
      { name: "AWS", level: 50, projects: ["Hireti Hosting", "Lambda Functions"] },
      { name: "DigitalOcean", level: 70, projects: ["App Hosting", "Static Sites"] },
      { name: "NGINX", level: 70, projects: ["Reverse Proxy"] },
      { name: "PM2", level: 70, projects: ["Process Management"] },
      { name: "Linux", level: 60, projects: ["Server Administration"] }
    ]
  },
  {
    category: "AI & Automation",
    skills: [
      { name: "Prompt Engineering", level: 95, projects: ["AI-Powered Workflows"] },
      { name: "Claude Code", level: 95, projects: ["Rapid Development"] },
      { name: "Respond.io", level: 80, projects: ["Customer Automation | Villa Customer Communication Workflow"] }
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
      { name: "WordPress", level: 90, projects: ["Arkmind Website", "AoDL Website", "Other Freelance Projects"] },
      { name: "Termius", level: 90, projects: ["SSH Management"] },
      { name: "Jest", level: 82, projects: ["Codeo App Testing, Arkmind Related Projects"] },
      { name: "SonarQube", level: 75, projects: ["Code Quality Scanning, Arkmind Related Projects" ] }
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
    <div className="space-y-3 group w-full">
      <div className="flex justify-between items-end">
        <div className="text-[10px] font-black tracking-[0.3em] text-[var(--accent-color)] uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[var(--accent-color)] rounded-full animate-pulse"></span>
          {name}
        </div>
        <div className="text-[9px] text-[var(--text-secondary)] font-bold uppercase tracking-widest group-hover:text-[var(--text-primary)] transition-colors">
          STATUS: {getSkillStatus(level)}
        </div>
      </div>

      <div className="flex gap-1.5">
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
      <div className="w-full flex flex-col h-full lg:min-h-[calc(100vh-8rem)] py-12 lg:py-8 px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 lg:pb-3 mb-6 lg:mb-4 border-b border-[var(--border-color)] gap-4 shrink-0">
          <div>
            <h2 className="text-3xl lg:text-2xl font-bold text-[var(--text-primary)] tracking-tight uppercase leading-none">System Specs</h2>
            <div className="text-[10px] text-[var(--accent-color)] mt-2 font-mono tracking-[0.3em] uppercase">
              {categorySubtitles[activeCategory] || "Module_Mapping // Version_Control"}
            </div>
          </div>

          {/* Category Switcher */}
          <div className="flex flex-wrap gap-2">
            {skillCategories.map(cat => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-4 py-1.5 rounded-full text-[10px] font-bold font-mono transition-all border ${activeCategory === cat.category
                    ? 'bg-[var(--accent-color)] text-black border-[var(--accent-color)]'
                    : 'bg-transparent text-[var(--text-secondary)] border-[var(--border-color)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]'
                  }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 flex-1 items-start content-center overflow-y-auto no-scrollbar">
          {skillCategories.find(c => c.category === activeCategory).skills.map((skill) => (
            <div
              key={skill.name}
              className="font-mono text-sm relative group flex items-center"
            >
              <SkillBar name={skill.name} level={skill.level} />

              {/* Deep Dive Tooltip - CSS hover based */}
              <div className="absolute top-[100%] left-0 w-full z-50 mt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
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
      </div>
    </section>
  );
}

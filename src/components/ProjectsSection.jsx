import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const projects = [
  {
    id: 'arkhp',
    title: 'ArkHP',
    category: 'FINTECH_SYSTEM',
    status: 'DEPLOYED_STABLE',
    description: 'Digitized the hire purchase process for motorcycles/cars in Malaysia for BH Capital/Carsome Capital, improving application efficiency and compliance.',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'Node.js', 'MySQL', 'Prisma', 'SonarQube', 'Jest'],
    metrics: {
      impact: 'Modernized end-to-end workflows for asset financing',
      type: 'Hire Purchase Platform'
    },
    link: null,
    github: null
  },
  // {
  //   id: 'credmatch',
  //   title: 'CredMatch',
  //   category: 'LENDING_PLATFORM',
  //   status: 'ACTIVE_UPLINK',
  //   description: 'Multi-lender financing platform allowing borrowers to apply for loans from 10+ KPKT-licensed lenders via one transparent application.',
  //   tech: ['React', 'TypeScript', 'Redux', 'Ant Design', 'Node.js'],
  //   metrics: {
  //     lenders: '10+',
  //     type: 'Multi-Lender Platform'
  //   },
  //   link: 'https://credmatch.com.my/',
  //   github: null
  // },
  {
    id: 'redcash',
    title: 'redCASH',
    category: 'PRODUCT_LANDING',
    status: 'DEPLOYED_STABLE',
    description: 'Delivered frontend development for product landing pages, including an Islamic financing variant, supporting successful product launch for thousands of borrowers.',
    tech: ['React', 'TailwindCSS', 'TypeScript'],
    metrics: {
      users: 'Thousands of borrowers',
      type: 'Islamic Financing Product'
    },
    link: 'https://www.redcash.com.my/',
    github: null
  },
  // {
  //   id: 'saas-lending',
  //   title: 'SaaS Lending Platform',
  //   category: 'B2B_PLATFORM',
  //   status: 'DEPLOYED_STABLE',
  //   description: 'Developed a subscription-based modular web app for licensed moneylenders, enabling them to manage loan applications, compliance, and borrower workflows efficiently.',
  //   tech: ['React', 'TypeScript', 'Node.js', 'Prisma', 'MySQL'],
  //   metrics: {
  //     type: 'B2B SaaS',
  //     features: 'Application Management, Compliance, Workflows'
  //   },
  //   link: null,
  //   github: null
  // },
  {
    id: 'arkcash-whitelabel',
    title: 'ArkCash',
    category: 'FINTECH_VARIANTS',
    status: 'ACTIVE_MAINTENANCE',
    description: 'Implemented frontend and backend enhancements, resolved bugs, and supported feature rollouts across multiple fintech product variants.',
    tech: ['React', 'TypeScript', 'Node.js', '.NET'],
    metrics: {
      type: 'Multi-Variant Platform',
      scope: 'Bug Fixes & Feature Enhancements'
    },
    link: null,
    github: null
  },
  {
    id: 'aodl-website',
    title: 'AoDL WP',
    category: 'CORPORATE_WEB',
    status: 'DEPLOYED_STABLE',
    description: 'Developed and maintained the official WordPress site for the Association of Digital Lenders, representing KPKT-licensed lenders in Malaysia.',
    tech: ['WordPress', 'CSS'],
    metrics: {
      type: 'Association Website',
      audience: 'KPKT-Licensed Lenders'
    },
    link: 'https://aodl.com.my/',
    github: null
  },
  // {
  //   id: 'arkmind-website',
  //   title: 'Arkmind WP',
  //   category: 'CORPORATE_WEB',
  //   status: 'DEPLOYED_STABLE',
  //   description: 'Led the redesign of Arkmind\'s corporate website, enhancing brand presence and user experience.',
  //   tech: ['WordPress', 'CSS', 'JavaScript'],
  //   metrics: {
  //     type: 'Corporate Redesign',
  //     impact: 'Enhanced Brand Presence'
  //   },
  //   link: 'https://arkmind.com.my/',
  //   github: null
  // },
  {
    id: 'hireti',
    title: 'Hireti',
    category: 'HACKATHON_WINNER',
    status: 'LEGACY_ARCHIVE',
    description: 'Built Hireti, a talent management system for Hilti IT Competition 2024. Won Grand Champion out of 1,000+ teams globally.',
    tech: ['Next.js', 'AWS', 'TailwindCSS', 'TypeScript'],
    metrics: {
      achievement: 'Grand Champion',
      teams: '1,000+ Global Teams'
    },
    link: 'https://itcompetition.hilti.group/',
    github: null
  },
  {
    id: 'verifymy',
    title: 'VerifyMy',
    category: 'HACKATHON_PROTOTYPE',
    status: 'LEGACY_ARCHIVE',
    description: 'Prototyped a digital identity platform with blockchain and biometric authentication for secure government e-services at USM Varsity Hackathon 2023.',
    tech: ['Next.js', 'Blockchain', 'Biometric Auth'],
    metrics: {
      event: 'USM Varsity Hackathon 2023',
      type: 'Digital Identity Platform'
    },
    link: 'https://sharks-lyart.vercel.app/',
    github: null
  },
  {
    id: 'codeo-app',
    title: 'Codeo Mobile App',
    category: 'MOBILE_EDU',
    status: 'LEGACY_ARCHIVE',
    description: 'Developed lesson features and app screens using React Native, Redux, NativeBase, Hasura, Apollo GraphQL, and Expo.',
    tech: ['React Native', 'Redux', 'NativeBase', 'Hasura', 'Apollo GraphQL', 'Expo'],
    metrics: {
      platform: 'Android/iOS',
      type: 'Educational Mobile App'
    },
    link: 'https://play.google.com/store/apps/details?id=codeolabs.codeo.ai',
    github: null
  },
  {
    id: 'codeo-landing',
    title: 'Codeo Landing Page',
    category: 'WEB_MARKETING',
    status: 'LEGACY_ARCHIVE',
    description: 'Spearheaded development of the landing page with HTML5, TailwindCSS, Tilt.js, Flowbite, JQuery, and JavaScript, achieving Lighthouse score of 100.',
    tech: ['TailwindCSS', 'JavaScript', 'HTML5', 'Tilt.js', 'Flowbite'],
    metrics: {
      performance: 'Lighthouse 100',
      type: 'Product Landing Page'
    },
    link: 'https://codeo.ai/',
    github: null
  },
  {
    id: 'jobbuddy',
    title: 'JobBuddy',
    category: 'OPEN_SOURCE',
    status: 'LEGACY_ARCHIVE',
    description: 'Led open-source Discord hiring bot project, connecting employers with community talent through the Coden Discord server.',
    tech: ['Discord.js', 'Node.js', 'MongoDB'],
    metrics: {
      community: '300+ Members',
      type: 'Discord Bot'
    },
    link: null,
    github: null,
  }
];


export default function ProjectsSection({ onOpenModal }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const currentIndexRef = useRef(0);
  const isScrollingRef = useRef(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);

      // Calculate current index using actual card width
      const firstCard = container.children[0];
      const cardWidth = firstCard ? firstCard.offsetWidth : clientWidth;
      const newIndex = Math.min(Math.max(Math.round(scrollLeft / cardWidth), 0), projects.length - 1);
      currentIndexRef.current = newIndex;
    }
  };

  React.useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();

      // On resize, use tracked currentIndexRef to snap to correct position
      let resizeTimer;
      const handleResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          if (!scrollRef.current) return;
          const container = scrollRef.current;
          const firstCard = container.children[0];
          if (firstCard) {
            // Use the ref to get current index (survives closure)
            const cardWidth = firstCard.offsetWidth;
            container.scrollLeft = currentIndexRef.current * cardWidth;
          }
          checkScroll();
        }, 50);
      };
      globalThis.addEventListener('resize', handleResize);

      // Reset scroll lock when scroll ends
      let scrollEndTimer;
      const handleScrollEnd = () => {
        clearTimeout(scrollEndTimer);
        scrollEndTimer = setTimeout(() => {
          isScrollingRef.current = false;
        }, 150);
      };
      el.addEventListener('scroll', handleScrollEnd, { passive: true });

      return () => {
        el.removeEventListener('scroll', checkScroll);
        el.removeEventListener('scroll', handleScrollEnd);
        globalThis.removeEventListener('resize', handleResize);
        clearTimeout(scrollEndTimer);
        clearTimeout(resizeTimer);
      };
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current && !isScrollingRef.current) {
      isScrollingRef.current = true;
      const container = scrollRef.current;
      const cards = container.children;

      if (cards.length === 0) return;

      // Get actual card width from DOM (no gap in horizontal-scroll)
      const firstCard = cards[0];
      const cardWidth = firstCard.offsetWidth;
      const currentScroll = container.scrollLeft;

      // Calculate current card index
      const currentCard = Math.round(currentScroll / cardWidth);
      const targetCard = direction === 'right'
        ? Math.min(currentCard + 1, projects.length - 1)
        : Math.max(currentCard - 1, 0);

      // Scroll to exact card position
      const targetScroll = targetCard * cardWidth;

      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="h-full lg:min-h-[calc(100vh-8rem)] w-full flex flex-col overflow-hidden bg-[var(--bg-color)]">
      <div className="w-full h-full lg:min-h-[calc(100vh-8rem)] flex flex-col overflow-hidden min-h-0 py-8 md:py-12 lg:py-8 px-4 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 lg:pb-3 mb-4 md:mb-6 lg:mb-4 border-b border-[var(--border-color)] shrink-0 gap-4">
          <div className="flex flex-col md:flex-row md:items-end gap-4 lg:gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-2xl font-bold text-[var(--text-primary)] tracking-tight uppercase">Operational Archive</h2>
              <div className="text-[9px] md:text-[10px] text-[var(--accent-color)] mt-2 font-mono tracking-[0.2em] md:tracking-[0.3em] uppercase">REPOSITORY_SCAN // {projects.length}_MODULES_ACTIVE</div>
            </div>
            <div className="text-[10px] text-[var(--text-secondary)] font-mono hidden lg:block uppercase tracking-widest leading-relaxed border-l border-[var(--border-color)] pl-6 opacity-50">
              UPLINK_STABLE<br />
              <span className="opacity-30">ARCHIVE: 0{projects.length}</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`px-6 py-3 border flex items-center justify-center rounded-full transition-all duration-300 text-[10px] font-black tracking-widest ${canScrollLeft
                ? 'border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-dim)] animate-glow-pulse'
                : 'border-[var(--border-color)] text-[var(--text-secondary)] opacity-10 cursor-not-allowed'
                }`}
            >
              PREVIOUS_LOG
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`px-6 py-3 border flex items-center justify-center rounded-full transition-all duration-300 text-[10px] font-black tracking-widest ${canScrollRight
                ? 'border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-dim)] animate-glow-pulse'
                : 'border-[var(--border-color)] text-[var(--text-secondary)] opacity-10 cursor-not-allowed'
                }`}
            >
              NEXT_LOG
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="horizontal-scroll flex-1 items-center no-scrollbar snap-x snap-mandatory md:snap-none"
        >
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={index}
              onClick={() => onOpenModal(project)}
            />
          ))}
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="md:hidden flex items-center justify-between pt-4 border-t border-[var(--border-color)] shrink-0">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`px-4 py-2 border rounded-full transition-all text-[9px] font-black tracking-wider ${canScrollLeft
              ? 'border-[var(--accent-color)] text-[var(--accent-color)]'
              : 'border-[var(--border-color)] text-[var(--text-secondary)] opacity-30'
              }`}
          >
            PREVIOUS_LOG
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`px-4 py-2 border rounded-full transition-all text-[9px] font-black tracking-wider ${canScrollRight
              ? 'border-[var(--accent-color)] text-[var(--accent-color)]'
              : 'border-[var(--border-color)] text-[var(--text-secondary)] opacity-30'
              }`}
          >
            NEXT_LOG
          </button>
        </div>
      </div>
    </section>
  );
}

function getStatusClasses(status) {
  if (status === 'ACTIVE_UPLINK') {
    return 'border-green-500 text-green-500 group-hover:border-black group-hover:text-black';
  }
  if (status === 'LEGACY_ARCHIVE') {
    return 'border-orange-500/50 text-orange-500 group-hover:border-black group-hover:text-black';
  }
  return 'border-[var(--accent-color)] text-[var(--accent-color)] group-hover:border-black group-hover:text-black';
}

function ProjectItem({ project, index, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className="group cursor-pointer bg-[var(--panel-bg)] hover:bg-[var(--accent-color)] transition-all duration-700 relative overflow-hidden flex-shrink-0 w-full md:w-[calc((100vw-8rem-6rem)/3)] lg:w-[calc((100vw-8rem-10rem)/3)] h-full border-r border-[var(--border-color)] p-4 md:p-4 lg:p-8 flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:ring-inset text-left snap-start md:snap-align-none"
    >
      <div className="relative z-10 transition-colors duration-500 group-hover:text-[var(--bg-color)] h-full flex flex-col overflow-hidden min-h-0">
        {/* Status badge - hidden on tablet, shown on mobile and desktop */}
        <div className="flex justify-between items-start mb-2 md:mb-1 lg:mb-4 shrink-0">
          <div className="space-y-1 lg:space-y-2 hidden md:hidden lg:block">
            <div className="text-[8px] lg:text-[9px] font-black uppercase tracking-[0.3em] lg:tracking-[0.4em] opacity-30 group-hover:text-black/30">
              LIFECYCLE_STATUS
            </div>
            <div className={`text-[9px] lg:text-[10px] font-black uppercase tracking-widest px-2 lg:px-3 py-1 border rounded-full inline-block ${getStatusClasses(project.status)}`}>
              {project.status}
            </div>
          </div>
          {/* Mobile status - compact */}
          <div className={`md:hidden text-[8px] font-black uppercase tracking-wider px-2 py-0.5 border rounded-full ${getStatusClasses(project.status)}`}>
            {project.status}
          </div>
          <div className="text-[9px] md:text-[8px] lg:text-[10px] font-black uppercase tracking-[0.3em] lg:tracking-[0.4em] opacity-50 group-hover:text-black/50">
            0{index + 1}
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center overflow-hidden min-h-0">
          <div className="text-[9px] md:text-[8px] lg:text-[10px] font-black text-[var(--accent-color)] group-hover:text-black/40 mb-1 lg:mb-2 tracking-[0.2em] md:tracking-[0.15em] lg:tracking-[0.3em] uppercase shrink-0">{project.category}</div>
          <h3 className="text-xl md:text-lg lg:text-3xl xl:text-4xl font-black mb-2 md:mb-1 lg:mb-4 uppercase tracking-tighter group-hover:scale-105 transition-transform origin-left leading-[0.9] shrink-0">{project.title}</h3>
          <p className="line-clamp-2 md:line-clamp-2 lg:line-clamp-3 text-[11px] md:text-[10px] lg:text-xs text-[var(--text-secondary)] group-hover:text-black/70 font-mono leading-relaxed max-w-[95%]">
            {project.description}
          </p>
        </div>

        {/* Tech stack - responsive */}
        <div className="space-y-2 lg:space-y-4 mt-2 lg:mt-4 shrink-0">
          <div className="flex flex-wrap gap-1 md:gap-1 lg:gap-2">
            {project.tech.slice(0, 3).map(t => (
              <span key={t} className="text-[8px] md:text-[8px] lg:text-[10px] font-bold border border-[var(--border-color)] group-hover:border-black/20 px-2 md:px-1.5 lg:px-3 py-0.5 md:py-0.5 lg:py-1.5 rounded-full uppercase tracking-wider md:tracking-wide lg:tracking-widest bg-[var(--bg-color)] group-hover:bg-transparent transition-all duration-300">
                {t}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-[8px] md:text-[8px] lg:text-[10px] font-bold border border-[var(--border-color)] group-hover:border-black/20 px-2 md:px-1.5 lg:px-3 py-0.5 md:py-0.5 lg:py-1.5 rounded-full uppercase tracking-wider md:tracking-wide lg:tracking-widest bg-[var(--bg-color)] group-hover:bg-transparent transition-all duration-300">
                +{project.tech.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="absolute right-8 bottom-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
        <div className="text-[150px] lg:text-[200px] font-black uppercase leading-none select-none tracking-tighter">
          {project.title.substring(0, 1)}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-2 h-full bg-[#00f3ff] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-700"></div>
    </button>
  );
}

ProjectsSection.propTypes = {
  onOpenModal: PropTypes.func.isRequired
};

ProjectItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string,
    github: PropTypes.string
  }).isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

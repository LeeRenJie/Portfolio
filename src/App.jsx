import React, { useState, useEffect, useRef } from 'react';
import { animate } from 'animejs';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BootScreen from './components/BootScreen';
import ProfileSection from './components/ProfileSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import StackSection from './components/StackSection';
import ContactSection from './components/ContactSection';
import DetailWindow from './components/DetailWindow';
import { Battery, Clock, Activity, User, Briefcase, Layout, Terminal, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// --- CUSTOM CURSOR COMPONENT ---
function CustomCursor() {
  const dotRef = useRef(null);

  useEffect(() => {
    if (!dotRef.current) return;

    const onMouseMove = (e) => {
      dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };

    globalThis.addEventListener('mousemove', onMouseMove);
    return () => globalThis.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '8px',
        height: '8px',
        backgroundColor: '#ffffff',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 10000,
        willChange: 'transform'
      }}
    />
  );
}

export default function App() {
  const [booted, setBooted] = useState(false);
  const [theme] = useState('dark');
  const [activeSection, setActiveSection] = useState('profile');
  const [modalData, setModalData] = useState(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const sections = useRef({});
  const sidebarMarkerRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    console.log(
      "%c RJ.OS %c v2.1.0 %c (c) Lee Ren Jie %c https://github.com/LeeRenJie ",
      "background: #00f3ff; color: #000; font-weight: bold; padding: 2px 5px; border-radius: 3px 0 0 3px;",
      "background: #222; color: #fff; padding: 2px 5px;",
      "background: #111; color: #555; padding: 2px 5px;",
      "background: #00f3ff; color: #000; padding: 2px 5px; border-radius: 0 3px 3px 0;"
    );
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // SCROLL PINNING & SPY LOGIC
  useEffect(() => {
    if (!booted || !scrollContainerRef.current) return;

    const scrollContainer = scrollContainerRef.current;

    // SCROLL SPY
    const handleMainScroll = () => {
      const scrollY = scrollContainer.scrollTop;
      const sectionIds = ['profile', 'work', 'projects', 'stack', 'contact'];
      let current = 'profile';
      for (const id of sectionIds) {
        const el = sections.current[id];
        if (el && el.offsetTop <= scrollY + 200) {
          current = id;
        }
      }
      if (current !== activeSection) setActiveSection(current);
    };

    scrollContainer.addEventListener('scroll', handleMainScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleMainScroll);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [booted, activeSection]);

  // Sidebar Pill Animation
  useEffect(() => {
    if (!booted || !sidebarMarkerRef.current) return;
    const links = ['profile', 'work', 'projects', 'stack', 'contact'];
    const index = links.indexOf(activeSection);

    animate(sidebarMarkerRef.current, {
      top: `${index * 64 + 32}px`,
      opacity: 1,
      duration: 600,
      easing: 'spring(1, 80, 20, 0)'
    });
  }, [activeSection, booted]);

  const scrollTo = (id) => {
    const el = sections.current[id];
    if (el && scrollContainerRef.current) {
      // ScrollTrigger sometimes interference with programmatic scroll, we might need to kill triggers briefly or just scroll to progress
      gsap.to(scrollContainerRef.current, {
        scrollTop: el.offsetTop,
        duration: 1,
        ease: "power2.inOut"
      });
    }
  };

  const handleBootComplete = React.useCallback(() => {
    setBooted(true);
  }, []);

  if (!booted) {
    return <BootScreen onComplete={handleBootComplete} />;
  }

  const menuItems = [
    { id: 'profile', icon: <User size={20} /> },
    { id: 'work', icon: <Briefcase size={20} /> },
    { id: 'projects', icon: <Layout size={20} /> },
    { id: 'stack', icon: <Terminal size={20} /> },
    { id: 'contact', icon: <Mail size={20} /> }
  ];

  // --- Dynamic Age Calculator ---
  const calculateAge = () => {
    const birthDate = new Date('2002-12-02');
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months -= 1;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return `${years}Y ${months}M ${days}D`;
  };

  return (
    <div className={`h-screen w-screen bg-[var(--bg-color)] text-[var(--text-primary)] font-mono transition-colors duration-500 overflow-hidden flex flex-col selection:bg-[var(--accent-color)] selection:text-black relative`}>
      <CustomCursor />

      {/* 1. TACTICAL HEADER (Fixed) */}
      <header className="fixed top-0 left-0 right-0 z-[100] border-b border-[var(--border-color)] bg-[var(--bg-color)]/80 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-6 lg:pr-12">
          <div className="flex items-center gap-4 sm:gap-8">
            <div className="hidden md:flex items-center gap-3 bg-[var(--accent-dim)] px-4 py-1.5 rounded-full border border-[var(--accent-color)]/10 text-[var(--accent-color)] leading-none text-[9px] font-black uppercase tracking-widest">
              <Activity size={10} className="shrink-0" />
              <span className="translate-y-[0.5px]">NETWORK: OPEN_TO_INNOVATION</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-[10px] font-black tracking-[0.2em] uppercase">
              <div className="w-1.5 h-1.5 bg-[var(--accent-color)] rounded-full animate-pulse shadow-[0_0_10px_var(--accent-color)]"></div>
              <span className="hidden sm:inline text-[var(--text-primary)]">RJ.OS v4.1.2</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden pt-16">
        {/* 2. FIXED SIDEBAR */}
        <div className="w-0 md:w-32 flex flex-col items-center justify-center h-full z-10 shrink-0 border-r border-[var(--border-color)] bg-[var(--panel-bg)]/50">
          <div className="bg-[var(--panel-bg)] border border-[var(--border-color)] rounded-full py-8 px-3 relative flex flex-col gap-4 shadow-xl">
            <div
              ref={sidebarMarkerRef}
              className="absolute w-12 h-12 rounded-full bg-[var(--accent-color)] shadow-[0_0_20px_var(--accent-color)] opacity-0 left-[calc(50%-24px)] z-0"
              style={{ top: '-100px' }}
            ></div>

            {menuItems.map(item => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 relative border group ${isActive ? 'border-[var(--accent-color)] text-black' : 'border-[var(--border-color)] text-gray-500 hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] hover:shadow-[0_0_15px_var(--accent-color)]'}`}
                >
                  <div className={`transition-all duration-300 relative z-10 ${isActive ? 'opacity-100' : ''}`}>
                    {item.icon}
                  </div>

                  <div className={`sidebar-tooltip ${isActive ? 'opacity-100 translate-x-0' : ''}`}>
                    <span className="mr-2 text-black font-black">&gt;&gt;</span>
                    {item.id.toUpperCase()}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. MAIN CONTENT CONTAINER */}
        <div className="flex-1 flex flex-col relative h-full min-w-0">
          <div
            ref={scrollContainerRef}
            className="flex-1 no-scrollbar relative bg-[var(--bg-color)] snap-container"
          >
            <div id="profile" ref={el => sections.current['profile'] = el} className="snap-section">
              <ProfileSection />
            </div>
            <div id="work" ref={el => sections.current['work'] = el} className="snap-section">
              <ExperienceSection />
            </div>
            <div id="projects" ref={el => sections.current['projects'] = el} className="snap-section">
              <ProjectsSection onOpenModal={setModalData} />
            </div>
            <div id="stack" ref={el => sections.current['stack'] = el} className="snap-section">
              <StackSection />
            </div>
            <div id="contact" ref={el => sections.current['contact'] = el} className="snap-section">
              <ContactSection />
            </div>
          </div>

          {/* 4. FIXED STATUS BAR */}
          <div className="h-16 w-full px-12 flex items-center justify-between border-t border-[var(--border-color)] bg-[var(--panel-bg)] z-40 text-[10px] text-gray-500 uppercase tracking-widest font-black shrink-0">
            <div className="flex gap-8 items-center truncate">
              <span className="text-[var(--accent-color)] flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[var(--accent-color)] rounded-full shadow-[0_0_8px_var(--accent-color)] animate-pulse"></div>
                UPLINK_UPTIME: {calculateAge()}
              </span>
              <div className="h-4 w-[1px] bg-[var(--border-color)] hidden sm:block"></div>
              <span className="flex items-center gap-2 text-green-500/50">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e]"></div>
                SIGNAL_ACTIVE
              </span>
            </div>

            <div className="flex gap-4 items-center shrink-0">
              <div className="flex items-center gap-3 border border-[var(--border-color)] px-6 py-2 rounded-full bg-[var(--bg-color)]">
                <Clock size={12} className="text-[var(--accent-color)]" />
                <span className="text-[var(--text-secondary)]">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}</span>
              </div>
              <div className="hidden xs:flex items-center gap-3 border border-[var(--border-color)] px-6 py-2 rounded-full bg-[var(--bg-color)] text-green-500">
                <Battery size={12} /> 100%
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalData && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-black/95 backdrop-blur-3xl">
          <button
            type="button"
            className="absolute inset-0 w-full h-full cursor-default focus:outline-none"
            onClick={() => setModalData(null)}
            onKeyDown={(e) => { if (e.key === 'Escape') setModalData(null); }}
            aria-label="Close modal"
          />
          <DetailWindow data={modalData} onClose={() => setModalData(null)} />
        </div>
      )}
    </div>
  );
}

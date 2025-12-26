import React, { useState, useEffect, useRef } from 'react';

const CatDisplay = () => {
  const [mood, setMood] = useState('neutral');
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleText, setBubbleText] = useState('?');
  const timerRef = useRef();

  const moods = {
    neutral: {
      left: ['⣴⣶⡄', '⠹⠿⠁'],
      right: ['⢰⣶⣦', '⠈⠻⠏']
    },
    happy: {
      left: ['⢀⣀⣀⡀', '      '],
      right: ['⢀⣀⣀⡀', '      ']
    },
    angry: {
      left: ['⠶⠶⠆', '      '],
      right: ['⠰⠶⠶', '      ']
    },
    suspicious: {
      left: ['⣈⣉⡁', '      '],
      right: ['⢈⣉⡁', '      ']
    },
    confused: {
      left: ['⠶⠶⠆', '⠹⠿⠁'],
      right: ['⢰⣶⣦', '  ⠉ ']
    }
  };

  useEffect(() => {
    const idleLoop = setInterval(() => {
      if (Math.random() > 0.7) {
        const randomMoods = ['suspicious', 'confused', 'neutral'];
        const m = randomMoods[Math.floor(Math.random() * randomMoods.length)];
        setMood(m);

        if (Math.random() > 0.6) {
          const texts = ['?', '...', '!?', '0110', '0x1F', ';;', '...?', '!!!'];
          setBubbleText(texts[Math.floor(Math.random() * texts.length)]);
          setShowBubble(true);
          setTimeout(() => setShowBubble(false), 2000);
        }

        setTimeout(() => setMood('neutral'), 1500);
      }
    }, 4000);

    return () => clearInterval(idleLoop);
  }, []);

  const handleMouseEnter = () => setMood('happy');
  const handleMouseLeave = () => setMood('neutral');
  const handleMouseDown = () => {
    setMood('angry');
    setBubbleText('?!?!?!');
    setShowBubble(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setShowBubble(false);
      setMood('neutral');
    }, 3000);
  };

  return (
    <button
      type="button"
      aria-label="Interactive cat display - click or hover to interact"
      className="relative h-full flex items-center justify-center p-4 sm:p-8 md:p-12 overflow-hidden order-1 md:order-2 cursor-pointer select-none bg-transparent focus:outline-none w-full appearance-none border-none hover:bg-transparent active:bg-transparent [&_*]:pointer-events-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
    >
      {/* Tactical Border Frame */}
      <div className="absolute inset-4 sm:inset-8 border border-[#00f3ff]/10 rounded-xl pointer-events-none">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00f3ff]/40 rounded-tl-lg"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00f3ff]/40 rounded-tr-lg"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00f3ff]/40 rounded-bl-lg"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00f3ff]/40 rounded-br-lg"></div>

        {/* Subtle Side Decals */}
        <div className="absolute top-1/2 -left-[1px] w-[1px] h-12 bg-gradient-to-b from-transparent via-[#00f3ff]/30 to-transparent"></div>
        <div className="absolute top-1/2 -right-[1px] w-[1px] h-12 bg-gradient-to-b from-transparent via-[#00f3ff]/30 to-transparent"></div>
      </div>

      {/* Speech Bubble - Recalibrated Proximity and Side-Arrow */}
      <div className={`absolute top-[50%] left-[15%] xl:left-[25%] z-20 transition-all duration-300 transform ${showBubble ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-50 -translate-x-4'}`}>
        <div className="bg-white text-black text-[10px] sm:text-xs font-black px-3 sm:px-4 py-1.5 rounded-r-none rounded-2xl relative shadow-[4px_4px_0_#00f3ff] uppercase tracking-tighter">
          {bubbleText}
          <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white transform rotate-45 -translate-y-1/2"></div>
        </div>
      </div>

      <div className="text-[5px] xs:text-[6px] sm:text-[8px] md:text-[9px] lg:text-[11px] xl:text-[13px] text-[var(--ascii-color)] leading-[1] whitespace-pre font-mono drop-shadow-[0_0_30px_var(--accent-dim)] flex justify-center items-center w-full h-full scale-x-[-1] transition-transform duration-500">
        <div className="relative">
          <pre className="m-0">
            {`⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣶⣦⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠠⣾⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣤⣤⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⡿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⣿⣿⣿⣿⣿⠋⠁⠀⠀⠈⠹⣿⣿⣿⣿⣿⡿⠋⠀⠀⠈⠻⣿⣿⣿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣿⣿⣿⣿⠃       ⢹⣿⣿⣿⣿⠃       ⣿⣿⣿⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣿⣿⣿⣿⡆       ⣸⣿⣿⣿⣿⡀       ⣿⣿⣿⡆⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⣿⣯⣹⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣃⣀⣀⣀⣀⠀
⠀⠾⠿⠟⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠋⠉⠉⠋⠀
⠠⣤⣤⣶⡶⠿⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠛⠛⠛⠷⣶⡄
⠀⠀⠉⢀⣠⣶⠾⠟⠉⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠛⠛⠳⢶⣦⣄⡀⠀⠀
⠀⠀⠀⠟⠋⠁⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠁⠀⠀⠀⠀⠀⠀⠀⠉⠁⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀`}
          </pre>

          <div className="absolute top-[40%] left-[24%] translate-y-[2px] transition-all duration-200">
            {moods[mood].left[0]}<br />{moods[mood].left[1]}
          </div>
          <div className="absolute top-[40%] left-[58%] translate-y-[2px] transition-all duration-200">
            {moods[mood].right[0]}<br />{moods[mood].right[1]}
          </div>
        </div>
      </div>
    </button>
  );
};

export default function ProfileSection() {
  return (
    <section className="h-full w-full flex flex-col justify-center overflow-hidden bg-[var(--bg-color)]">
      <div className="grid md:grid-cols-2 h-full w-full min-h-0">
        <div className="flex flex-col justify-center px-6 md:px-8 lg:px-24 order-2 md:order-1 h-full py-6 md:py-8 lg:py-12 relative z-10 text-left min-h-0 overflow-hidden">
          <div className="flex items-center justify-start gap-4 mb-4 md:mb-6">
            <div className="text-[var(--accent-color)] text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] uppercase leading-none">
              &gt; SYSTEM_READY // HELLO_WORLD
            </div>
          </div>

          <div className="space-y-2 mb-4 lg:mb-6">
            <h1 className="text-5xl md:text-5xl lg:text-8xl xl:text-[120px] font-black text-[var(--text-primary)] tracking-tighter uppercase leading-none">
              RJ
            </h1>
            <div className="text-base md:text-base lg:text-2xl xl:text-3xl font-black text-gray-500 tracking-[0.2em] md:tracking-[0.3em] uppercase leading-tight">
              Software Engineer
            </div>
          </div>

          <p className="max-w-xl text-[var(--text-secondary)] font-mono text-[11px] md:text-xs lg:text-sm leading-relaxed mb-4 md:mb-6 lg:mb-8 tracking-tight">
            <span className="text-[var(--text-primary)]">Full-stack software engineer</span> dedicated to <span className="text-[var(--text-primary)] border-b border-[var(--accent-color)]/30">transforming businesses</span> through modern digital solutions. Deep diving in the <span className="text-[var(--accent-color)] font-bold">fintech</span> industry and scalable enterprise infrastructure.
          </p>

          <div className="flex flex-wrap items-center justify-start gap-3 md:gap-4 border-t border-[var(--border-color)] pt-4 md:pt-6 lg:pt-8">
            <div className="group flex flex-col items-start gap-1">
              <div className="text-[7px] md:text-[8px] text-gray-600 font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">EXPERIENCE</div>
              <div className="px-2 md:px-3 py-1 bg-[var(--panel-bg)] border border-[var(--border-color)] rounded-md text-[9px] md:text-[10px] text-[var(--text-primary)] font-black tracking-wider md:tracking-widest uppercase">
                {Math.max(2, new Date().getFullYear() - 2023)}+ CYCLES
              </div>
            </div>
            <div className="group flex flex-col items-start gap-1">
              <div className="text-[7px] md:text-[8px] text-gray-600 font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">LOCATION</div>
              <div className="px-2 md:px-3 py-1 bg-[var(--panel-bg)] border border-[var(--border-color)] rounded-md text-[9px] md:text-[10px] text-[var(--text-primary)] font-black tracking-wider md:tracking-widest uppercase">KL // MY</div>
            </div>
            <div className="group flex flex-col items-start gap-1">
              <div className="text-[7px] md:text-[8px] text-gray-600 font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">NODE_STATUS</div>
              <div className="px-2 md:px-3 py-1 bg-[var(--accent-dim)] border border-[var(--accent-color)]/30 rounded-md text-[9px] md:text-[10px] text-[var(--accent-color)] font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase animate-pulse flex items-center gap-2">
                <span className="w-1 md:w-1.5 h-1 md:h-1.5 bg-[var(--accent-color)] rounded-full"></span>
                ACTIVE
              </div>
            </div>
          </div>
        </div>
        {/* ASCII Cat - Hidden on mobile, shown on right side on desktop */}
        <div className="hidden md:block h-full order-1 md:order-2">
          <CatDisplay />
        </div>
      </div>
    </section>
  );
}

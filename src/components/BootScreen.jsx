import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const bootText = [
  { id: "init", text: "INITIALIZING RJ.CORE.v2.1.0" },
  { id: "kernel", text: "LOADING KERNEL MODULES... OK" },
  { id: "protocols", text: "ESTABLISHING SECURE PROTOCOLS" },
  { id: "biometric", text: "SCANNING BIO-METRIC HARDWARE" },
  { id: "user", text: "IDENTIFYING USER: RJ (ENGINEER)" },
  { id: "drives", text: "MOUNTING SYSTEM_DRIVES" },
  { id: "history", text: "CHECKING DEPLOYMENT HISTORY" },
  { id: "logs", text: "RETRIEVING MISSION LOGS" },
  { id: "repos", text: "SYNCING REPOSITORIES" },
  { id: "decrypt", text: "DECRYPTING PORTFOLIO_V2" },
  { id: "uplink", text: "VERIFYING UPLINK STATUS... DONE" },
  { id: "stability", text: "SYSTEM STABILITY: OPTIMAL" },
  { id: "functional", text: "ALL SYSTEMS FUNCTIONAL" },
  { id: "access", text: "ACCESS GRANTED" },
  { id: "welcome", text: "WELCOME BACK, RJ" }
];

export default function BootScreen({ onComplete }) {
  const [lines, setLines] = useState([]);
  const terminalRef = useRef(null);

  useEffect(() => {
    // Reset lines on mount (handles React Strict Mode double-invoke)
    setLines([]);

    // Terminal animation lines
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootText.length) {
        setLines(bootText.slice(0, currentLine + 1));
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 70);

    // Auto redirect after 3.5 seconds
    const autoRedirect = setTimeout(() => {
      clearInterval(interval);
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(autoRedirect);
      clearInterval(interval);
    };
  }, [onComplete]);

  // Handle auto-scroll of the terminal lines
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center p-4 cursor-pointer">
      <button
        type="button"
        className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none"
        onClick={onComplete}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onComplete(); }}
        aria-label="Skip boot screen"
      />
      {/* Custom cursor - hidden on mobile */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* HUD Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.05)_0%,transparent_70%)] opacity-50"></div>
         <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="w-full max-w-[95%] md:max-w-2xl bg-black border border-[#00f3ff]/20 rounded-lg shadow-[0_0_50px_rgba(0,243,255,0.1)] relative overflow-hidden backdrop-blur-3xl z-10">

         {/* System Status Line */}
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00f3ff] to-transparent animate-pulse"></div>

         <div className="bg-[#111] border-b border-[#00f3ff]/10 p-3 md:p-4 flex justify-center items-center relative overflow-hidden">
            <div className="flex items-center gap-2 md:gap-3">
               <div className="w-2 h-2 rounded-full bg-[#00f3ff] animate-ping"></div>
               <span className="text-[8px] md:text-[10px] text-[#00f3ff] font-black tracking-[0.2em] md:tracking-[0.4em] uppercase">RJ_SYSTEM_INIT</span>
            </div>
         </div>

         <div className="p-4 md:p-8 pb-14 md:pb-12">
            <div
               ref={terminalRef}
               className="h-[250px] md:h-[300px] overflow-y-auto no-scrollbar font-mono text-xs md:text-sm space-y-1.5 md:space-y-2 relative"
               style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' }}
            >
               {lines.map((line, i) => (
                  <div key={line.id} className="flex gap-2 md:gap-4 items-center">
                     <span className="text-[8px] md:text-[9px] text-[#00f3ff]/20 w-6 md:w-8 select-none shrink-0">[{String(i+1).padStart(2, '0')}]</span>
                     <span className={`tracking-tight text-[10px] md:text-sm ${i === lines.length - 1 ? 'text-white' : 'text-[#00f3ff]/40'}`}>
                        {">"} {line.text}
                     </span>
                  </div>
               ))}
               {lines.length < bootText.length && (
                  <div className="flex gap-2 md:gap-4 items-center">
                     <span className="text-[8px] md:text-[9px] text-[#00f3ff]/20 w-6 md:w-8 shrink-0">[{String(lines.length + 1).padStart(2, '0')}]</span>
                     <div className="w-2 h-4 bg-[#00f3ff] animate-pulse"></div>
                  </div>
               )}
            </div>
         </div>

         <div className="absolute bottom-0 left-0 w-full h-10 md:h-12 flex items-center justify-between px-4 md:px-8 bg-gradient-to-t from-black to-transparent">
            <div className="text-[7px] md:text-[8px] text-gray-700 font-bold uppercase tracking-[0.3em] md:tracking-[0.5em]">Establishing_Uplink...</div>
            <div className="text-[8px] md:text-[9px] text-[#00f3ff] uppercase font-black">
               [ <span className="hidden md:inline">CLICK</span><span className="md:hidden">TAP</span> TO SKIP ]
            </div>
         </div>

      </div>
    </div>
  );
}

// Simplified cursor for boot screen - no trail for better performance
function CustomCursor() {
  const dotRef = useRef(null);

  useEffect(() => {
    let rafId = null;
    let lastX = -100, lastY = -100;

    const onMouseMove = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          if (dotRef.current) {
            dotRef.current.style.transform = `translate3d(${lastX}px, ${lastY}px, 0)`;
          }
          rafId = null;
        });
      }
    };

    globalThis.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => {
      globalThis.removeEventListener('mousemove', onMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        position: 'fixed',
        top: -4,
        left: -4,
        width: 8,
        height: 8,
        backgroundColor: '#00f3ff',
        borderRadius: '50%',
        transform: 'translate3d(-100px, -100px, 0)',
        pointerEvents: 'none',
        zIndex: 10001,
        willChange: 'transform'
      }}
    />
  );
}

BootScreen.propTypes = {
  onComplete: PropTypes.func.isRequired
};

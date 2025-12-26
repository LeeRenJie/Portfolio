import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { animate } from 'animejs';

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
  const [isMobile] = useState(() => globalThis.window === undefined ? false : globalThis.innerWidth < 768);
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

    // Hard auto-skip after 3.5 seconds regardless of animation state or device
    const autoSkip = setTimeout(() => {
      console.log("UPLINK_SEQUENCER: ENGAGING_FORCE_REDIRECT");
      clearInterval(interval);
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(autoSkip);
      clearInterval(interval);
    };
  }, [onComplete]);

  // Handle auto-scroll of the terminal lines
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  if (isMobile) {
    return (
      <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center p-6 text-center">
        <button
          type="button"
          className="absolute inset-0 w-full h-full cursor-default focus:outline-none"
          onClick={onComplete}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onComplete(); }}
          aria-label="Skip boot screen"
        />
        <div className="space-y-6 max-w-xs border border-[#00f3ff]/20 p-8 rounded-3xl bg-[#050505] shadow-[0_0_50px_rgba(0,243,255,0.1)] relative z-10">
           <div className="w-14 h-14 border-2 border-[#00f3ff] rounded-full mx-auto flex items-center justify-center">
              <span className="text-[#00f3ff] font-black text-xl">RJ</span>
           </div>
           <h2 className="text-[#00f3ff] font-black tracking-widest text-lg uppercase">RJ.OS</h2>
           <p className="text-gray-500 font-mono text-[10px] leading-relaxed uppercase tracking-tight">
              MOBILE_NODE_DETECTED. INITIALIZING COMPACT_VIEW_MODE.
           </p>
           <div className="text-[9px] text-gray-600 font-mono">[ TAP TO CONTINUE ]</div>
           <button onClick={onComplete} className="block w-full py-3 bg-[#00f3ff] text-black text-[10px] font-black tracking-widest rounded-full uppercase">
              INITIALIZE_UPLINK
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center p-4 cursor-pointer">
      <button
        type="button"
        className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none"
        onClick={onComplete}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onComplete(); }}
        aria-label="Skip boot screen"
      />
      <CustomCursor />

      {/* HUD Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.05)_0%,transparent_70%)] opacity-50"></div>
         <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="w-full max-w-2xl bg-black border border-[#00f3ff]/20 rounded-lg shadow-[0_0_50px_rgba(0,243,255,0.1)] relative overflow-hidden backdrop-blur-3xl z-10">

         {/* System Status Line */}
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00f3ff] to-transparent animate-pulse"></div>

         <div className="bg-[#111] border-b border-[#00f3ff]/10 p-4 flex justify-center items-center relative overflow-hidden">
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-[#00f3ff] animate-ping"></div>
               <span className="text-[10px] text-[#00f3ff] font-black tracking-[0.4em] uppercase">RJ_SYSTEM_INITIALIZATION</span>
            </div>
         </div>

         <div className="p-8 pb-12">
            <div
               ref={terminalRef}
               className="h-[300px] overflow-y-auto no-scrollbar font-mono text-sm space-y-2 relative"
               style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' }}
            >
               {lines.map((line, i) => (
                  <div key={line.id} className="flex gap-4 items-center">
                     <span className="text-[9px] text-[#00f3ff]/20 w-8 select-none">[{String(i+1).padStart(2, '0')}]</span>
                     <span className={`tracking-tight ${i === lines.length - 1 ? 'text-white' : 'text-[#00f3ff]/40'}`}>
                        {">"} {line.text}
                     </span>
                  </div>
               ))}
               {lines.length < bootText.length && (
                  <div className="flex gap-4 items-center">
                     <span className="text-[9px] text-[#00f3ff]/20 w-8">[{String(lines.length + 1).padStart(2, '0')}]</span>
                     <div className="w-2 h-4 bg-[#00f3ff] animate-pulse"></div>
                  </div>
               )}
            </div>
         </div>

         <div className="absolute bottom-0 left-0 w-full h-12 flex items-center justify-between px-8 bg-gradient-to-t from-black to-transparent">
            <div className="text-[8px] text-gray-700 font-bold uppercase tracking-[0.5em]">Establishing_Uplink...</div>
            <div className="text-[9px] text-[#00f3ff] uppercase font-black">
               [ CLICK ANYWHERE TO SKIP ]
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

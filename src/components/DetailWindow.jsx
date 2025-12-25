import { useRef, useEffect } from 'react';
import { animate } from 'animejs';
import { ChevronRight } from 'lucide-react';

export default function DetailWindow({ data, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    animate(modalRef.current, {
      scale: [0.95, 1],
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 500,
      easing: 'spring(1, 80, 15, 0)'
    });
  }, []);

  return (
    <div
      ref={modalRef}
      className="w-full max-w-4xl bg-[var(--panel-bg)] border border-[var(--border-color)] rounded-[3rem] p-8 md:p-16 text-left relative shadow-[0_50px_100px_rgba(0,0,0,0.9)] overflow-hidden"
      onClick={e => e.stopPropagation()}
    >
      <div className="absolute top-0 right-0 p-8 md:p-16 text-[120px] md:text-[180px] font-black text-[var(--accent-color)] opacity-5 select-none uppercase tracking-tighter leading-none pointer-events-none">
        {data.title.substring(0, 1)}
      </div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-16 gap-6">
          <div>
            <div className="text-[var(--accent-color)] text-[10px] font-black tracking-[0.5em] mb-4 md:mb-6 bg-[var(--accent-dim)] border border-[var(--accent-color)]/20 px-6 py-2 rounded-full inline-block uppercase italic">
              {data.category}
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-[var(--text-primary)] tracking-tighter uppercase leading-none">{data.title}</h2>
          </div>
          <button onClick={onClose} className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-color)] transition-all bg-[var(--bg-color)] text-3xl font-black">
            ×
          </button>
        </div>

        <div className="grid md:grid-cols-[1fr_300px] gap-10 md:gap-20">
          <div>
            <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-sans mb-8 md:mb-12">
              {data.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.link ? (
                <a href={data.link} target="_blank" rel="noreferrer" className="flex items-center justify-center py-4 md:py-6 bg-[var(--accent-color)] text-black rounded-full text-[10px] md:text-xs font-black tracking-widest hover:bg-[var(--text-primary)] hover:text-[var(--bg-color)] transition-all shadow-xl">
                  ACCESS_LIVE_INSTANCE <ChevronRight size={14} className="ml-2" />
                </a>
              ) : (
                <div className="flex items-center justify-center py-4 md:py-6 bg-[var(--panel-bg)]/50 text-[var(--text-secondary)] opacity-40 rounded-full text-[10px] md:text-xs font-black tracking-widest cursor-not-allowed border border-[var(--border-color)] uppercase">
                  DEPL_LINK_DISABLED
                </div>
              )}

              {data.github ? (
                <a href={data.github} target="_blank" rel="noreferrer" className="flex items-center justify-center py-4 md:py-6 border border-[var(--border-color)] text-[var(--text-primary)] rounded-full text-[10px] md:text-xs font-black tracking-widest hover:border-[var(--accent-color)] transition-all">
                  VIEW_SOURCE_CODE
                </a>
              ) : (
                <div className="flex items-center justify-center py-4 md:py-6 border border-red-500/10 bg-red-500/5 text-red-500/40 rounded-full text-[10px] md:text-xs font-black tracking-widest cursor-not-allowed uppercase italic text-center">
                  PRIVATE_REPOSITORY
                </div>
              )}
            </div>
          </div>

          <div className="space-y-8 md:space-y-10">
            <div>
              <div className="text-[10px] text-[var(--text-secondary)] opacity-50 font-black uppercase tracking-widest mb-4 md:mb-6 border-b border-[var(--border-color)] pb-2">Integrated_Tech</div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {data.tech.map(t => (
                  <span key={t} className="px-4 py-1.5 md:px-5 md:py-2 bg-[var(--bg-color)] border border-[var(--border-color)] rounded-full text-[var(--text-secondary)] text-[10px] md:text-[11px] font-bold hover:bg-[var(--accent-color)] hover:text-black hover:border-[var(--accent-color)] transition-all duration-300 cursor-default hover:scale-110">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[10px] text-[var(--text-secondary)] opacity-50 font-black uppercase tracking-widest mb-4 md:mb-6 border-b border-[var(--border-color)] pb-2">Status</div>
              <div className="text-xs text-green-500 font-black uppercase flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e]"></div>
                DEPLOYMENT_STABLE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

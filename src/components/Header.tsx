import MLMark from "../img/Mike_Landers_Mark.png";

function Header() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-base-900">
      {/* Faint grid overlay */}
      <div className="absolute inset-0 bg-grid-faint bg-grid opacity-60 pointer-events-none" />

      {/* Ambient glow behind logo */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] bg-primary-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-16 -translate-y-1/2 w-[420px] h-[420px] bg-primary-400/12 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl w-full mx-auto px-8 py-24 grid md:grid-cols-2 gap-8 items-center">
        {/* Left: text */}
        <div>
          <div className="font-mono text-primary-400 text-sm tracking-widest mb-10 animate-fadeIn opacity-80">
            ~/mike-landers <span className="text-base-300">$</span> whoami
          </div>

          <h1 className="font-sans font-black text-[clamp(3rem,8vw,6.5rem)] leading-none tracking-tight text-white animate-fadeInDown">
            Mike
            <br />
            <span className="text-primary-400">Landers</span>
          </h1>

          <div className="mt-8 flex items-center gap-3 animate-slideUp">
            <span className="h-px w-12 bg-primary-500 inline-block" />
            <span className="font-mono text-base-200 text-lg tracking-wide">
              Full Stack Web Developer
            </span>
            <span className="inline-block w-2 h-5 bg-primary-400 animate-blink ml-1" />
          </div>

          <div className="mt-16 flex flex-wrap gap-4 animate-slideUp">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white font-semibold text-base px-7 py-3.5 rounded-lg transition-all duration-200 shadow-glow hover:shadow-glow-lg"
            >
              View Projects
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="mailto:landers.mike@gmail.com"
              className="inline-flex items-center gap-2 border border-base-500 hover:border-primary-400 text-base-200 hover:text-primary-400 font-semibold text-base px-7 py-3.5 rounded-lg transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right: Mark */}
        <div className="flex justify-center md:justify-end animate-fadeIn">
          <div className="relative group">
            {/* Layered glow halos */}
            <div className="absolute inset-0 scale-125 rounded-full bg-primary-400/25 blur-3xl transition-all duration-700 group-hover:bg-primary-400/40 group-hover:scale-150" />
            <div className="absolute inset-0 scale-110 rounded-full bg-primary-500/15 blur-2xl" />
            {/* Logo — mix-blend-screen dissolves the dark background into the site */}
            <img
              src={MLMark}
              alt="Mike Landers Mark"
              className="relative w-72 sm:w-80 md:w-[420px] drop-shadow-[0_0_60px_rgba(0,224,255,0.5)] transition-all duration-700 group-hover:drop-shadow-[0_0_90px_rgba(0,224,255,0.75)] group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-base-400 animate-fadeIn">
        <span className="font-mono text-xs tracking-widest">scroll</span>
        <svg
          className="w-4 h-4 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}

export default Header;

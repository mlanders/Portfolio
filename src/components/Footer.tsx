const socials = [
  { label: "GitHub",   href: "https://github.com/mlanders",         icon: "fab fa-github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/mikelanders/", icon: "fab fa-linkedin" },
  { label: "Twitter",  href: "https://twitter.com/MikeLanders",      icon: "fab fa-twitter" },
  { label: "DEV",      href: "https://dev.to/mlanders",              icon: "fab fa-dev" },
];

function Footer() {
  return (
    <footer id="contact" className="bg-base-800 border-t border-base-700 py-24 px-8">
      <div className="max-w-4xl mx-auto">

        {/* Section label */}
        <div className="font-mono text-primary-400 text-sm tracking-widest mb-4">
          04 // contact
        </div>

        <h2 className="text-5xl font-black text-white mb-6">Get In Touch</h2>
        <p className="text-base-300 text-lg mb-12 max-w-xl">
          Open to new opportunities. Drop me a line and I'll get back to you.
        </p>

        {/* Contact info row */}
        <div className="flex flex-col sm:flex-row gap-6 mb-14 text-base-200 text-base">
          <a
            href="mailto:landers.mike@gmail.com"
            className="group flex items-center gap-3 hover:text-primary-400 transition-colors"
          >
            <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            landers.mike@gmail.com
          </a>

          <span className="flex items-center gap-3 text-base-300">
            <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Elk Grove, CA
          </span>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-6">
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              aria-label={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-base-400 hover:text-primary-400 transition-all duration-200 hover:scale-110"
            >
              <i className={icon} />
            </a>
          ))}
        </div>

        {/* Bottom rule */}
        <div className="mt-16 pt-8 border-t border-base-700 flex flex-col sm:flex-row justify-between items-center gap-2 text-base-500 text-sm font-mono">
          <span>Mike Landers — Full Stack Developer</span>
          <span>Elk Grove, CA · {new Date().getFullYear()}</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

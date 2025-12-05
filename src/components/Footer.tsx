function Footer() {
  return (
    <div className="box-border font-roboto font-normal w-full p-12 bg-gradient-to-b from-dark-100 to-dark-200 border-t border-dark-300">
      <div className="max-w-[800px] w-full mx-auto mb-8">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-dark-900 to-dark-700 bg-clip-text text-transparent">
          Contact
        </h1>
      </div>
      <section className="box-border flex items-start mx-auto justify-between max-w-[800px] w-full md:flex-row flex-col">
        <div className="w-full">
          <div className="flex flex-col text-2xl space-y-4 text-dark-700 mb-8">
            <span className="flex items-center group">
              <svg
                className="w-6 h-6 mr-3 text-primary-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="font-semibold text-dark-900">Location:</span>
              <span className="ml-2">Elk Grove, CA</span>
            </span>
            <span className="flex items-center group">
              <svg
                className="w-6 h-6 mr-3 text-primary-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="font-semibold text-dark-900">Email:</span>
              <a
                href="mailto:landers.mike@gmail.com"
                target="_top"
                className="ml-2 hover:text-primary-600 transition-colors underline-offset-4 hover:underline"
              >
                landers.mike@gmail.com
              </a>
            </span>
            <span className="flex items-center group">
              <svg
                className="w-6 h-6 mr-3 text-primary-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-semibold text-dark-900">Phone:</span>
              <span className="ml-2">916.541.7604</span>
            </span>
          </div>
          <div className="self-center mt-10 flex gap-5">
            <a
              aria-label="LinkedIn"
              href="https://linkedin.com/in/mikelanders/"
              className="text-5xl no-underline text-dark-600 hover:text-primary-600 transition-all hover:scale-110 duration-300"
            >
              <div className="fab fa-linkedin" />
            </a>
            <a
              aria-label="GitHub"
              href="https://github.com/mlanders"
              className="text-5xl no-underline text-dark-600 hover:text-primary-600 transition-all hover:scale-110 duration-300"
            >
              <div className="fab fa-github-square" />
            </a>
            <a
              aria-label="Twitter"
              href="https://twitter.com/MikeLanders"
              className="text-5xl no-underline text-dark-600 hover:text-primary-600 transition-all hover:scale-110 duration-300"
            >
              <div className="fab fa-twitter-square" />
            </a>
            <a
              aria-label="DEV"
              title="mlanders's DEV Profile"
              href="https://dev.to/mlanders"
              className="text-5xl no-underline text-dark-600 hover:text-primary-600 transition-all hover:scale-110 duration-300"
            >
              <div className="fab fa-dev" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

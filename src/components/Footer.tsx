function Footer() {
  return (
    <div className="box-border font-roboto font-normal w-full p-8 bg-[#f1f1f1]">
      <div className="max-w-[800px] w-full mx-auto mb-6">
        <h1 className="text-6xl font-bold text-gray-900">Contact</h1>
      </div>
      <section className="box-border flex items-start mx-auto justify-between max-w-[800px] w-full md:flex-row flex-col">
        <div>
          <div className="flex flex-col text-2xl space-y-3 text-gray-700">
            <span>
              <span className="font-semibold">Location:</span> Elk Grove, CA
            </span>
            <span>
              <span className="font-semibold">Email: </span>
              <a
                href="mailto:landers.mike@gmail.com"
                target="_top"
                className="hover:text-blue-600 transition-colors"
              >
                landers.mike@gmail.com
              </a>
            </span>
            <span>
              <span className="font-semibold">Phone:</span> 916.541.7604
            </span>
          </div>
          <div className="self-center mt-8 flex gap-4">
            <a
              aria-label="LinkedIn"
              href="https://linkedin.com/in/mikelanders/"
              className="text-5xl no-underline text-gray-700 hover:text-blue-600 transition-colors"
            >
              <div className="fab fa-linkedin" />
            </a>
            <a
              aria-label="GitHub"
              href="https://github.com/mlanders"
              className="text-5xl no-underline text-gray-700 hover:text-blue-600 transition-colors"
            >
              <div className="fab fa-github-square" />
            </a>
            <a
              aria-label="Twitter"
              href="https://twitter.com/MikeLanders"
              className="text-5xl no-underline text-gray-700 hover:text-blue-600 transition-colors"
            >
              <div className="fab fa-twitter-square" />
            </a>
            <a
              aria-label="DEV"
              title="mlanders's DEV Profile"
              href="https://dev.to/mlanders"
              className="text-5xl no-underline text-gray-700 hover:text-blue-600 transition-colors"
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

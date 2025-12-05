import headshot from "../img/headshot.jpg";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-white to-dark-50 py-16 px-4 animate-fadeIn">
      <div className="mx-auto" style={{ width: "800px" }}>
        <div className="bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 p-8 border border-dark-100">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Profile Section */}
            <div className="md:col-span-1">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <img
                  src={headshot}
                  alt="Professional headshot"
                  className="relative w-full rounded-xl shadow-lg ring-2 ring-white"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="md:col-span-2">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-dark-900 to-dark-700 bg-clip-text text-transparent mb-6">
                About Me
              </h1>
              <div className="max-w-none">
                <p className="text-2xl text-dark-700 mb-4 leading-relaxed">
                  Developer with a passion for education and crafting friendly
                  interfaces. My specialties are Javascript, React, Redux, and
                  Express.
                </p>
                <p className="text-2xl text-dark-700 mb-6 leading-relaxed">
                  After ten years in the customer support industry, I've
                  developed strong problem-solving and communication skills. I
                  look forward to combining those skills to help build visually
                  exciting projects.
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-xl border border-primary-100 hover:shadow-soft hover:scale-105 transition-all duration-300">
                  <h2 className="text-4xl font-semibold text-dark-900 mb-4 flex items-center">
                    <span className="w-2 h-8 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full mr-3"></span>
                    Front-end
                  </h2>
                  <ul className="space-y-3">
                    {["HTML5", "CSS3", "Javascript", "React", "Tailwind"].map(
                      (skill) => (
                        <li
                          key={skill}
                          className="flex items-center text-2xl text-dark-700 group"
                        >
                          <svg
                            className="w-7 h-7 mr-3 text-primary-500 group-hover:scale-110 transition-transform"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {skill}
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-dark-50 to-white p-6 rounded-xl border border-dark-200 hover:shadow-soft hover:scale-105 transition-all duration-300">
                  <h2 className="text-4xl font-semibold text-dark-900 mb-4 flex items-center">
                    <span className="w-2 h-8 bg-gradient-to-b from-dark-600 to-dark-800 rounded-full mr-3"></span>
                    Back-end
                  </h2>
                  <ul className="space-y-3">
                    {[
                      "AWS RDS, SQLite, Postgres",
                      "Node.js",
                      "Express",
                      "Stripe",
                    ].map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center text-2xl text-dark-700 group"
                      >
                        <svg
                          className="w-7 h-7 mr-3 text-dark-600 group-hover:scale-110 transition-transform"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

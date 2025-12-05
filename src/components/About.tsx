import headshot from "../img/headshot.jpg";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4 animate-fadeIn">
      <div className="mx-auto" style={{ width: "800px" }}>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {/* Profile Section */}
            <div className="md:col-span-1">
              <div className="relative">
                <img
                  src={headshot}
                  alt="Professional headshot"
                  className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="md:col-span-2">
              <h1 className="text-6xl font-bold text-gray-900 mb-6">
                About Me
              </h1>
              <div className="max-w-none">
                <p className="text-2xl text-gray-700 mb-4 leading-relaxed">
                  Developer with a passion for education and crafting friendly
                  interfaces. My specialties are Javascript, React, Redux, and
                  Express.
                </p>
                <p className="text-2xl text-gray-700 mb-6 leading-relaxed">
                  After ten years in the customer support industry, I've
                  developed strong problem-solving and communication skills. I
                  look forward to combining those skills to help build visually
                  exciting projects.
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                    Front-end
                  </h2>
                  <ul className="space-y-3">
                    {["HTML5", "CSS3", "Javascript", "React", "Tailwind"].map(
                      (skill) => (
                        <li
                          key={skill}
                          className="flex items-center text-2xl text-gray-700"
                        >
                          <svg
                            className="w-7 h-7 mr-3 text-blue-500"
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

                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                  <h2 className="text-4xl font-semibold text-gray-900 mb-4">
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
                        className="flex items-center text-2xl text-gray-700"
                      >
                        <svg
                          className="w-7 h-7 mr-3 text-blue-500"
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

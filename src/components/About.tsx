const frontEnd = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Svelte",
  "Vue",
  "Tailwind CSS",
  "Redux",
];
const backEnd = [
  "Node.js",
  "Express",
  "PostgreSQL",
  "SQLite",
  "AWS RDS",
  "Cloudflare",
  "Stripe",
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-base-800 py-24 px-8 border-t border-base-700"
    >
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-primary-400 text-sm tracking-widest mb-4">
          01 // about
        </div>

        <h2 className="text-5xl font-black text-white mb-16 leading-tight">
          Who I Am
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4 text-base-200 text-lg leading-relaxed">
            <p>
              Developer with a passion for education and crafting friendly
              interfaces. My specialties are JavaScript, React, Redux, and
              Express.
            </p>
            <p>
              After ten years in customer support, I've built strong
              problem-solving and communication skills — and I love combining
              them to ship visually exciting, user-focused products.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="font-mono text-primary-400 text-xs tracking-widest mb-3 uppercase">
                Front-end
              </p>
              <div className="flex flex-wrap gap-2">
                {frontEnd.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 text-sm font-medium bg-primary-500/10 text-primary-300 border border-primary-500/20 rounded-md hover:bg-primary-500/20 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="font-mono text-base-300 text-xs tracking-widest mb-3 uppercase">
                Back-end
              </p>
              <div className="flex flex-wrap gap-2">
                {backEnd.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 text-sm font-medium bg-base-700 text-base-200 border border-base-600 rounded-md hover:border-primary-500/40 transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

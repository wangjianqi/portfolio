const skills = [
  { label: "iOS / Swift", level: 95 },
  { label: "Flutter", level: 75 },
  { label: "AI / LLM APIs", level: 88 },
  { label: "Spring Boot", level: 72 },
  { label: "Next.js", level: 80 },
];

const principles = [
  {
    icon: "◈",
    title: "Solve your own problems",
    desc: "Every app I ship solves something I personally experienced. No solution in search of a problem.",
  },
  {
    icon: "◉",
    title: "Restraint as design",
    desc: "Less surface, deeper utility. I cut features until something essential remains.",
  },
  {
    icon: "◌",
    title: "Offline-first",
    desc: "Privacy and speed aren't trade-offs. On-device intelligence should be the default.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Divider line */}
      <div className="max-w-6xl mx-auto border-t border-white/[0.06] mb-24" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — bio */}
          <div>
            <div className="section-label mb-6">About</div>
            <h2
              className="font-syne font-700 text-4xl md:text-5xl text-white leading-tight mb-8"
              style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
            >
              Indie Developer.
              <br />
              <span className="text-white/30">Builder. Cyclist.</span>
            </h2>

            <div
              className="space-y-5 text-white/50 leading-relaxed"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              <p>
                I build iOS and AI-powered apps that solve real, personally
                experienced problems. My stack spans Swift, Flutter, on-device
                ML, and backend services — but the philosophy stays constant:
                ship something useful, keep it minimal.
              </p>
              <p>
                The VisionDrive dashcam app started on a cycling route through
                Hangzhou. I needed something that didn&apos;t exist, so I built
                it. That&apos;s the pattern I keep returning to.
              </p>
              <p>
                I also write about AI and technology in Chinese for a developer
                audience — long-form, technically honest, without the hype.
              </p>
            </div>

            {/* Stack badges */}
            <div className="flex flex-wrap gap-2 mt-8">
              {[
                "Swift",
                "UIKit",
                "AVFoundation",
                "Metal",
                "Flutter",
                "Whisper",
                "Claude API",
                "Next.js",
                "Spring Boot",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-white/50 border border-white/[0.08] px-3 py-1.5 rounded-full hover:border-white/20 hover:text-white/70 transition-colors"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right — principles + skills */}
          <div className="space-y-8">
            {/* Principles */}
            <div className="space-y-4">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="glass-card rounded-2xl p-5 hover:bg-white/[0.05] transition-colors"
                >
                  <div className="flex gap-4 items-start">
                    <span
                      className="text-[#4F8EF7] text-xl mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    >
                      {p.icon}
                    </span>
                    <div>
                      <h3
                        className="font-syne font-600 text-sm text-white mb-1"
                        style={{
                          fontFamily: "Syne, sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        {p.title}
                      </h3>
                      <p
                        className="text-sm text-white/40 leading-relaxed"
                        style={{ fontFamily: "DM Sans, sans-serif" }}
                      >
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skill bars */}
            <div
              className="glass-card rounded-2xl p-6 space-y-5"
              aria-label="Skills"
            >
              <div
                className="section-label text-[10px] mb-2"
                aria-hidden="true"
              >
                Stack Proficiency
              </div>
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span
                      className="text-xs text-white/60"
                      style={{ fontFamily: "DM Sans, sans-serif" }}
                    >
                      {skill.label}
                    </span>
                    <span
                      className="text-xs text-white/30"
                      style={{ fontFamily: "DM Sans, sans-serif" }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${skill.level}%`,
                        background:
                          "linear-gradient(90deg, #4F8EF7, #818cf8)",
                      }}
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={skill.label}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

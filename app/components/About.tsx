import type { Dictionary } from "@/lib/i18n";

const skills = [
  { label: "iOS / Swift", level: 95 },
  { label: "Flutter", level: 75 },
  { label: "AI / LLM APIs", level: 88 },
  { label: "Spring Boot", level: 72 },
  { label: "Next.js", level: 80 },
];

interface AboutProps {
  about: Dictionary["about"];
}

export default function About({ about }: AboutProps) {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Divider line */}
      <div className="max-w-6xl mx-auto border-t border-white/[0.06] mb-24" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — bio */}
          <div>
            <div className="section-label mb-6">{about.label}</div>
            <h2
              className="font-syne font-700 text-4xl md:text-5xl text-white leading-tight mb-8"
              style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
            >
              {about.titleTop}
              <br />
              <span className="text-white/30">{about.titleBottom}</span>
            </h2>

            <div
              className="space-y-5 text-white/50 leading-relaxed"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
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
              {about.principles.map((p) => (
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
              aria-label={about.skillsAriaLabel}
            >
              <div
                className="section-label text-[10px] mb-2"
                aria-hidden="true"
              >
                {about.stackLabel}
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

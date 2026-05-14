import { content } from "../data/content";

const categoryConfig = {
  Languages:          { icon: "terminal",     accent: "cyan"   },
  Frontend:           { icon: "layers",        accent: "purple" },
  Backend:            { icon: "api",            accent: "cyan"   },
  Databases:          { icon: "database",      accent: "purple" },
  DevOps:             { icon: "cloud_sync",    accent: "cyan"   },
  "Computer Science": { icon: "architecture",  accent: "purple" },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 md:px-16 max-w-[1440px] mx-auto">
      <div className="border border-outline-variant p-8 md:p-20">
        <h2 className="text-label-caps text-secondary mb-12 flex items-center gap-4">
          <span className="w-12 h-px bg-secondary inline-block" />
          TECHNICAL CAPABILITIES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(content.skills).map(([category, skills]) => {
            const { icon, accent } = categoryConfig[category] ?? { icon: "code", accent: "cyan" };
            const isCyan = accent === "cyan";
            const textCls = isCyan ? "text-primary" : "text-secondary";
            const borderCls = isCyan ? "border-primary" : "border-secondary";
            const hoverBorderCls = isCyan ? "hover:border-primary" : "hover:border-secondary";

            return (
              <div
                key={category}
                className={`p-8 border border-outline-variant ${hoverBorderCls} transition-colors`}
              >
                <span className={`material-symbols-outlined ${textCls} text-4xl mb-6 block`}>
                  {icon}
                </span>
                <h3 className={`text-headline-md mb-4 uppercase`}>{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-mono-label px-2 py-1 border ${borderCls} ${textCls}`}
                    >
                      {skill.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

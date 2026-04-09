const focusAreas = [
  {
    title: "Manufacturing Systems",
    items: [
      "Smart factory implementation and manufacturing automation support",
      "Equipment EAM, FDC/SCMS, digital twin, and EMS environments",
      "Equipment informatization projects across planning, delivery, and operations",
    ],
  },
  {
    title: "OT and Industrial Automation",
    items: [
      "HVAC, SCADA, and utility infrastructure automation",
      "PLC and HMI development, integration, and day-to-day operations",
      "Reliable control and monitoring systems for industrial field environments",
    ],
  },
  {
    title: "Infrastructure and AI Platforms",
    items: [
      "Hybrid infrastructure across on-premise systems, cloud, network, and storage",
      "LLM-enabled data architecture, embedding pipelines, and enterprise search",
      "AI service planning, deployment, and stable operations at enterprise scale",
    ],
  },
];

const researchInterests = [
  "Industrial AI systems for manufacturing and enterprise operations",
  "Reliable data and retrieval architectures for LLM applications",
  "System design across OT, infrastructure, and application layers",
  "Operational automation for large-scale technical environments",
];

const links = [
  {
    label: "GitHub",
    href: "https://github.com/jerryleearch",
    value: "github.com/jerryleearch",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vylar/",
    value: "linkedin.com/in/vylar",
  },
];

export default function Profile() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(134,155,172,0.18),_transparent_36%),linear-gradient(180deg,_#f6f1e7_0%,_#efe7d8_46%,_#e4dccd_100%)] text-slate-900">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(71,85,105,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(71,85,105,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.1) 60%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col px-5 pb-16 pt-8 sm:px-8 lg:px-12">
        <header className="mb-12 border-b border-slate-900/12 pb-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p
                className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-slate-700"
                style={{
                  fontFamily:
                    '"SFMono-Regular", "SF Mono", "Cascadia Code", "JetBrains Mono", monospace',
                }}
              >
                Academic profile / ICML 2026
              </p>
              <h1
                className="max-w-3xl text-4xl leading-tight font-semibold sm:text-5xl"
                style={{
                  fontFamily:
                    '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
                }}
              >
                Jaewon Lee
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-800 sm:text-xl">
                Undergraduate student in Computer Science at Konkuk University
                with interests in industrial digitalization, intelligent
                systems, and dependable AI infrastructure.
              </p>
            </div>

            <div className="w-full max-w-xs rounded-3xl border border-slate-900/10 bg-white/70 p-5 shadow-[0_20px_60px_rgba(30,41,59,0.08)] backdrop-blur">
              <p className="text-sm font-medium text-slate-600">Current focus</p>
              <p className="mt-2 text-base leading-7 text-slate-900">
                Building systems that connect manufacturing environments, OT
                operations, enterprise infrastructure, and AI-enabled services.
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
          <article className="rounded-[2rem] border border-slate-900/10 bg-white/72 p-7 shadow-[0_16px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-9">
            <p
              className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-600"
              style={{
                fontFamily:
                  '"SFMono-Regular", "SF Mono", "Cascadia Code", "JetBrains Mono", monospace',
              }}
            >
              Profile
            </p>
            <p className="mt-5 text-[1.02rem] leading-8 text-slate-800">
              I am interested in how AI systems can support real industrial and
              enterprise environments where reliability, maintainability, and
              operational continuity matter. My background spans manufacturing
              systems, OT and utility automation, hybrid infrastructure, and
              data platforms for AI-enabled services including enterprise
              search, embeddings, and RAG-based architectures.
            </p>
            <p className="mt-4 text-[1.02rem] leading-8 text-slate-800">
              I am especially motivated by technical work that bridges field
              operations and software systems, from control and monitoring
              environments to large-scale service operations and applied AI
              platforms.
            </p>
          </article>

          <aside className="rounded-[2rem] border border-slate-900/10 bg-slate-950/95 p-7 text-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.18)] sm:p-8">
            <p
              className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300"
              style={{
                fontFamily:
                  '"SFMono-Regular", "SF Mono", "Cascadia Code", "JetBrains Mono", monospace',
              }}
            >
              Research interests
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-200 sm:text-[0.95rem]">
              {researchInterests.map((interest) => (
                <li
                  key={interest}
                  className="border-l border-amber-200/40 pl-4"
                >
                  {interest}
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-3">
          {focusAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-[1.75rem] border border-slate-900/10 bg-white/68 p-6 shadow-[0_14px_40px_rgba(30,41,59,0.08)] backdrop-blur-sm"
            >
              <h2
                className="text-2xl leading-tight font-semibold text-slate-900"
                style={{
                  fontFamily:
                    '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
                }}
              >
                {area.title}
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700 sm:text-[0.96rem]">
                {area.items.map((item) => (
                  <li key={item} className="border-t border-slate-900/8 pt-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.72fr)]">
          <article className="rounded-[2rem] border border-slate-900/10 bg-white/72 p-7 shadow-[0_16px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-9">
            <p
              className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-600"
              style={{
                fontFamily:
                  '"SFMono-Regular", "SF Mono", "Cascadia Code", "JetBrains Mono", monospace',
              }}
            >
              Summary
            </p>
            <p
              className="mt-4 text-2xl leading-snug font-semibold text-slate-900"
              style={{
                fontFamily:
                  '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
              }}
            >
              Industrial digitalization engineer in formation, focused on
              planning, building, and operating systems for manufacturing,
              infrastructure, and AI-driven enterprise environments.
            </p>
          </article>

          <article className="rounded-[2rem] border border-slate-900/10 bg-[#d9cfba]/80 p-7 shadow-[0_16px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-8">
            <p
              className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-700"
              style={{
                fontFamily:
                  '"SFMono-Regular", "SF Mono", "Cascadia Code", "JetBrains Mono", monospace',
              }}
            >
              Links
            </p>
            <div className="mt-5 space-y-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-slate-900/10 bg-white/70 px-4 py-4 text-slate-900 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <span>
                    <span className="block text-xs uppercase tracking-[0.2em] text-slate-500">
                      {link.label}
                    </span>
                    <span className="mt-1 block text-sm font-medium text-slate-800">
                      {link.value}
                    </span>
                  </span>
                  <span className="text-lg text-slate-500 transition-transform duration-200 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}

"use client";

import { Folder, ExternalLink, Bug, Wrench, GitBranch, Database, Network } from "lucide-react";
import Window from "../os/Window";

export default function ProjectsApp() {
  return (
    <Window app="projects" title="Project Garage — Issue Tracker">
      <div className="w-[980px] max-w-[82vw]">
       <section className="grid h-[640px] grid-cols-[220px_1fr_260px] overflow-hidden rounded-[28px] border border-pink-200 bg-white/70 shadow-sm backdrop-blur-xl">
          
          <aside className="h-full space-y-5 overflow-y-auto border-l border-pink-100 bg-[#fff7fb] p-6">
            <p className="font-hand text-3xl text-pink-600 -rotate-3">garage shelf</p>

            <div className="mt-6 rounded-2xl border border-pink-200 bg-pink-100/60 p-4 shadow-sm">
              <Folder size={18} className="text-pink-600" />
              <p className="mt-2 font-semibold text-stone-800">Issue Tracker</p>
              <p className="font-hand text-xl text-pink-500">build file #001</p>
            </div>

            <div className="mt-4 rounded-2xl border border-dashed border-pink-200 bg-white/50 p-4 opacity-50">
              <Folder size={18} className="text-pink-300" />
              <p className="mt-2 text-sm text-stone-500">Damage Deposit</p>
            </div>

            <div className="mt-auto mt-8 rotate-[-2deg] rounded-xl bg-yellow-100 p-4 font-hand text-xl leading-6 text-stone-700 shadow-sm">
              garage rule
              <br />
              show the messy thinking, not just the final result.
            </div>
          </aside>

          <main className="overflow-y-auto bg-[#fffaf7] p-8">
            <div className="relative min-h-[540px] rounded-3xl border border-pink-100 bg-white p-8 shadow-inner">
              <div className="absolute inset-0 bg-[linear-gradient(#fce7f3_1px,transparent_1px),linear-gradient(90deg,#fce7f3_1px,transparent_1px)] bg-[size:22px_22px] opacity-40" />

              <div className="relative">
                <p className="font-hand text-3xl text-pink-600">open build file</p>
                <h1 className="mt-1 text-4xl font-bold text-stone-800">Issue Tracker</h1>
                <p className="mt-1 text-sm text-stone-400">build file #001 · in progress</p>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  <PaperBox title="the mess" icon={<Bug size={16} />}>
                    “I wanted to understand how real software teams track bugs,
                    assign work, and move tasks through a workflow.”
                  </PaperBox>

                  <PaperBox title="the build" icon={<Wrench size={16} />}>
                    auth → issues → comments → assignees → status updates → dashboard
                  </PaperBox>
                </div>

                <div className="mt-10 rounded-3xl border border-pink-100 bg-white/80 p-6">
                  <p className="font-hand text-3xl text-pink-600">build timeline</p>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    {["idea", "schema", "auth", "issues", "comments", "dashboard", "deploy?"].map(
                      (step, index) => (
                        <div key={step} className="flex items-center gap-3">
                          <span
                            className={`rounded-full px-4 py-2 font-hand text-xl shadow-sm ${
                              step === "issues"
                                ? "bg-pink-600 text-white"
                                : "bg-white text-stone-700"
                            }`}
                          >
                            {step}
                          </span>
                          {index < 6 && <span className="text-pink-300">→</span>}
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-center gap-8 rounded-3xl bg-pink-50 p-6">
                  <Node icon={<Database size={20} />} label="Database" />
                  <span className="text-pink-300">→</span>
                  <Node icon={<Network size={20} />} label="Workflow" />
                  <span className="text-pink-300">→</span>
                  <Node icon={<Wrench size={20} />} label="Dashboard" />
                </div>
              </div>
            </div>
          </main>

          <aside className="space-y-5 border-l border-pink-100 bg-[#fff7fb] p-6">
            <Scrap title="bugs fought">
              <p>— Protected routes after refresh</p>
              <p>— Status updates getting messy</p>
              <p>— User / issue / comment relationships</p>
            </Scrap>

            <Scrap title="parts used" yellow>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"].map((tech) => (
                  <span key={tech} className="rounded bg-white px-2 py-1 text-xs text-pink-600">
                    {tech}
                  </span>
                ))}
              </div>
            </Scrap>

            <Scrap title="bench notes" blue>
              “Most full-stack apps are workflow systems wearing different clothes.”
            </Scrap>

            <button className="flex w-full items-center justify-between rounded-2xl bg-pink-600 px-4 py-3 text-sm font-semibold text-white shadow-sm">
              GitHub <GitBranch size={15} />
            </button>

            <button className="flex w-full items-center justify-between rounded-2xl bg-pink-100 px-4 py-3 text-sm font-semibold text-pink-700">
              Live demo <ExternalLink size={15} />
            </button>
          </aside>
        </section>
      </div>
    </Window>
  );
}

function PaperBox({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-pink-100 bg-white/80 p-6 shadow-sm">
      <h3 className="mb-4 flex items-center gap-2 font-hand text-3xl text-pink-600">
        {icon}
        {title}
      </h3>
      <p className="font-hand text-2xl leading-8 text-stone-700">{children}</p>
    </section>
  );
}

function Scrap({
  title,
  children,
  yellow,
  blue,
}: {
  title: string;
  children: React.ReactNode;
  yellow?: boolean;
  blue?: boolean;
}) {
  return (
    <div
      className={`rotate-[-1deg] rounded-xl p-4 shadow-sm ${
        yellow ? "bg-yellow-100" : blue ? "bg-blue-50" : "bg-white"
      }`}
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-pink-600">
        {title}
      </p>
      <div className="space-y-2 font-hand text-xl leading-6 text-stone-700">{children}</div>
    </div>
  );
}

function Node({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="grid h-12 w-12 place-items-center rounded-full border border-pink-200 bg-white text-pink-600">
        {icon}
      </div>
      <p className="font-hand text-lg text-stone-600">{label}</p>
    </div>
  );
}
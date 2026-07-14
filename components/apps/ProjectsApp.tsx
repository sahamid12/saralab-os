"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Bug,
  CheckCircle2,
  Circle,
  Database,
  ExternalLink,
  Folder,
  GitBranch,
  LayoutDashboard,
  Lock,
  MessageSquare,
} from "lucide-react";
import Window from "../os/Window";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  fileNumber: string;
  status: string;
  description: string;
  stack: string[];
  accent: string;
};

const projects: Project[] = [
  {
    id: "issue-tracker",
    title: "Issue Tracker",
    subtitle: "Full-stack workflow system",
    fileNumber: "Build File #001",
    status: "In progress",
    description:
      "A system for managing issues, comments, assignments, and status changes.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    accent: "bg-pink-100",
  },
  {
    id: "damage-deposit",
    title: "Damage Deposit",
    subtitle: "WordPress and Stripe plugin",
    fileNumber: "Build File #002",
    status: "Production",
    description:
      "A Stripe authorization workflow for collecting and managing damage deposits.",
    stack: ["WordPress", "PHP", "Stripe", "MySQL"],
    accent: "bg-yellow-100",
  },
  {
    id: "saralab-os",
    title: "SaraLab OS",
    subtitle: "Personal learning operating system",
    fileNumber: "Build File #003",
    status: "Active",
    description:
      "A browser-based operating system for projects, labs, notes, and learning.",
    stack: ["Next.js", "TypeScript", "Zustand", "Supabase"],
    accent: "bg-blue-50",
  },
];

const machineSteps = [
  { label: "Authentication", icon: Lock, status: "stable" },
  { label: "Issue Engine", icon: Bug, status: "active" },
  { label: "Comments", icon: MessageSquare, status: "stable" },
  { label: "Database", icon: Database, status: "stable" },
  { label: "Dashboard", icon: LayoutDashboard, status: "building" },
];

const buildLog = [
  "Sketched the database model",
  "Built authentication and protected routes",
  "Added issue creation",
  "Connected users, issues, and comments",
  "Started the dashboard",
];

export default function ProjectsApp() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Window
      app="projects"
      title={
        selectedProject
          ? `Project Garage — ${selectedProject.title}`
          : "Project Garage"
      }
    >
      <div className="w-[980px] max-w-[82vw]">
        {selectedProject ? (
          <ProjectFile
            project={selectedProject}
            onBack={() => setSelectedProject(null)}
          />
        ) : (
          <GarageLobby onOpenProject={setSelectedProject} />
        )}
      </div>
    </Window>
  );
}

function GarageLobby({
  onOpenProject,
}: {
  onOpenProject: (project: Project) => void;
}) {
  return (
    <section className="h-[640px] overflow-y-auto rounded-[28px] border border-pink-200 bg-[#fffaf7] p-8 shadow-sm">
      <header className="border-b border-pink-100 pb-6">
        <p className="font-hand text-3xl text-pink-600">
          Sara&apos;s project garage
        </p>

        <h1 className="mt-1 text-4xl font-bold tracking-tight text-stone-800">
          Choose a build to inspect
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-500">
          Every project has its own build file, system diagram, evidence, bugs,
          decisions, and notes from the workbench.
        </p>
      </header>

      <div className="mt-8 grid grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <button
            key={project.id}
            onClick={() => onOpenProject(project)}
            className={`group relative min-h-[260px] overflow-hidden rounded-[26px] border border-pink-100 p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md ${project.accent}`}
          >
            <div className="absolute right-5 top-5 font-hand text-xl text-pink-400">
              {String(index + 1).padStart(2, "0")}
            </div>

            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/80 text-pink-600 shadow-sm">
              <Folder size={21} />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-pink-500">
              {project.fileNumber}
            </p>

            <h2 className="mt-2 text-2xl font-bold text-stone-800">
              {project.title}
            </h2>

            <p className="mt-1 text-sm text-stone-500">{project.subtitle}</p>

            <p className="mt-4 text-sm leading-6 text-stone-600">
              {project.description}
            </p>

            <div className="mt-5 flex items-center justify-between">
              <span className="rounded-full bg-white/80 px-3 py-1 text-xs text-pink-600">
                {project.status}
              </span>

              <span className="font-hand text-xl text-pink-600 transition group-hover:translate-x-1">
                enter build file →
              </span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-[1fr_260px] gap-5">
        <div className="rounded-3xl border border-pink-100 bg-white p-5">
          <p className="font-hand text-2xl text-pink-600">
            how to explore the garage
          </p>
          <p className="mt-2 text-sm leading-6 text-stone-600">
            Select a project, inspect how it works, open its screenshots, review
            the build history, and follow the mistakes and decisions behind it.
          </p>
        </div>

        <div className="rotate-[-1deg] rounded-2xl bg-yellow-100 p-5 font-hand text-xl leading-7 text-stone-700 shadow-sm">
          Nothing here is only a finished product. Every build keeps its messy
          history.
        </div>
      </div>
    </section>
  );
}

function ProjectFile({
  project,
  onBack,
}: {
  project: Project;
  onBack: () => void;
}) {
  return (
    <section className="grid h-[640px] grid-cols-[190px_1fr_240px] overflow-hidden rounded-[28px] border border-pink-200 bg-[#fffaf7] shadow-sm">
      <aside className="border-r border-pink-100 bg-[#fff4fa] p-5">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-stone-500 transition hover:text-pink-600"
        >
          <ArrowLeft size={16} />
          Garage
        </button>

        <p className="mt-8 font-hand text-3xl text-pink-600">open build file</p>

        <div className="mt-5 rounded-2xl border border-pink-200 bg-white p-4 shadow-sm">
          <Folder size={18} className="text-pink-600" />

          <p className="mt-3 font-semibold text-stone-800">{project.title}</p>

          <p className="mt-1 font-hand text-xl text-pink-500">
            {project.fileNumber}
          </p>
        </div>

        <div className="mt-5 rotate-[-2deg] rounded-xl bg-yellow-100 p-4 font-hand text-xl leading-6 text-stone-700 shadow-sm">
          Currently inspecting:
          <br />
          {project.title}
        </div>
      </aside>

      <main className="h-full overflow-y-auto bg-[#fffaf7] p-7">
        <header className="mb-5 rounded-3xl border border-pink-100 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                {project.fileNumber}
              </p>

              <h1 className="mt-2 text-4xl font-bold text-stone-800">
                {project.title}
              </h1>

              <p className="mt-2 text-sm leading-6 text-stone-500">
                {project.description}
              </p>
            </div>

            <span className="rounded-full bg-pink-100 px-4 py-2 text-xs font-semibold text-pink-600">
              {project.status}
            </span>
          </div>
        </header>

        <section className="relative rounded-[28px] border border-pink-100 bg-white p-7 shadow-inner">
          <div className="absolute inset-0 bg-[linear-gradient(#fce7f3_1px,transparent_1px),linear-gradient(90deg,#fce7f3_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

          <div className="relative">
            <p className="mb-6 font-hand text-3xl text-pink-600">
              how the machine works
            </p>

            <div className="flex flex-col items-center gap-3">
              {machineSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.label} className="flex flex-col items-center">
                    <div className="grid w-[310px] grid-cols-[48px_1fr_82px] items-center rounded-2xl border border-pink-100 bg-white p-4 shadow-sm">
                      <div className="grid h-10 w-10 place-items-center rounded-full bg-pink-100 text-pink-600">
                        <Icon size={18} />
                      </div>

                      <div>
                        <p className="font-semibold text-stone-800">
                          {step.label}
                        </p>
                        <p className="text-xs text-stone-400">
                          system module {index + 1}
                        </p>
                      </div>

                      <span
                        className={`rounded-full px-3 py-1 text-center text-[11px] ${
                          step.status === "active"
                            ? "bg-pink-600 text-white"
                            : "bg-pink-50 text-pink-600"
                        }`}
                      >
                        {step.status}
                      </span>
                    </div>

                    {index < machineSteps.length - 1 && (
                      <div className="h-8 w-px bg-pink-200" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mt-5 rounded-3xl border border-pink-100 bg-white p-5 shadow-sm">
          <p className="font-hand text-3xl text-pink-600">build log</p>

          <div className="mt-4 space-y-3">
            {buildLog.map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                {index < 4 ? (
                  <CheckCircle2 size={16} className="text-pink-500" />
                ) : (
                  <Circle size={16} className="text-pink-300" />
                )}

                <p className="text-sm text-stone-600">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <aside className="h-full space-y-4 overflow-y-auto border-l border-pink-100 bg-[#fff7fb] p-5">
        <Scrap title="quick read">
          Built to understand how software teams move work from report to
          resolution.
        </Scrap>

        <Scrap title="parts used" yellow>
          {project.stack.join(" · ")}
        </Scrap>

        <Scrap title="bugs fought">
          Protected routes after refresh. Messy status logic. Relationships
          between users, issues, and comments.
        </Scrap>

        <Scrap title="bench note" blue>
          The database model became much easier once I stopped designing the UI
          first.
        </Scrap>

        <button className="flex w-full items-center justify-between rounded-2xl bg-pink-600 px-4 py-3 text-sm font-semibold text-white shadow-sm">
          GitHub
          <GitBranch size={15} />
        </button>

        <button className="flex w-full items-center justify-between rounded-2xl bg-pink-100 px-4 py-3 text-sm font-semibold text-pink-700">
          Live demo
          <ExternalLink size={15} />
        </button>
      </aside>
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
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-pink-600">
        {title}
      </p>

      <p className="font-hand text-xl leading-6 text-stone-700">{children}</p>
    </div>
  );
}
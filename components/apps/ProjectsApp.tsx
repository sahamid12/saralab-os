"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Bug,
  CheckCircle2,
  Circle,
  Cloud,
  Database,
  ExternalLink,
  FolderArchive,
  GitBranch,
  LayoutDashboard,
  Lock,
  MessageSquare,
  Monitor,
  ShieldCheck,
  Terminal,
  Vault,
  Wrench,
} from "lucide-react";
import Window from "../os/Window";

type ProjectId = "issue-tracker" | "damage-deposit" | "saralab-os";

type Project = {
  id: ProjectId;
  title: string;
  roomName: string;
  fileNumber: string;
  status: string;
  description: string;
  stack: string[];
  quickRead: string;
  bugs: string;
  lesson: string;
};

const projects: Project[] = [
  {
    id: "issue-tracker",
    title: "Issue Tracker",
    roomName: "Main Workbench",
    fileNumber: "Build File #001",
    status: "In progress",
    description:
      "A full-stack workflow system for issues, comments, assignments, and status changes.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    quickRead:
      "Built to understand how software teams move work from bug report to resolution.",
    bugs:
      "Protected routes after refresh, messy status logic, and relationships between users, issues, and comments.",
    lesson:
      "The database model became much clearer once I stopped designing the interface first.",
  },
  {
    id: "damage-deposit",
    title: "Damage Deposit",
    roomName: "Payment Vault",
    fileNumber: "Build File #002",
    status: "Production",
    description:
      "A WordPress and Stripe authorization workflow for collecting and tracking damage deposits.",
    stack: ["WordPress", "PHP", "Stripe", "MySQL"],
    quickRead:
      "A separate payment authorization system built around expiring links, scheduled emails, and deposit states.",
    bugs:
      "Authorization windows, expired checkout sessions, duplicate emails, and keeping payment states synchronized.",
    lesson:
      "Payment systems are mostly careful state-management systems.",
  },
  {
    id: "saralab-os",
    title: "SaraLab OS",
    roomName: "Control Desk",
    fileNumber: "Build File #003",
    status: "Active",
    description:
      "A browser-based operating system for projects, labs, notebooks, and connected learning.",
    stack: ["Next.js", "TypeScript", "Zustand", "Supabase"],
    quickRead:
      "A personal operating system that turns my learning history into an explorable world.",
    bugs:
      "Window state, draggable layouts, preserving a cohesive visual language, and connecting data without making it feel like a website.",
    lesson:
      "The interface needs a strong mental model before it needs more features.",
  },
];

const issueTrackerSteps = [
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
      <div className="w-[980px] max-w-[84vw]">
        {selectedProject ? (
          <ProjectFile
            project={selectedProject}
            onBack={() => setSelectedProject(null)}
          />
        ) : (
          <GarageFloorPlan onOpenProject={setSelectedProject} />
        )}
      </div>
    </Window>
  );
}

function GarageFloorPlan({
  onOpenProject,
}: {
  onOpenProject: (project: Project) => void;
}) {
  const issueTracker = projects[0];
  const damageDeposit = projects[1];
  const saraLab = projects[2];

  return (
    <section className="relative h-[640px] overflow-hidden rounded-[28px] border border-pink-200 bg-[#fffaf5] shadow-sm">
      <GaragePaper />

      <header className="absolute left-8 right-8 top-7 z-20 flex items-start justify-between border-b border-pink-200/70 pb-5">
        <div>
          <p className="font-hand text-3xl text-pink-600">Sara&apos;s workshop</p>

          <h1 className="mt-1 text-4xl font-bold tracking-tight text-stone-800">
            Project Garage
          </h1>

          <p className="mt-2 text-sm text-stone-500">
            Things I built, broke, repaired, and learned from.
          </p>
        </div>

        <div className="rotate-1 border border-pink-200 bg-white/80 px-4 py-3 shadow-sm">
          <p className="text-xs uppercase tracking-[0.18em] text-pink-500">
            Garage status
          </p>
          <p className="mt-1 font-hand text-2xl text-stone-700">
            3 occupied bays
          </p>
        </div>
      </header>

      <div className="absolute inset-x-8 bottom-7 top-[138px]">
        <div className="relative h-full">
          <GarageBoundary />

          <WorkshopBay
            className="left-[4%] top-[5%] h-[48%] w-[43%]"
            label="Main Workbench"
            project={issueTracker}
            onOpen={() => onOpenProject(issueTracker)}
          >
            <IssueTrackerWorkbench />
          </WorkshopBay>

          <WorkshopBay
            className="right-[4%] top-[4%] h-[46%] w-[40%]"
            label="Control Desk"
            project={saraLab}
            onOpen={() => onOpenProject(saraLab)}
          >
            <SaraLabControlDesk />
          </WorkshopBay>

          <WorkshopBay
            className="bottom-[4%] left-[30%] h-[39%] w-[40%]"
            label="Payment Vault"
            project={damageDeposit}
            onOpen={() => onOpenProject(damageDeposit)}
          >
            <PaymentVault />
          </WorkshopBay>

          <ArchiveDrawer />

          <EmptyBay />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[18px] left-1/2 z-10 -translate-x-1/2 rotate-[-1deg] bg-yellow-100 px-5 py-2 font-hand text-xl text-stone-700 shadow-sm">
        click a workspace to inspect its build file
      </div>
    </section>
  );
}

function GaragePaper() {
  return (
    <>
      <div className="absolute inset-0 bg-[#fffaf5]" />

      <div className="absolute inset-0 bg-[linear-gradient(#f9dbe8_1px,transparent_1px),linear-gradient(90deg,#f9dbe8_1px,transparent_1px)] bg-[size:28px_28px] opacity-45" />

      <div className="absolute left-5 top-0 h-full w-px bg-pink-200/70" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(251,207,232,0.45),transparent_26%),radial-gradient(circle_at_80%_75%,rgba(254,240,138,0.24),transparent_24%)]" />
    </>
  );
}

function GarageBoundary() {
  return (
    <div className="pointer-events-none absolute inset-0 rounded-[30px] border-2 border-dashed border-pink-200/80">
      <span className="absolute -top-3 left-8 bg-[#fffaf5] px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-pink-400">
        garage floor plan · not to scale
      </span>
    </div>
  );
}

function WorkshopBay({
  className,
  label,
  project,
  onOpen,
  children,
}: {
  className: string;
  label: string;
  project: Project;
  onOpen: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group absolute overflow-hidden border border-pink-200 bg-white/65 text-left shadow-[5px_6px_0_rgba(244,114,182,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[9px_10px_0_rgba(244,114,182,0.14)] ${className}`}
    >
      <div className="absolute left-4 top-3 z-20">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-pink-500">
          {label}
        </p>
        <p className="mt-1 font-hand text-2xl text-stone-700">
          {project.title}
        </p>
      </div>

      <div className="absolute right-3 top-3 z-20 rotate-2 border border-pink-200 bg-white px-2 py-1 text-[10px] font-semibold text-pink-600 shadow-sm">
        {project.status}
      </div>

      <div className="absolute inset-x-4 bottom-3 z-20 flex items-end justify-between opacity-0 transition group-hover:opacity-100">
        <div className="max-w-[70%] bg-white/90 px-3 py-2 shadow-sm">
          <p className="text-xs font-semibold text-stone-800">
            {project.fileNumber}
          </p>
          <p className="mt-1 text-[11px] leading-4 text-stone-500">
            {project.description}
          </p>
        </div>

        <span className="font-hand text-xl text-pink-600">enter →</span>
      </div>

      <div className="absolute inset-0 transition duration-300 group-hover:bg-pink-50/25" />

      {children}
    </button>
  );
}

function IssueTrackerWorkbench() {
  return (
    <div className="absolute inset-x-6 bottom-10 top-16">
      <div className="absolute bottom-4 left-[9%] h-[45%] w-[82%] rounded-sm border-2 border-stone-300 bg-[#efd5b3] shadow-md">
        <div className="absolute -bottom-7 left-5 h-8 w-3 bg-stone-400" />
        <div className="absolute -bottom-7 right-5 h-8 w-3 bg-stone-400" />
      </div>

      <div className="absolute left-[13%] top-[12%] h-[36%] w-[40%] rotate-[-4deg] border border-pink-200 bg-white p-3 shadow-sm">
        <p className="text-[9px] font-bold uppercase tracking-widest text-pink-500">
          schema draft
        </p>
        <div className="mt-2 space-y-2">
          <DiagramLine width="80%" />
          <DiagramLine width="55%" />
          <DiagramLine width="72%" />
        </div>
      </div>

      <div className="absolute right-[12%] top-[8%] grid h-[40%] w-[34%] place-items-center rounded-sm border border-stone-300 bg-stone-800 shadow-md">
        <div className="w-[76%]">
          <div className="mb-2 h-2 w-1/2 rounded-full bg-pink-400" />
          <div className="space-y-1.5">
            <div className="h-1.5 rounded-full bg-white/70" />
            <div className="h-1.5 w-[80%] rounded-full bg-white/40" />
            <div className="h-1.5 w-[60%] rounded-full bg-white/40" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-[18%] left-[19%] rotate-2 bg-yellow-100 px-3 py-2 font-hand text-base text-stone-700 shadow-sm">
        auth keeps breaking here
      </div>

      <div className="absolute bottom-[13%] right-[17%] flex gap-2">
        <IssueTicket label="BUG-12" />
        <IssueTicket label="TASK-08" />
      </div>
    </div>
  );
}

function SaraLabControlDesk() {
  return (
    <div className="absolute inset-x-5 bottom-9 top-16">
      <div className="absolute bottom-[10%] left-[7%] h-[32%] w-[86%] rounded-sm border-2 border-stone-300 bg-[#e7c9af] shadow-md" />

      <div className="absolute left-[9%] top-[6%] grid h-[48%] w-[48%] place-items-center rounded-md border-4 border-stone-700 bg-stone-900 shadow-md">
        <div className="relative h-[78%] w-[84%] overflow-hidden bg-gradient-to-br from-pink-100 to-pink-300">
          <div className="absolute left-2 top-2 h-[56%] w-[62%] rounded-sm bg-white/80 shadow-sm" />
          <div className="absolute bottom-2 right-2 h-[35%] w-[48%] rounded-sm bg-stone-900" />
        </div>
      </div>

      <div className="absolute right-[11%] top-[14%] rotate-3 border border-pink-200 bg-white p-3 shadow-sm">
        <Monitor size={20} className="text-pink-500" />
        <p className="mt-2 font-hand text-lg text-stone-700">desktop shell</p>
      </div>

      <div className="absolute bottom-[19%] left-[18%] flex items-center gap-3 rounded-sm bg-stone-800 px-4 py-2 text-white shadow-sm">
        <Terminal size={15} />
        <span className="font-mono text-[10px]">open knowledge</span>
      </div>

      <div className="absolute bottom-[12%] right-[14%]">
        <DatabaseCylinder />
      </div>

      <div className="absolute left-[53%] top-[52%] h-px w-[21%] rotate-[18deg] border-t border-dashed border-pink-400" />
    </div>
  );
}

function PaymentVault() {
  return (
    <div className="absolute inset-x-7 bottom-8 top-14">
      <div className="absolute left-1/2 top-[10%] h-[66%] w-[58%] -translate-x-1/2 rounded-lg border-[6px] border-stone-400 bg-stone-200 shadow-md">
        <div className="absolute inset-4 rounded-md border-2 border-stone-400 bg-stone-100" />

        <div className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-stone-400 bg-white">
          <ShieldCheck size={26} className="text-pink-500" />
        </div>

        <div className="absolute right-3 top-1/2 h-12 w-2 -translate-y-1/2 rounded-full bg-stone-500" />
      </div>

      <div className="absolute bottom-[4%] left-[6%] rotate-[-3deg] bg-white px-3 py-2 shadow-sm">
        <p className="text-[9px] uppercase tracking-widest text-pink-500">
          authorization
        </p>
        <p className="font-hand text-lg text-stone-700">7-day hold</p>
      </div>

      <div className="absolute bottom-[3%] right-[4%] rotate-2 bg-yellow-100 px-3 py-2 shadow-sm">
        <p className="font-hand text-lg text-stone-700">cron sends reminder</p>
      </div>

      <div className="absolute left-[12%] top-[13%]">
        <Vault size={23} className="text-pink-500" />
      </div>
    </div>
  );
}

function ArchiveDrawer() {
  return (
    <div className="absolute bottom-[7%] left-[4%] h-[31%] w-[20%] border border-stone-300 bg-[#e8d5c5] shadow-sm">
      <div className="border-b border-stone-300 px-3 py-2">
        <FolderArchive size={16} className="text-stone-500" />
      </div>

      {["Old portfolio", "Game projects", "Experiments"].map((label) => (
        <div
          key={label}
          className="flex h-[28%] items-center justify-between border-b border-stone-300 px-3 text-[10px] text-stone-500"
        >
          <span>{label}</span>
          <span className="h-1.5 w-6 rounded-full bg-stone-400" />
        </div>
      ))}

      <p className="absolute -top-6 left-1 font-hand text-lg text-stone-500">
        archive drawers
      </p>
    </div>
  );
}

function EmptyBay() {
  return (
    <div className="absolute bottom-[7%] right-[4%] grid h-[31%] w-[20%] place-items-center border-2 border-dashed border-pink-200 bg-white/30">
      <div className="text-center">
        <Cloud size={22} className="mx-auto text-pink-300" />
        <p className="mt-2 font-hand text-xl text-pink-400">empty build bay</p>
        <p className="mt-1 text-[10px] uppercase tracking-widest text-stone-400">
          next experiment
        </p>
      </div>
    </div>
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
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-stone-500 transition hover:text-pink-600"
        >
          <ArrowLeft size={16} />
          Garage floor
        </button>

        <p className="mt-8 font-hand text-3xl text-pink-600">open build file</p>

        <div className="mt-5 border border-pink-200 bg-white p-4 shadow-sm">
          <Wrench size={18} className="text-pink-600" />

          <p className="mt-3 font-semibold text-stone-800">{project.title}</p>

          <p className="mt-1 font-hand text-xl text-pink-500">
            {project.fileNumber}
          </p>
        </div>

        <div className="mt-5 rotate-[-2deg] bg-yellow-100 p-4 font-hand text-xl leading-6 text-stone-700 shadow-sm">
          Currently inspecting:
          <br />
          {project.roomName}
        </div>
      </aside>

      <main className="h-full overflow-y-auto bg-[#fffaf7] p-7">
        <header className="mb-5 border border-pink-100 bg-white p-5 shadow-sm">
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

            <span className="border border-pink-200 bg-pink-50 px-4 py-2 text-xs font-semibold text-pink-600">
              {project.status}
            </span>
          </div>
        </header>

        <section className="relative border border-pink-100 bg-white p-7 shadow-inner">
          <div className="absolute inset-0 bg-[linear-gradient(#fce7f3_1px,transparent_1px),linear-gradient(90deg,#fce7f3_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

          <div className="relative">
            <p className="mb-6 font-hand text-3xl text-pink-600">
              how the machine works
            </p>

            <div className="flex flex-col items-center gap-3">
              {issueTrackerSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.label} className="flex flex-col items-center">
                    <div className="grid w-[310px] grid-cols-[48px_1fr_82px] items-center border border-pink-100 bg-white p-4 shadow-sm">
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
                        className={`px-3 py-1 text-center text-[11px] ${
                          step.status === "active"
                            ? "bg-pink-600 text-white"
                            : "bg-pink-50 text-pink-600"
                        }`}
                      >
                        {step.status}
                      </span>
                    </div>

                    {index < issueTrackerSteps.length - 1 && (
                      <div className="h-8 w-px bg-pink-200" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mt-5 border border-pink-100 bg-white p-5 shadow-sm">
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
        <Scrap title="quick read">{project.quickRead}</Scrap>

        <Scrap title="parts used" yellow>
          {project.stack.join(" · ")}
        </Scrap>

        <Scrap title="bugs fought">{project.bugs}</Scrap>

        <Scrap title="bench note" blue>
          {project.lesson}
        </Scrap>

        <button className="flex w-full items-center justify-between bg-pink-600 px-4 py-3 text-sm font-semibold text-white shadow-sm">
          GitHub
          <GitBranch size={15} />
        </button>

        <button className="flex w-full items-center justify-between bg-pink-100 px-4 py-3 text-sm font-semibold text-pink-700">
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
      className={`rotate-[-1deg] p-4 shadow-sm ${
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

function DiagramLine({ width }: { width: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-2 w-2 rounded-full border border-pink-300" />
      <div className="h-px bg-pink-300" style={{ width }} />
    </div>
  );
}

function IssueTicket({ label }: { label: string }) {
  return (
    <div className="rotate-[-2deg] bg-pink-100 px-2 py-1 text-[9px] font-semibold text-pink-600 shadow-sm">
      {label}
    </div>
  );
}

function DatabaseCylinder() {
  return (
    <div className="relative h-10 w-12">
      <div className="absolute inset-x-0 top-0 h-3 rounded-[50%] border border-pink-400 bg-pink-100" />
      <div className="absolute inset-x-0 bottom-1 top-1 border-x border-pink-400 bg-pink-100" />
      <div className="absolute inset-x-0 bottom-0 h-3 rounded-[50%] border border-pink-400 bg-pink-200" />
    </div>
  );
}
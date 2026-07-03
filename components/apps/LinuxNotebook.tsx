"use client";

import { useState } from "react";
import { BookOpen, FlaskConical, Link2, Pencil, Circle } from "lucide-react";
import Window from "../os/Window";
import { concepts, type Concept } from "@/data/concepts";
import { labs, type Lab } from "@/data/labs";
import {
  relationships,
  type KnowledgeRelationship,
} from "@/data/relationships";

const tabs = ["Today", "Pages", "Labs", "Threads"] as const;

export default function LinuxNotebook() {
  const [activeTab, setActiveTab] =
    useState<(typeof tabs)[number]>("Today");

  const linuxConcepts = concepts.filter((concept) => concept.skillId === "linux");
  const linuxLabs = labs.filter((lab) => lab.skillId === "linux");
  const linuxRelationships = relationships.filter(
    (rel) => rel.source.includes("linux") || rel.target.includes("linux")
  );

  return (
    <Window app="linux" title="Linux Notebook">
      <div className="w-[720px] max-w-[75vw]">
        <section className="relative overflow-hidden rounded-[28px] border border-pink-200 bg-[#fffdf9] shadow-sm">
          <div className="absolute left-14 top-0 h-full w-px bg-pink-200" />

          <div className="relative flex">
            <main className="max-h-[560px] flex-1 overflow-y-auto px-8 py-8 pl-20">
              <header className="border-b border-pink-100 pb-5">
                <p className="font-hand text-2xl text-pink-400">
                  Sara&apos;s study notebook
                </p>

                <h2 className="mt-1 text-3xl font-bold tracking-tight text-stone-800">
                  Linux Notebook
                </h2>

                <p className="mt-2 text-sm text-stone-500">
                  Notes from what I tried, what confused me, and what finally clicked.
                </p>
              </header>

              <div className="mt-6">
                {activeTab === "Today" && <TodayView />}
                {activeTab === "Pages" && <PagesView concepts={linuxConcepts} />}
                {activeTab === "Labs" && <LabsView labs={linuxLabs} />}
                {activeTab === "Threads" && (
                  <ThreadsView relationships={linuxRelationships} />
                )}
              </div>
            </main>

            <aside className="w-[86px] shrink-0 border-l border-pink-100 bg-[#fff7fb] px-2 py-6">
              <div className="flex flex-col gap-3">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-full rounded-xl border px-2 py-3 text-[11px] transition ${
                      activeTab === tab
                        ? "border-pink-300 bg-white text-pink-600 shadow-sm"
                        : "border-pink-100 bg-pink-50 text-stone-500 hover:bg-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-pink-100 bg-white p-2 text-[11px] leading-5 text-stone-500">
                Focus:
                <br />
                <span className="text-stone-700">chmod</span>
                <br />
                <span className="text-stone-700">chown</span>
                <br />
                <span className="text-stone-700">paths</span>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </Window>
  );
}

function TodayView() {
  return (
    <div className="grid grid-cols-[1fr_190px] gap-4">
      <article className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-2 text-sm text-pink-500">
          <Pencil size={15} />
          <span>July 1, 2026</span>
        </div>

        <h3 className="font-hand text-4xl font-semibold leading-9 text-stone-800">
          Permissions finally started making sense.
        </h3>

        <div className="mt-5 space-y-5 font-hand text-2xl leading-8 text-stone-700">
          <NoteBlock
            title="Before"
            text="I thought permissions were only about whether a file opens or does not open."
          />

          <NoteBlock
            title="What clicked"
            text="Linux feels like one big file tree. Permissions decide how users move through that tree."
          />

          <NoteBlock
            title="Mistake"
            text="I mixed up file execute permission with directory execute permission. Directory execute means you can enter or pass through that folder."
          />
        </div>
      </article>

      <aside className="space-y-3">
        <PaperNote
          title="Reminder"
          text="Show the test, not just the topic."
        />

        <PaperNote
          title="Question"
          text="Why does chmod 400 matter for SSH keys?"
          yellow
        />

        <div className="rounded-3xl border border-pink-100 bg-white p-4 shadow-sm">
          <p className="text-sm font-semibold text-stone-800">Pinned pages</p>
          <div className="mt-3 space-y-2 font-hand text-2xl leading-6 text-stone-600">
            <p>Linux Permissions</p>
            <p>Linux File System</p>
          </div>
        </div>
      </aside>
    </div>
  );
}

function PagesView({ concepts }: { concepts: Concept[] }) {
  return (
    <div className="space-y-4">
      {concepts.map((concept) => (
        <div
          key={concept.id}
          className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm"
        >
          <div className="mb-3 flex items-center gap-3">
            <BookOpen size={17} className="text-pink-500" />
            <div>
              <h3 className="font-semibold text-stone-800">{concept.title}</h3>
              <p className="text-xs text-stone-400">{concept.mastery}</p>
            </div>
          </div>

          <p className="text-sm leading-6 text-stone-600">{concept.summary}</p>

          <div className="mt-4 rounded-2xl bg-[#fff8fb] p-3">
            <p className="text-xs uppercase tracking-widest text-pink-400">
              Mental model
            </p>
            <p className="mt-2 font-hand text-2xl leading-7 text-stone-700">
              {concept.mentalModel}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function LabsView({ labs }: { labs: Lab[] }) {
  return (
    <div className="space-y-4">
      {labs.map((lab) => (
        <div
          key={lab.id}
          className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm"
        >
          <h3 className="flex items-center gap-2 font-semibold text-stone-800">
            <FlaskConical size={18} className="text-pink-500" />
            {lab.title}
          </h3>

          <p className="mt-2 font-hand text-2xl leading-7 text-stone-600">
            {lab.goal}
          </p>

          <div className="mt-4 rounded-2xl bg-stone-950 p-4 font-mono text-xs text-pink-100">
            {lab.commands.map((command) => (
              <p key={command}>$ {command}</p>
            ))}
          </div>

          <p className="mt-4 rounded-2xl bg-pink-50 p-4 font-hand text-2xl leading-7 text-stone-700">
            <span className="font-semibold">Takeaway:</span> {lab.takeaway}
          </p>
        </div>
      ))}
    </div>
  );
}

function ThreadsView({
  relationships,
}: {
  relationships: KnowledgeRelationship[];
}) {
  return (
    <div className="space-y-4">
      {relationships.map((rel) => (
        <div
          key={`${rel.source}-${rel.target}`}
          className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm"
        >
          <h3 className="flex items-center gap-2 font-semibold text-stone-800">
            <Link2 size={18} className="text-pink-500" />
            {rel.label}
          </h3>

          <p className="mt-3 font-mono text-sm text-pink-600">
            {rel.source} → {rel.target}
          </p>

          <p className="mt-3 font-hand text-2xl leading-7 text-stone-600">
            {rel.reason}
          </p>
        </div>
      ))}
    </div>
  );
}

function NoteBlock({ title, text }: { title: string; text: string }) {
  return (
    <section>
      <p className="mb-1 flex items-center gap-2 font-bold text-stone-900">
        <Circle size={7} className="fill-pink-400 text-pink-400" />
        {title}
      </p>
      <p>{text}</p>
    </section>
  );
}

function PaperNote({
  title,
  text,
  yellow = false,
}: {
  title: string;
  text: string;
  yellow?: boolean;
}) {
  return (
    <div
      className={`rotate-[-1deg] rounded-2xl p-4 font-hand text-2xl leading-7 shadow-sm ${
        yellow ? "bg-[#fff2bd] text-stone-700" : "bg-pink-100 text-stone-700"
      }`}
    >
      <p className="mb-1 font-semibold text-stone-800">{title}</p>
      <p>{text}</p>
    </div>
  );
}
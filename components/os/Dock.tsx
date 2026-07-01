"use client";

import { Folder, Terminal, Cpu, CalendarDays, FileText } from "lucide-react";
import { useOSStore } from "@/store/os-store";

const dockApps = [
  { name: "Terminal", app: "terminal", icon: Terminal },
  { name: "Linux Lab", app: "linux", icon: Folder },
  { name: "Projects", app: "projects", icon: Cpu },
  { name: "Timeline", app: "timeline", icon: CalendarDays },
  { name: "Resume", app: "resume", icon: FileText },
] as const;

export default function Dock() {
  const openApp = useOSStore((state) => state.openApp);

  return (
    <aside className="fixed left-4 top-20 bottom-6 w-20 rounded-3xl border border-pink-200 bg-white/55 backdrop-blur-xl shadow-xl flex flex-col items-center gap-4 py-5">
      {dockApps.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.app}
            onClick={() => openApp(item.app)}
            className="group flex flex-col items-center gap-1 text-xs text-stone-700"
          >
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-pink-100 text-pink-600 shadow-sm transition group-hover:scale-105 group-hover:bg-pink-200">
              <Icon size={22} />
            </div>
            <span>{item.name}</span>
          </button>
        );
      })}
    </aside>
  );
}
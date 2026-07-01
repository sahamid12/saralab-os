import { Folder, Terminal, Cpu, CalendarDays, FileText } from "lucide-react";
import Dock from "@/components/os/Dock";
import WindowManager from "@/components/os/WindowManager";
const dockApps = [
  { name: "Terminal", icon: Terminal },
  { name: "Linux Lab", icon: Folder },
  { name: "Projects", icon: Cpu },
  { name: "Timeline", icon: CalendarDays },
  { name: "Resume", icon: FileText },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-pink-100 text-stone-800">
      <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#fff7fb,transparent_35%),linear-gradient(135deg,#ffe4ef,#ffd1e3,#fff7fb)]">
        <header className="h-12 border-b border-pink-200/80 bg-white/50 backdrop-blur-xl flex items-center justify-between px-5">
          <div className="font-bold text-pink-700">♥ SaraLab OS</div>
          <div className="text-sm text-pink-700">build. learn. experiment. grow ✨</div>
          <div className="text-sm">11:27 AM</div>
        </header>

        <aside className="fixed left-4 top-20 bottom-6 w-20 rounded-3xl border border-pink-200 bg-white/55 backdrop-blur-xl shadow-xl flex flex-col items-center gap-4 py-5">
          {dockApps.map((app) => {
            const Icon = app.icon;
            return (
              <button
                key={app.name}
                className="group flex flex-col items-center gap-1 text-xs text-stone-700"
              >
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-pink-100 text-pink-600 shadow-sm transition group-hover:scale-105 group-hover:bg-pink-200">
                  <Icon size={22} />
                </div>
                <span>{app.name}</span>
              </button>
            );
          })}
        </aside>

        <section className="pl-32 pt-8 pr-8">
          <Dock />
          <WindowManager />
        </section>
      </div>
    </main>
  );
}
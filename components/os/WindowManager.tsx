"use client";

import { useOSStore } from "@/store/os-store";

import TerminalApp from "../apps/TerminalApp";
import LinuxApp from "../apps/LinuxApp";
import ProjectsApp from "../apps/ProjectsApp";
import TimelineApp from "../apps/TimelineApp";
import ResumeApp from "../apps/ResumeApp";

export default function WindowManager() {
  const openApps = useOSStore((state) => state.openApps);

  return (
    <>
      {openApps.includes("terminal") && <TerminalApp />}
      {openApps.includes("linux") && <LinuxApp />}
      {openApps.includes("projects") && <ProjectsApp />}
      {openApps.includes("timeline") && <TimelineApp />}
      {openApps.includes("resume") && <ResumeApp />}
    </>
  );
}
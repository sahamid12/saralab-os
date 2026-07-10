import { create } from "zustand";

export type AppName =
  | "terminal"
  | "linux"
  | "projects"
  | "timeline"
  | "resume"
  | "capture";

type WindowPosition = {
  x: number;
  y: number;
};

interface OSState {
  openApps: AppName[];
  activeApp: AppName | null;
  positions: Record<AppName, WindowPosition>;
  zIndexes: Record<AppName, number>;
  highestZIndex: number;

  openApp: (app: AppName) => void;
  closeApp: (app: AppName) => void;
  focusApp: (app: AppName) => void;
  moveApp: (app: AppName, position: WindowPosition) => void;
}

export const useOSStore = create<OSState>((set) => ({
  openApps: ["terminal"],
  activeApp: "terminal",
  highestZIndex: 10,

  positions: {
    terminal: { x: 130, y: 90 },
    linux: { x: 700, y: 90 },
    projects: { x: 160, y: 420 },
    timeline: { x: 1070, y: 90 },
    resume: { x: 930, y: 600 },
    capture: { x: 520, y: 180 },
  },

  zIndexes: {
    terminal: 10,
    linux: 10,
    projects: 10,
    timeline: 10,
    resume: 10,
    capture: 10,
  },

  openApp: (app) =>
    set((state) => {
      const nextZ = state.highestZIndex + 1;

      return {
        openApps: state.openApps.includes(app)
          ? state.openApps
          : [...state.openApps, app],
        activeApp: app,
        highestZIndex: nextZ,
        zIndexes: {
          ...state.zIndexes,
          [app]: nextZ,
        },
      };
    }),

  closeApp: (app) =>
    set((state) => {
      const remainingApps = state.openApps.filter((a) => a !== app);

      return {
        openApps: remainingApps,
        activeApp:
          state.activeApp === app
            ? remainingApps[remainingApps.length - 1] ?? null
            : state.activeApp,
      };
    }),

  focusApp: (app) =>
    set((state) => {
      const nextZ = state.highestZIndex + 1;

      return {
        activeApp: app,
        highestZIndex: nextZ,
        zIndexes: {
          ...state.zIndexes,
          [app]: nextZ,
        },
      };
    }),

  moveApp: (app, position) =>
    set((state) => ({
      positions: {
        ...state.positions,
        [app]: position,
      },
    })),
}));
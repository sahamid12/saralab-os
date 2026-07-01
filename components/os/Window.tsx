"use client";

import { useRef, useState } from "react";
import { X } from "lucide-react";
import { AppName, useOSStore } from "@/store/os-store";

interface WindowProps {
  app: AppName;
  title: string;
  children: React.ReactNode;
}

export default function Window({ app, title, children }: WindowProps) {
  const closeApp = useOSStore((state) => state.closeApp);
  const focusApp = useOSStore((state) => state.focusApp);
  const moveApp = useOSStore((state) => state.moveApp);
  const activeApp = useOSStore((state) => state.activeApp);
  const position = useOSStore((state) => state.positions[app]);
  const zIndex = useOSStore((state) => state.zIndexes[app]);

  const isActive = activeApp === app;

  const dragStart = useRef({
    mouseX: 0,
    mouseY: 0,
    windowX: 0,
    windowY: 0,
  });

  const [isDragging, setIsDragging] = useState(false);

  function handleMouseDown(event: React.MouseEvent<HTMLDivElement>) {
    focusApp(app);
    setIsDragging(true);

    dragStart.current = {
      mouseX: event.clientX,
      mouseY: event.clientY,
      windowX: position.x,
      windowY: position.y,
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }

  function handleMouseMove(event: MouseEvent) {
    const deltaX = event.clientX - dragStart.current.mouseX;
    const deltaY = event.clientY - dragStart.current.mouseY;

    moveApp(app, {
      x: dragStart.current.windowX + deltaX,
      y: dragStart.current.windowY + deltaY,
    });
  }

  function handleMouseUp() {
    setIsDragging(false);
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  }

  return (
    <div
      onMouseDown={() => focusApp(app)}
      style={{
        left: position.x,
        top: position.y,
        zIndex,
      }}
      className={`absolute overflow-hidden rounded-3xl border bg-white/80 shadow-2xl backdrop-blur-xl transition
        ${
          isActive
            ? "border-pink-300 ring-2 ring-pink-300/40"
            : "border-pink-100"
        }
        ${isDragging ? "cursor-grabbing scale-[1.01]" : ""}
      `}
    >
      <div
        onMouseDown={handleMouseDown}
        className="flex h-10 cursor-grab items-center justify-between border-b border-pink-100 px-4 active:cursor-grabbing"
      >
        <span className="text-sm font-medium">{title}</span>

        <button
          onMouseDown={(event) => event.stopPropagation()}
          onClick={() => closeApp(app)}
          className="grid h-7 w-7 place-items-center rounded-full bg-pink-100 text-pink-600 transition hover:bg-pink-200"
        >
          <X size={15} />
        </button>
      </div>

      <div className="p-5">{children}</div>
    </div>
  );
}
"use client";

import { useState } from "react";
import Window from "../os/Window";
import { fileSystem, FileSystemItem } from "@/data/filesystem";
import { useOSStore } from "@/store/os-store";

function findFolder(path: string[]): FileSystemItem | null {
  let current: FileSystemItem | undefined = fileSystem;

  for (const segment of path) {
    current = current.children?.find(
      (item) => item.name === segment && item.type === "folder"
    );
    if (!current) return null;
  }

  return current;
}

export default function TerminalApp() {
  const openApp = useOSStore((state) => state.openApp);
  const [path, setPath] = useState<string[]>(["sara"]);
  const [history, setHistory] = useState<string[]>([
    "Welcome to SaraLab OS Terminal 🌸",
    "Type help to see available commands.",
  ]);
  const [input, setInput] = useState("");

  const currentFolder = findFolder(path);

  function runCommand(command: string) {
    const trimmed = command.trim();
    const output: string[] = [`sara@saralab:/${path.join("/")}$ ${trimmed}`];

    if (trimmed === "help") {
      output.push("Commands: help, pwd, ls, cd <folder>, clear");
    } else if (trimmed === "pwd") {
      output.push(`/home/${path.join("/")}`);
    } else if (trimmed === "ls") {
      currentFolder?.children?.forEach((item) => {
        output.push(`${item.type === "folder" ? "📁" : "📄"} ${item.name}`);
      });
    } else if (trimmed.startsWith("cd ")) {
      const folderName = trimmed.replace("cd ", "").trim();

      if (folderName === "..") {
        setPath((prev) => prev.slice(0, -1) || ["sara"]);
        output.push("Moved up one directory.");
      } else {
        const nextFolder = currentFolder?.children?.find(
          (item) => item.name === folderName && item.type === "folder"
        );

        if (nextFolder) {
          setPath((prev) => [...prev, folderName]);
          output.push(`Opened folder: ${folderName}`);
        } else {
          output.push(`Folder not found: ${folderName}`);
        }
      }
      } else if (trimmed.startsWith("open ")) {
  const appName = trimmed.replace("open ", "").trim();

  if (
  appName === "linux" ||
  appName === "projects" ||
  appName === "timeline" ||
  appName === "resume" ||
  appName === "terminal" ||
  appName === "capture"
) {
    openApp(appName);
    output.push(`Opening ${appName}...`);
  } else {
    output.push(`App not found: ${appName}`);
  }
    } else if (trimmed === "clear") {
      setHistory([]);
      setInput("");
      return;
    } else {
      output.push(`Command not found: ${trimmed}`);
    }

    setHistory((prev) => [...prev, ...output]);
    setInput("");
  }

  return (
    <Window app="terminal" title="Terminal">
      <div className="w-[520px] font-mono text-sm">
        <div className="h-[300px] overflow-y-auto rounded-2xl bg-stone-950 p-4 text-pink-100">
          {history.map((line, index) => (
            <p key={index} className="whitespace-pre-wrap">
              {line}
            </p>
          ))}

          <form
            onSubmit={(event) => {
              event.preventDefault();
              runCommand(input);
            }}
            className="mt-2 flex"
          >
            <span className="text-pink-400">
              sara@saralab:/{path.join("/")}$&nbsp;
            </span>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              className="flex-1 bg-transparent text-pink-100 outline-none"
              autoFocus
            />
          </form>
        </div>
      </div>
    </Window>
  );
}
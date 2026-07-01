import Window from "../os/Window";

export default function LinuxApp() {
  return (
    <Window app="linux" title="Linux Lab">
      <div className="w-[500px] font-mono text-sm">
      <p>Linux Commands</p>
      <p>File System</p>
      <p>Permissions</p>
      <p>Networking</p>
      </div>
    </Window>
  );
}
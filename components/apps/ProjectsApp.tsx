import Window from "../os/Window";

export default function ProjectsApp() {
  return (
    <Window app="projects" title="Project Garage">
      <div className="w-[700px] font-mono text-sm">
      <p>SaraLab OS</p>
      <p>Issue Tracker</p>
      <p>Damage Deposit System</p>
      </div>
    </Window>
  );
}
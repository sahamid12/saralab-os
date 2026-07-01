export type Lab = {
  id: string;
  title: string;
  skillId: string;
  conceptIds: string[];
  status: "planned" | "in-progress" | "completed";

  goal: string;
  environment: string;
  steps: string[];
  commands: string[];
  observations: string[];
  mistakes: string[];
  takeaway: string;

  date: string;
};

export const labs: Lab[] = [
  {
    id: "linux-permission-lab",
    title: "Linux Permission Lab",
    skillId: "linux",
    conceptIds: ["linux-permissions", "linux-filesystem"],
    status: "completed",
    goal: "Understand how chmod, chown, and Linux permission bits work.",
    environment: "Local terminal / Linux practice environment",
    steps: [
      "Created test files and folders.",
      "Checked permissions using ls -l.",
      "Changed permissions using chmod.",
      "Compared 644, 755, and 777.",
    ],
    commands: ["touch test.txt", "ls -l", "chmod 644 test.txt", "chmod 755 test.txt"],
    observations: [
      "File and folder permissions behave differently.",
      "Execute permission on folders controls access into the folder.",
    ],
    mistakes: [
      "I originally thought execute only meant running a script.",
    ],
    takeaway:
      "Linux permissions are not just about opening files; they control how users interact with files and directories.",
    date: "2026-07-01",
  },
];
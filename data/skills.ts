export type SkillLevel = "learning" | "practicing" | "confident" | "applied";

export type Skill = {
  id: string;
  name: string;
  level: SkillLevel;
  description: string;
  concepts: string[];
  labsCompleted: number;
  projectsUsed: number;
};

export const skills: Skill[] = [
  {
    id: "linux",
    name: "Linux",
    level: "practicing",
    description: "Command line, file system, permissions, processes, and shell basics.",
    concepts: ["Shell", "File System", "Permissions", "Processes", "Users & Groups"],
    labsCompleted: 6,
    projectsUsed: 2,
  },
  {
    id: "networking",
    name: "Networking",
    level: "learning",
    description: "TCP/IP, DNS, ports, routing, HTTP, and troubleshooting.",
    concepts: ["TCP/IP", "DNS", "HTTP", "Ports", "Routing"],
    labsCompleted: 3,
    projectsUsed: 1,
  },
  {
    id: "aws",
    name: "AWS",
    level: "learning",
    description: "Cloud fundamentals, EC2, S3, IAM, VPC, and deployment concepts.",
    concepts: ["EC2", "S3", "IAM", "VPC", "CloudWatch"],
    labsCompleted: 2,
    projectsUsed: 1,
  },
  {
    id: "security",
    name: "Security",
    level: "learning",
    description: "Access control, IAM, safe lab notes, and security fundamentals.",
    concepts: ["IAM", "Least Privilege", "Authentication", "Authorization"],
    labsCompleted: 2,
    projectsUsed: 1,
  },
  {
    id: "devops",
    name: "DevOps",
    level: "learning",
    description: "Docker, CI/CD, deployment pipelines, and infrastructure thinking.",
    concepts: ["Docker", "CI/CD", "GitHub Actions", "Containers"],
    labsCompleted: 1,
    projectsUsed: 1,
  },
];
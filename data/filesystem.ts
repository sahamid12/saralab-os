export type FileSystemItem = {
  name: string;
  type: "folder" | "file";
  description?: string;
  children?: FileSystemItem[];
};

export const fileSystem: FileSystemItem = {
  name: "home",
  type: "folder",
  children: [
    {
      name: "sara",
      type: "folder",
      children: [
        {
          name: "linux",
          type: "folder",
          description: "Linux commands, permissions, processes, and labs.",
          children: [
            { name: "permissions.md", type: "file", description: "chmod, chown, users and groups." },
            { name: "networking.md", type: "file", description: "ip, ping, curl, netstat, ss." },
          ],
        },
        {
          name: "networking",
          type: "folder",
          description: "Networking concepts visualized as a city.",
          children: [
            { name: "tcp-ip.md", type: "file", description: "TCP/IP model and packets." },
            { name: "dns.md", type: "file", description: "How DNS resolves names." },
          ],
        },
        {
          name: "aws",
          type: "folder",
          description: "Cloud learning logs and AWS architecture notes.",
          children: [
            { name: "ec2.md", type: "file", description: "Virtual servers in AWS." },
            { name: "s3.md", type: "file", description: "Object storage basics." },
          ],
        },
        {
          name: "security",
          type: "folder",
          description: "Security notes, vaults, and safe lab logs.",
          children: [
            { name: "iam.md", type: "file", description: "Identity and access basics." },
          ],
        },
        {
          name: "projects",
          type: "folder",
          description: "Project garage and case studies.",
          children: [
            { name: "saralab-os.md", type: "file", description: "The OS portfolio itself." },
            { name: "issue-tracker.md", type: "file", description: "Full-stack issue tracker." },
          ],
        },
        {
          name: "notes",
          type: "folder",
          description: "Raw learning notes and ideas.",
          children: [
            { name: "ideas.md", type: "file", description: "Future ideas for SaraLab OS." },
          ],
        },
      ],
    },
  ],
};
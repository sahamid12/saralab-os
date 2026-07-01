export type MasteryLevel = "introduced" | "practicing" | "applied" | "confident";

export type Concept = {
  id: string;
  title: string;
  skillId: string;
  mastery: MasteryLevel;
  progress: number;

  summary: string;
  mentalModel: string;

  commands?: string[];
  mistakes?: string[];
  labs?: string[];
  projects?: string[];
  relatedConcepts?: string[];
};

export const concepts: Concept[] = [
  {
    id: "linux-permissions",
    title: "Linux Permissions",
    skillId: "linux",
    mastery: "practicing",
    progress: 65,
    summary:
      "Understanding how Linux controls access to files and folders using users, groups, and permission bits.",
    mentalModel:
      "Every file has an owner, a group, and permission rules for owner, group, and others. chmod changes the rules, while chown changes who owns the file.",
    commands: ["ls -l", "chmod", "chown", "groups", "whoami"],
    mistakes: [
      "At first I thought chmod only made files readable or unreadable, but it actually controls read, write, and execute separately.",
      "I confused file permissions with folder permissions.",
    ],
    labs: ["Created test files and changed permissions using chmod.", "Compared 644, 755, and 777."],
    projects: ["SaraLab OS"],
    relatedConcepts: ["linux-users-groups", "linux-filesystem"],
  },

  {
    id: "linux-filesystem",
    title: "Linux File System",
    skillId: "linux",
    mastery: "practicing",
    progress: 60,
    summary:
      "Understanding how Linux organizes files, directories, paths, and system folders.",
    mentalModel:
      "Linux is like one big tree starting at /. Everything, including devices and users’ files, lives somewhere inside that tree.",
    commands: ["pwd", "ls", "cd", "mkdir", "touch", "rm", "cp", "mv"],
    mistakes: [
      "I used to think /home was the root of Linux, but / is the actual root.",
    ],
    labs: ["Practiced navigating directories from terminal.", "Created and removed files/folders safely."],
    projects: ["SaraLab OS terminal filesystem"],
    relatedConcepts: ["linux-permissions"],
  },

  {
    id: "networking-dns",
    title: "DNS",
    skillId: "networking",
    mastery: "introduced",
    progress: 45,
    summary:
      "Understanding how domain names are translated into IP addresses.",
    mentalModel:
      "DNS is like the internet’s contact list. You ask for a name, and DNS helps find the address behind it.",
    commands: ["nslookup", "dig", "ping"],
    mistakes: [
      "I first thought DNS directly connects users to websites, but it mainly resolves names to addresses.",
    ],
    labs: ["Looked up domain records using terminal commands."],
    projects: ["Networking City"],
    relatedConcepts: ["networking-http", "aws-route53"],
  },

  {
    id: "networking-http",
    title: "HTTP",
    skillId: "networking",
    mastery: "introduced",
    progress: 40,
    summary:
      "Understanding how browsers and servers communicate through requests and responses.",
    mentalModel:
      "HTTP is like a conversation: the client asks for something, and the server replies with status, headers, and content.",
    commands: ["curl", "curl -I"],
    mistakes: [
      "I used to focus only on the webpage, not the request/response happening behind it.",
    ],
    labs: ["Used curl to inspect server responses."],
    projects: ["Web development projects"],
    relatedConcepts: ["networking-dns"],
  },

  {
    id: "aws-ec2",
    title: "AWS EC2",
    skillId: "aws",
    mastery: "introduced",
    progress: 35,
    summary:
      "Understanding EC2 as virtual servers running in AWS.",
    mentalModel:
      "EC2 is like renting a computer in the cloud. You choose its size, operating system, network rules, and how it is accessed.",
    commands: ["ssh", "chmod 400 key.pem"],
    mistakes: [
      "I initially saw EC2 as just a hosting button, but it is really a configurable virtual machine.",
    ],
    labs: ["Connected to an EC2 instance using SSH."],
    projects: ["AWS Cloud Console"],
    relatedConcepts: ["linux-permissions", "networking-ssh"],
  },

  {
    id: "aws-s3",
    title: "AWS S3",
    skillId: "aws",
    mastery: "introduced",
    progress: 30,
    summary:
      "Understanding S3 as object storage for files, assets, backups, and static hosting.",
    mentalModel:
      "S3 is not a normal folder system. It stores objects in buckets, and each object has a key.",
    commands: [],
    mistakes: [
      "I first thought S3 was exactly like Google Drive, but it works more like object storage with permissions and policies.",
    ],
    labs: ["Created buckets and explored object permissions."],
    projects: ["AWS Cloud Console"],
    relatedConcepts: ["aws-iam"],
  },

  {
    id: "aws-iam",
    title: "AWS IAM",
    skillId: "aws",
    mastery: "introduced",
    progress: 35,
    summary:
      "Understanding how AWS manages users, roles, permissions, and access policies.",
    mentalModel:
      "IAM is the security desk of AWS. It decides who can do what, on which resource, and under what conditions.",
    commands: [],
    mistakes: [
      "I used to think permissions were only attached to users, but roles and policies are a major part of AWS access.",
    ],
    labs: ["Compared users, groups, roles, and policies."],
    projects: ["Security Vault", "AWS Cloud Console"],
    relatedConcepts: ["security-least-privilege", "aws-s3"],
  },

  {
    id: "security-least-privilege",
    title: "Least Privilege",
    skillId: "security",
    mastery: "introduced",
    progress: 40,
    summary:
      "Understanding the security principle of giving only the minimum access needed.",
    mentalModel:
      "Least privilege is like giving someone only the key to the one room they need, not the whole building.",
    commands: [],
    mistakes: [
      "I used to think admin access was easier, but it creates unnecessary risk.",
    ],
    labs: ["Reviewed permission examples and identified overly broad access."],
    projects: ["Security Vault"],
    relatedConcepts: ["aws-iam"],
  },
];
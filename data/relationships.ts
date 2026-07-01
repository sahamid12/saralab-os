export type KnowledgeRelationship = {
  source: string;
  target: string;
  label: string;
  reason: string;
};

export const relationships: KnowledgeRelationship[] = [
  {
    source: "linux-permissions",
    target: "aws-iam",
    label: "access control",
    reason:
      "Linux permissions and AWS IAM both control who can access what.",
  },
  {
    source: "linux-filesystem",
    target: "linux-permissions",
    label: "depends on",
    reason:
      "Permissions make more sense once the Linux file system structure is understood.",
  },
  {
    source: "networking-dns",
    target: "aws-ec2",
    label: "connects to",
    reason:
      "DNS helps map readable domain names to servers such as EC2 instances.",
  },
];
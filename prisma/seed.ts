import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});
async function main() {
  const linux = await prisma.skill.create({
    data: {
      slug: "linux",
      name: "Linux",
      description: "Linux, shell, permissions, filesystem and server fundamentals.",
    },
  });

  const permissions = await prisma.concept.create({
    data: {
      slug: "linux-permissions",
      title: "Linux Permissions",
      summary:
        "Understanding ownership, users, groups and permission bits.",
      mentalModel:
        "Every file has an owner, a group and permission rules.",
      progress: 65,
      mastery: "Practicing",
      skillId: linux.id,
    },
  });

  const filesystem = await prisma.concept.create({
    data: {
      slug: "linux-filesystem",
      title: "Linux File System",
      summary:
        "Understanding folders, paths and how Linux organizes everything.",
      mentalModel:
        "Linux is one giant tree rooted at /.",
      progress: 60,
      mastery: "Practicing",
      skillId: linux.id,
    },
  });

  await prisma.lab.create({
    data: {
      title: "Permission Playground",
      goal: "Experiment with chmod and ownership.",
      commands: [
        "touch test.txt",
        "chmod 600 test.txt",
        "ls -l",
      ],
      observations: [
        "Permissions changed immediately.",
      ],
      mistakes: [
        "Confused file execute with directory execute.",
      ],
      takeaway:
        "chmod changes access rules, chown changes ownership.",
      status: "completed",
      skillId: linux.id,
    },
  });

  await prisma.relationship.create({
    data: {
      source: "linux-permissions",
      target: "aws-iam",
      label: "Access Control",
      reason:
        "Linux permissions and IAM both control who can access resources.",
    },
  });

  await prisma.journalEntry.create({
    data: {
      title: "Permissions finally clicked",
      before:
        "I thought permissions were just about opening files.",
      clicked:
        "Linux permissions control movement through the filesystem.",
      mistake:
        "Mixed up file execute and directory execute.",
      question:
        "Why does chmod 400 matter for SSH keys?",
      takeaway:
        "Permissions are really access rules.",
      skillId: linux.id,
      conceptId: permissions.id,
    },
  });

  console.log("Seed complete.");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
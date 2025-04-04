import { PrismaClient } from "../../node_modules/.prisma/client/index";

export default function Home() {
  const prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"],
  });

  console.log("prisma", prisma);

  return <div>Home</div>;
}

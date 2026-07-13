import { createFileRoute } from "@tanstack/react-router";
import Portfolio from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abiroy Karmakar — Aspiring Software Engineer" },
      { name: "description", content: "Computer Science student & aspiring Software Engineer. Explore projects, skills, and the journey of Abiroy Karmakar." },
      { property: "og:title", content: "Abiroy Karmakar — Aspiring Software Engineer" },
      { property: "og:description", content: "Portfolio of Abiroy Karmakar — Computer Science student passionate about software engineering, problem-solving, and building impactful digital solutions." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

import type { ImageProps } from "next/image";

export type Project = {
  /** Shown as the card heading, and used as the list key. Keep it unique. */
  name: string;
  description: string;
  /** Demo still or GIF. A static `import` gives the best results. */
  demo: ImageProps["src"];
  /** What the demo shows, for screen readers. */
  demoAlt: string;
  /** Live deployment. Omit if there isn't one. */
  liveUrl?: string;
  /** Source repository. Omit if the project is private. */
  repoUrl?: string;
  /** Tech used, in the order you want it displayed. */
  tags?: string[];
};

export const projects: Project[] = [
  {
    name: "Project Name",
    description:
      "A short description of what this project does and what you built it with. Two sentences is plenty.",
    demo: "/projects/placeholder.svg",
    demoAlt: "Placeholder demo image",
    liveUrl: "",
    repoUrl: "",
    tags: ["Tech", "Tech", "Tech"],
  },
];

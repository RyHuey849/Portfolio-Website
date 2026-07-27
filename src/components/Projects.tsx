import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    name: "Project Name",
    description:
      "A short description of what this project does and what you built it with. Two sentences is plenty.",
    demo: "/projects/placeholder.svg",
    demoAlt: "Placeholder demo image",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto flex w-full max-w-5xl scroll-mt-16 flex-col px-6 py-24"
    >
      <h2
        id="projects-heading"
        className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-5xl"
      >
        Projects
      </h2>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.name}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
}

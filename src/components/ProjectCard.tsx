import Image, { type ImageProps } from "next/image";

type ProjectCardProps = {
  name: string;
  description: string;
  /** Demo still or GIF. A static `import` gives the best results. */
  demo: ImageProps["src"];
  /** What the demo shows, for screen readers. */
  demoAlt: string;
};

/** Unwraps the underlying file path from a string src or a static import. */
function resolveSrc(demo: ImageProps["src"]): string {
  if (typeof demo === "string") return demo;
  if ("default" in demo) return demo.default.src;
  return demo.src;
}

export default function ProjectCard({
  name,
  description,
  demo,
  demoAlt,
}: ProjectCardProps) {
  // The optimizer would flatten an animated file to its first frame.
  const isAnimated = /\.(gif|apng)$/i.test(resolveSrc(demo));

  return (
    <article className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-black/[.08] transition-colors hover:border-black/[.18] dark:border-white/[.145] dark:hover:border-white/[.25]">
      <div className="relative aspect-video w-full border-b border-black/[.08] bg-[#f2f2f2] dark:border-white/[.145] dark:bg-[#1a1a1a]">
        <Image
          src={demo}
          alt={demoAlt}
          fill
          unoptimized={isAnimated}
          sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-2 p-5">
        <h3 className="text-lg font-semibold tracking-tight text-black dark:text-zinc-50">
          {name}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </div>
    </article>
  );
}

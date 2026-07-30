export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-32 text-center sm:items-start sm:text-left"
    >
      <h1 className="text-5xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-6xl">
        Ryan Huey
      </h1>

      <p className="mt-6 max-w-2xl text-balance text-xl font-medium leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-2xl">
        Software engineer moving into IT. I build web applications, and I am
        happiest in the layer underneath them — systems, networks, and the
        infrastructure that keeps everything running. Currently looking for an
        IT role.
      </p>

      <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <a
          href=""
          className="flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          View Work
        </a>

        <a
          href=""
          className="flex h-11 items-center justify-center rounded-full border border-black/[.08] px-6 text-sm font-medium text-black transition-colors hover:border-transparent hover:bg-[#f2f2f2] dark:border-white/[.145] dark:text-zinc-50 dark:hover:bg-[#1a1a1a]"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

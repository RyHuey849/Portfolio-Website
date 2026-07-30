import Image from "next/image";

const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "Java",
  "Python",
  "PHP",
  "SQL",
  "React.js",
  "Vue.js",
  "Laravel",
  "Node.js",
  "Spring Boot",
  "Jest",
  "Selenium",
  "MySQL",
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto flex w-full max-w-5xl scroll-mt-16 flex-col px-6 py-24"
    >
      <h2
        id="about-heading"
        className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-5xl"
      >
        About
      </h2>

      <div className="mt-12 grid gap-10 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] sm:gap-12">
        <div className="relative aspect-square w-full max-w-56 overflow-hidden rounded-xl border border-black/[.08] bg-[#f2f2f2] dark:border-white/[.145] dark:bg-[#1a1a1a]">
          <Image
            src="/about/portrait.svg"
            alt="Placeholder portrait"
            fill
            sizes="(min-width: 640px) 224px, 224px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col">
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            I started out as a software engineer, writing and shipping web
            applications. Over time I noticed the work I actually looked forward
            to was everything around the code — tracking down why a deployment
            broke, untangling a network issue, getting a machine back to a state
            people could work on. So I am making the move into IT on purpose,
            not as a fallback.
          </p>

          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Engineering gave me a head start on the parts of IT that trip people
            up: reading logs instead of guessing, scripting the task I would
            otherwise repeat fifty times, and explaining a fix to someone who
            does not care how it works, only that it does. I am looking for a
            support, systems, or infrastructure role on a team that likes
            problems solved at the root. If that sounds like your team, get in
            touch below.
          </p>

          <h3 className="mt-10 text-sm font-semibold uppercase tracking-wide text-black dark:text-zinc-50">
            Skills
          </h3>

          <ul className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="rounded-full border border-black/[.08] px-3 py-1 text-sm font-medium text-zinc-600 dark:border-white/[.145] dark:text-zinc-400"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

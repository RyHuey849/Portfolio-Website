import Image from "next/image";

type SocialLink = {
  label: string;
  href: string;
  /** Monochrome icon rendered in place of the label. Black fill, inverted in dark mode. */
  icon?: string;
};

const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "", icon: "/icons/github.svg" },
  { label: "LinkedIn", href: "", icon: "/icons/linkedin.svg" },
  { label: "Email", href: "" },
];

export default function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-black/[.08] dark:border-white/[.145]">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row sm:gap-4">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} Ryan Huey
        </p>

        <ul className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <li key={link.label}>
              {link.icon ? (
                <a
                  href={link.href}
                  className="flex items-center opacity-60 transition-opacity hover:opacity-100"
                >
                  <Image
                    src={link.icon}
                    alt={link.label}
                    width={20}
                    height={20}
                    className="dark:invert"
                  />
                </a>
              ) : (
                <a
                  href={link.href}
                  className="text-sm font-medium text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

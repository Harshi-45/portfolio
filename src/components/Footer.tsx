import { site } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:justify-between">
        <p>
          &copy; {year} {site.name}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-emerald-400"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-emerald-400"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-emerald-400"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

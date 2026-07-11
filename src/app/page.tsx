import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { site, skills, experience, projects } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pb-20 pt-20 sm:pt-28">
        <p className="font-mono text-sm text-emerald-400">
          Hi, I&apos;m {site.name.split(" ")[0]}
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
          {site.title} crafting reliable backend systems.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-slate-400">
          {site.bio}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#projects"
            className="rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-950 transition-colors hover:bg-emerald-400"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-emerald-400 hover:text-emerald-400"
          >
            Get in Touch
          </a>
          <a
            href={site.resumeUrl}
            className="rounded-md border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-emerald-400 hover:text-emerald-400"
          >
            Resume
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16">
        <SectionHeading eyebrow="01. About" title="A little about me" />
        <p className="max-w-3xl leading-relaxed text-slate-400">
          {site.bio}
        </p>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16"
      >
        <SectionHeading eyebrow="02. Skills" title="What I work with" />
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-slate-800 bg-slate-900/50 p-5"
            >
              <h3 className="mb-3 text-sm font-semibold text-slate-200">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16"
      >
        <SectionHeading eyebrow="03. Experience" title="Where I've worked" />
        <div className="space-y-8">
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.role}`}
              className="rounded-lg border border-slate-800 bg-slate-900/50 p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-100">
                  {job.role} · {job.company}
                </h3>
                <span className="font-mono text-xs text-slate-500">
                  {job.period}
                </span>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-400">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16"
      >
        <SectionHeading eyebrow="04. Projects" title="Things I've built" />
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="flex flex-col rounded-lg border border-slate-800 bg-slate-900/50 p-6"
            >
              <span className="mb-2 w-fit rounded-full border border-emerald-800 bg-emerald-950 px-2.5 py-0.5 text-xs text-emerald-400">
                {project.type}
              </span>
              <h3 className="text-lg font-semibold text-slate-100">
                {project.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                {project.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-800 px-2.5 py-1 text-xs text-slate-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16"
      >
        <SectionHeading eyebrow="05. Contact" title="Let's work together" />
        <p className="max-w-xl leading-relaxed text-slate-400">
          I&apos;m open to backend engineering opportunities and
          collaborations. The best way to reach me is by email.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className="rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-950 transition-colors hover:bg-emerald-400"
          >
            {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-emerald-400 hover:text-emerald-400"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-emerald-400 hover:text-emerald-400"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-10 text-sm text-slate-500">
          Also check out my{" "}
          <Link href="/blog" className="text-emerald-400 hover:underline">
            blog
          </Link>{" "}
          for technical writing.
        </p>
      </section>
    </>
  );
}

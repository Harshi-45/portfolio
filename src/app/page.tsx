import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { site, skills, experience, projects } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      {/* About */}
      <RevealGroup
        id="about"
        className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16"
      >
        <RevealItem>
          <SectionHeading eyebrow="01. About" title="A little about me" />
          <p className="max-w-3xl leading-relaxed text-slate-400">
            {site.bio}
          </p>
        </RevealItem>
      </RevealGroup>

      {/* Skills */}
      <RevealGroup
        id="skills"
        className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16"
      >
        <RevealItem>
          <SectionHeading eyebrow="02. Skills" title="What I work with" />
        </RevealItem>
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <RevealItem
              key={group.category}
              className="glass glass-hover rounded-xl p-5"
            >
              <h3 className="mb-3 text-sm font-semibold text-slate-200">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700/80 bg-slate-900/40 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </RevealItem>
          ))}
        </div>
      </RevealGroup>

      {/* Experience */}
      <RevealGroup
        id="experience"
        className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16"
      >
        <RevealItem>
          <SectionHeading eyebrow="03. Experience" title="Where I've worked" />
        </RevealItem>
        <div className="relative space-y-8 border-l border-slate-800 pl-8">
          {experience.map((job) => (
            <RevealItem
              key={`${job.company}-${job.role}`}
              className="glass glass-hover relative rounded-xl p-6"
            >
              <span className="absolute -left-[38.5px] top-7 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_3px_rgba(16,185,129,0.6)]" />
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
            </RevealItem>
          ))}
        </div>
      </RevealGroup>

      {/* Projects */}
      <RevealGroup
        id="projects"
        className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16"
      >
        <RevealItem>
          <SectionHeading eyebrow="04. Projects" title="Things I've built" />
        </RevealItem>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <RevealItem
              key={project.slug}
              className="glass glass-hover flex flex-col rounded-xl p-6"
            >
              <span className="mb-2 w-fit rounded-full border border-emerald-800/60 bg-emerald-950/60 px-2.5 py-0.5 text-xs text-emerald-300">
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
                    className="rounded-full bg-slate-800/70 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </RevealItem>
          ))}
        </div>
      </RevealGroup>

      {/* Contact */}
      <RevealGroup
        id="contact"
        className="mx-auto max-w-5xl scroll-mt-24 px-6 py-16"
      >
        <RevealItem>
          <SectionHeading eyebrow="05. Contact" title="Let's work together" />
          <div className="glass rounded-2xl p-8">
            <p className="max-w-xl leading-relaxed text-slate-400">
              I&apos;m open to backend engineering opportunities and
              collaborations. The best way to reach me is by email.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className="glow-btn rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950"
              >
                {site.email}
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="glass glass-hover rounded-md px-5 py-2.5 text-sm font-medium text-slate-200"
              >
                GitHub
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass glass-hover rounded-md px-5 py-2.5 text-sm font-medium text-slate-200"
              >
                LinkedIn
              </a>
            </div>
            <p className="mt-8 text-sm text-slate-500">
              Also check out my{" "}
              <Link
                href="/blog"
                className="text-emerald-400 hover:underline"
              >
                blog
              </Link>{" "}
              for technical writing.
            </p>
          </div>
        </RevealItem>
      </RevealGroup>
    </>
  );
}

import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import { site, skills, experience, projects } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />

      {/* About */}
      <RevealGroup
        id="about"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
      >
        <RevealItem>
          <SectionHeading eyebrow="01 · About" title="A little about me" />
          <p className="max-w-3xl text-lg leading-relaxed text-slate-300/90">
            {site.bio}
          </p>
        </RevealItem>
      </RevealGroup>

      {/* Skills */}
      <RevealGroup
        id="skills"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
      >
        <RevealItem>
          <SectionHeading eyebrow="02 · Skills" title="What I work with" />
        </RevealItem>
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <RevealItem key={group.category}>
              <TiltCard className="glow-border card-hover glass h-full rounded-2xl p-6">
                <h3 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </RevealItem>
          ))}
        </div>
      </RevealGroup>

      {/* Experience */}
      <RevealGroup
        id="experience"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
      >
        <RevealItem>
          <SectionHeading eyebrow="03 · Experience" title="Where I've worked" />
        </RevealItem>
        <div className="relative space-y-8 border-l border-white/10 pl-8">
          {experience.map((job) => (
            <RevealItem key={`${job.company}-${job.role}`}>
              <div className="relative">
                <span className="absolute -left-[38.5px] top-7 h-3 w-3 rounded-full bg-fuchsia-400 shadow-[0_0_14px_4px_rgba(217,70,239,0.6)]" />
                <TiltCard className="glow-border card-hover glass rounded-2xl p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-white">
                      {job.role} · {job.company}
                    </h3>
                    <span className="font-mono text-xs text-slate-400">
                      {job.period}
                    </span>
                  </div>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300/90">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </TiltCard>
              </div>
            </RevealItem>
          ))}
        </div>
      </RevealGroup>

      {/* Projects */}
      <RevealGroup
        id="projects"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
      >
        <RevealItem>
          <SectionHeading eyebrow="04 · Projects" title="Things I've built" />
        </RevealItem>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <RevealItem key={project.slug}>
              <TiltCard className="glow-border card-hover glass flex h-full flex-col rounded-2xl p-7">
                <span className="pill-badge mb-3 w-fit rounded-full px-3 py-1 text-xs text-fuchsia-200">
                  {project.type}
                </span>
                <h3 className="text-lg font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300/90">
                  {project.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </RevealItem>
          ))}
        </div>
      </RevealGroup>

      {/* Contact */}
      <RevealGroup
        id="contact"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
      >
        <RevealItem>
          <SectionHeading eyebrow="05 · Contact" title="Let's work together" />
          <div className="glow-border glass rounded-3xl p-10">
            <p className="max-w-xl text-lg leading-relaxed text-slate-300/90">
              I&apos;m open to backend engineering opportunities and
              collaborations. The best way to reach me is by email.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href={`mailto:${site.email}`}
                className="btn-primary rounded-full px-7 py-3.5 text-sm font-semibold text-white"
              >
                {site.email}
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost glass rounded-full px-7 py-3.5 text-sm font-semibold text-slate-100"
              >
                GitHub
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost glass rounded-full px-7 py-3.5 text-sm font-semibold text-slate-100"
              >
                LinkedIn
              </a>
            </div>
            <p className="mt-9 text-sm text-slate-400">
              Also check out my{" "}
              <Link
                href="/blog"
                className="text-fuchsia-300 hover:underline"
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

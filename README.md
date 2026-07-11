# Hari Prasath S — Portfolio

Personal portfolio site built with Next.js (App Router, static export) and Tailwind CSS, deployed to GitHub Pages.

## Stack

- Next.js 16 (static export via `output: "export"`)
- Tailwind CSS 4
- Markdown blog (`content/blog/*.md`, parsed with `gray-matter` + `remark`)
- Deployed via GitHub Actions to GitHub Pages

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Adding a blog post

Add a new `.md` file to `content/blog/` with frontmatter:

```md
---
title: "Post title"
date: "2026-07-11"
excerpt: "One-sentence summary shown on the blog index."
tags: ["Java", "Spring Boot"]
---

Post content in Markdown.
```

It will automatically appear on `/blog`, sorted by date.

## Editing content

Site copy (name, bio, skills, experience, projects, links) lives in [src/lib/data.ts](src/lib/data.ts) — edit that file to update the site. Several fields are marked `TODO:` and should be filled in (company name, employment dates, project details).

## Resume

Drop your resume PDF at `public/resume.pdf` — the "Resume" button on the homepage already links to it.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static export and publishes it to GitHub Pages.

One-time setup in the GitHub repo: **Settings → Pages → Source → GitHub Actions**.

The site is configured for a project repo at `https://harshi-45.github.io/portfolio/` (see `basePath` in [next.config.ts](next.config.ts)). If the repo is ever renamed, update `repoName` there and the URL in `metadataBase` in [src/app/layout.tsx](src/app/layout.tsx) to match.

## Build locally

```bash
npm run build
```

Static output is generated in `out/`.

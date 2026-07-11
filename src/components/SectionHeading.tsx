export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <span className="pill-badge inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-fuchsia-200">
        <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 shadow-[0_0_10px_3px_rgba(217,70,239,0.6)]" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

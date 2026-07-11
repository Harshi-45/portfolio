export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="flex items-center gap-2 font-mono text-sm text-emerald-400">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(16,185,129,0.6)]" />
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-slate-100 sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

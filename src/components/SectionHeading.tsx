export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="font-mono text-sm text-emerald-400">{eyebrow}</p>
      <h2 className="mt-1 text-2xl font-semibold text-slate-100 sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

export default function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-grid"
    >
      <div className="orb orb-emerald left-[-10%] top-[-10%] h-[420px] w-[420px]" />
      <div className="orb orb-cyan right-[-8%] top-[15%] h-[380px] w-[380px]" />
      <div className="orb orb-violet bottom-[-15%] left-[20%] h-[460px] w-[460px]" />
    </div>
  );
}

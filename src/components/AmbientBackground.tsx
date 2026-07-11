export default function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#030014]"
    >
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div
        className="mesh absolute inset-x-0 top-0 h-[900px] opacity-80"
        style={{
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, black 35%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 0%, black 35%, transparent 100%)",
        }}
      >
        <div className="mesh-blob mesh-blob-1 left-[-10%] top-[-15%] h-[560px] w-[560px]" />
        <div className="mesh-blob mesh-blob-2 right-[-12%] top-[-5%] h-[520px] w-[520px]" />
        <div className="mesh-blob mesh-blob-3 left-[25%] top-[10%] h-[480px] w-[480px]" />
        <div className="mesh-blob mesh-blob-4 right-[15%] top-[25%] h-[420px] w-[420px]" />
      </div>
      <div
        className="mesh absolute inset-x-0 bottom-0 h-[600px] opacity-40"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 100%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 100%, black 30%, transparent 100%)",
        }}
      >
        <div className="mesh-blob mesh-blob-3 left-[10%] bottom-[-10%] h-[420px] w-[420px]" />
        <div className="mesh-blob mesh-blob-1 right-[5%] bottom-[-15%] h-[460px] w-[460px]" />
      </div>
    </div>
  );
}

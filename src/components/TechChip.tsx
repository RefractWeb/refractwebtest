"use client";

interface TechChipProps {
  mousePosition: { x: number; y: number };
}

export const TechChip = ({ mousePosition }: TechChipProps) => {
  return (
    <div
      className="relative w-75 h-75 lg:w-100 lg:h-100 transition-transform duration-200 ease-out"
      style={{
        transform: `rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * -5}deg) translateZ(20px)`,
      }}
    >
      <div className="absolute inset-0 bg-primary2 rounded-[40px] opacity-10 blur-[80px] animate-pulse" />
      <div className="relative w-full h-full bg-linear-to-br from-card to-background rounded-[40px] border border-border shadow-2xl overflow-hidden group">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="absolute top-10 left-0 w-full h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-50" />
        <div className="absolute bottom-10 left-0 w-full h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-50" />
        <div className="absolute left-10 top-0 h-full w-px bg-linear-to-b from-transparent via-primary to-transparent opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 rounded-2xl bg-linear-to-br from-muted to-background border border-primary/30 shadow-[0_0_30px_rgba(176,93,65,0.2)] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="text-4xl font-bold text-primary">R</span>
          </div>
        </div>
        <div className="absolute top-6 left-6 w-3 h-3 rounded-full bg-muted border border-primary" />
        <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-muted border border-primary" />
        <div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-muted border border-primary" />
        <div className="absolute bottom-6 right-6 w-3 h-3 rounded-full bg-muted border border-primary" />
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-2 h-4 bg-primary rounded-l-sm opacity-60"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

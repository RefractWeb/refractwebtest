const BgGrad = () => {
  return (
    <div
      className="absolute inset-0 mask-radial-at-top-right mask-radial-to-60% opacity-35 pointer-events-none"
      style={{
        backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }}
    />
  );
};

export default BgGrad;

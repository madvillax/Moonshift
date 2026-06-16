export default function TemplatesPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-in fade-in duration-500">
      <h1
        className="text-3xl md:text-4xl font-normal tracking-tight text-text-primary mb-4"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        Templates
      </h1>
      <p className="text-[14px] text-text-secondary max-w-md">
        Browse ready-to-launch templates. Coming soon.
      </p>
    </div>
  );
}

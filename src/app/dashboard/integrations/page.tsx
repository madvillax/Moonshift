export default function IntegrationsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-in fade-in duration-500">
      <h1
        className="text-3xl md:text-4xl font-normal tracking-tight text-text-primary mb-4"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        Integrations
      </h1>
      <p className="text-[14px] text-text-secondary max-w-md">
        Connect your stack. GitHub, Vercel, X, LinkedIn and more. Coming soon.
      </p>
    </div>
  );
}

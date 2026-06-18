import DocsSidebar from "./components/DocsSidebar";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg-deep text-text-primary pt-16 lg:pt-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row">
          <DocsSidebar />
          <main className="flex-1 min-w-0 p-6 lg:p-10 lg:pl-12">
            <div className="max-w-[720px]">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

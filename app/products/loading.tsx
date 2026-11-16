export default function Loading() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 space-y-6 animate-pulse">
      {/* Title skeleton */}
      <div className="h-8 w-48 rounded bg-slate-200 dark:bg-slate-800" />

      {/* Search input skeleton */}
      <div className="h-10 w-full rounded-md bg-slate-200 dark:bg-slate-800 mb-6" />

      {/* Project cards grid skeleton */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="h-40 rounded-xl bg-slate-200 dark:bg-slate-800" />
        <div className="h-40 rounded-xl bg-slate-200 dark:bg-slate-800" />
        <div className="h-40 rounded-xl bg-slate-200 dark:bg-slate-800" />
      </div>
    </main>
  );
}
import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
          CraftMarket
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-300">
          <Link href="/products" className="hover:text-blue-600 transition-colors">
            Explore
          </Link>
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
}
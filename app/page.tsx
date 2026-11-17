import Link from 'next/link';
import { getProducts } from '@/lib/db';
import { ProductCard } from '@/components/ProductCard';

export default async function HomePage() {
  const featuredProducts = await getProducts();

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      {/* Hero Section with Visual Showcase */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Discover Goods Made With Intention
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Support independent artisans and explore small-batch ceramics, woodwork, and home essentials.
          </p>
          <div className="flex gap-4">
            <Link
              href="/products"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Browse Catalog
            </Link>
          </div>
        </div>

        {/* Hero Visual Showcase */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 p-8 text-center">
          <div className="h-64 sm:h-72 w-full flex flex-col items-center justify-center bg-slate-200 dark:bg-slate-800 rounded-xl text-slate-500 dark:text-slate-400">
            <span className="text-lg font-semibold">Handcrafted Pottery & Goods</span>
            <p className="text-sm mt-2">Artisan workshop showcase</p>
          </div>
        </div>
      </section>

      {/* Featured Creations Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured Creations</h2>
          <Link href="/products" className="text-sm font-semibold text-blue-600 hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
import Link from 'next/link';
import { getProducts } from '@/lib/db';
import { ProductCard } from '@/components/ProductCard';

export default async function HomePage() {
  const featuredProducts = await getProducts();

  return (
    <main className="max-w-7xl mx-auto px-4 py-12 space-y-16">
      <section className="text-center max-w-2xl mx-auto space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Discover Goods Made With Intention
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Support independent artisans and explore small-batch ceramics, woodwork, and home essentials.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/products"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Browse Catalog
          </Link>
        </div>
      </section>

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
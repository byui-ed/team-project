import { Suspense } from 'react';
import { getProducts } from '@/lib/db';
import { FilterBar } from '@/components/FilterBar';
import { ProductCard } from '@/components/ProductCard';

interface PageProps {
  searchParams?: Promise<{
    query?: string;
    category?: string;
  }>;
}

export default async function ProductsPage(props: PageProps) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const category = searchParams?.category || 'all';

  const products = await getProducts(query, category);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Explore Marketplace</h1>

      <Suspense fallback={<div className="h-12 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse mb-8" />}>
        <FilterBar />
      </Suspense>

      {products.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl">
          <p className="text-slate-500">No items matched your search criteria.</p>
        </div>
      )}
    </main>
  );
}
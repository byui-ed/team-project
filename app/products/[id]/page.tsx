import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById } from '@/lib/db';

// Allow blocking route for dynamic parameters
export const instant = false;

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage(props: DetailPageProps) {
  const { id } = await props.params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/products" className="text-sm font-medium text-blue-600 hover:underline">
        ← Back to Products
      </Link>

      <div className="mt-6 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 bg-white dark:bg-slate-900 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            {product.category}
          </span>
          <span className="text-sm text-slate-500">Sold by {product.sellerName}</span>
        </div>

        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
          {product.description}
        </p>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span className="text-2xl font-extrabold">${product.price.toFixed(2)}</span>
          <button
            type="button"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
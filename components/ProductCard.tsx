import Link from 'next/link';
import { Product } from '@/lib/types';

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-5 bg-white dark:bg-slate-900 shadow-sm flex flex-col justify-between hover:border-blue-500 transition-colors">
      <div>
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
          <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 font-medium">
            {product.category}
          </span>
          <span>by {product.sellerName}</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
          {product.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 line-clamp-2">
          {product.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <span className="text-lg font-bold text-slate-900 dark:text-white">
          ${product.price.toFixed(2)}
        </span>
        <Link
          href={`/products/${product.id}`}
          className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
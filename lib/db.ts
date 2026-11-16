import { Product } from './types';

const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    sellerId: 'u1',
    sellerName: 'Artisan Studio',
    title: 'Handcrafted Ceramic Mug',
    description: 'Minimalist stoneware mug glazed in matte slate blue.',
    price: 28.00,
    category: 'Home & Living',
    imageUrl: '/placeholder-mug.jpg',
    inStock: true,
  },
  {
    id: '2',
    sellerId: 'u2',
    sellerName: 'Timber & Thread',
    title: 'Walnut Desk Organizer',
    description: 'Solid American walnut tray for everyday workspace essentials.',
    price: 45.00,
    category: 'Workspace',
    imageUrl: '/placeholder-desk.jpg',
    inStock: true,
  },
  {
    id: '3',
    sellerId: 'u1',
    sellerName: 'Artisan Studio',
    title: 'Linen Pour-Over Coffee Filter',
    description: 'Reusable organic hemp and linen filter for pour-over brewers.',
    price: 16.50,
    category: 'Kitchen',
    imageUrl: '/placeholder-filter.jpg',
    inStock: true,
  },
];

export async function getProducts(query?: string, category?: string): Promise<Product[]> {
  try {
    // Replace with your PostgreSQL query when DATABASE_URL / POSTGRES_URL is configured:
    // const { rows } = await sql<Product>`SELECT * FROM products ...`;
    let results = [...MOCK_PRODUCTS];

    if (query) {
      const q = query.toLowerCase();
      results = results.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    if (category && category !== 'all') {
      results = results.filter((p) => p.category === category);
    }

    return results;
  } catch (error) {
    console.warn('Database unavailable, serving fallback products:', error);
    return MOCK_PRODUCTS;
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  const products = await getProducts();
  return products.find((p) => p.id === id) ?? null;
}
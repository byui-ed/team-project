export default function LoginPage() {
  return (
    <main className="max-w-md mx-auto px-4 py-16">
      <div className="border border-slate-200 dark:border-slate-800 rounded-2xl p-8 bg-white dark:bg-slate-900 shadow-sm space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-sm text-slate-500">Sign in to manage your storefront or orders</p>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="maker@example.com"
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-blue-600"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-blue-600"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}
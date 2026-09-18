/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProductList } from './components/ProductList';

export default function App() {
  return (
    <div className="min-h-screen bg-rose-50 text-slate-900">
      <header className="p-6 border-b border-rose-200">
        <h1 className="text-3xl font-serif font-bold text-rose-900">Cupid's Adult Toys</h1>
        <p className="text-rose-700">Intimate wellness boutique</p>
      </header>
      <main className="p-6">
        <section className="bg-white p-8 rounded-xl shadow-sm border border-rose-100">
          <h2 className="text-2xl font-serif font-semibold mb-4">Welcome to Bedroom Bliss</h2>
          <p className="text-slate-700 max-w-2xl mb-6">
            Discover a curated collection of wellness products designed for your comfort and pleasure.
          </p>
          <button className="bg-rose-600 text-white px-6 py-2 rounded-full font-medium hover:bg-rose-700">
            Browse Boutique
          </button>
        </section>
        <ProductList />
      </main>
    </div>
  );
}

import { Product } from '../types';

const products: Product[] = [
  { id: '1', title: 'Silk Massage Oil', description: 'A gentle, scented oil for relaxing massages.', price: 29.99, imageUrl: 'https://picsum.photos/seed/oil/400/300' },
  { id: '2', title: 'Velvet Soft Wand', description: 'A powerful, quiet vibrator with multiple speeds.', price: 59.99, imageUrl: 'https://picsum.photos/seed/wand/400/300' },
  { id: '3', title: 'Satin Eye Mask', description: 'Luxurious satin mask for total relaxation.', price: 15.99, imageUrl: 'https://picsum.photos/seed/mask/400/300' },
  { id: '4', title: 'Bamboo Body Brush', description: 'A soft-bristled brush for invigorating skincare.', price: 24.99, imageUrl: 'https://picsum.photos/seed/brush/400/300' },
  { id: '5', title: 'Aromatic Candle', description: 'Create a sensual ambiance with this slow-burning candle.', price: 19.99, imageUrl: 'https://picsum.photos/seed/candle/400/300' },
  { id: '6', title: 'Silk Pillowcase', description: 'Gentle on skin and hair for ultimate comfort.', price: 34.99, imageUrl: 'https://picsum.photos/seed/pillow/400/300' },
];

export function ProductList() {
  return (
    <section className="mt-12" id="product-list">
      <h2 className="text-2xl font-serif font-semibold mb-6">Our Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="bg-white p-6 rounded-xl shadow-sm border border-rose-100 flex flex-col" id={`product-card-${product.id}`}>
            <img src={product.imageUrl} alt={product.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold text-rose-900">{product.title}</h3>
            <p className="text-slate-600 mb-4 flex-grow">{product.description}</p>
            <div className="flex justify-between items-center mt-auto">
              <span className="font-bold text-rose-700">${product.price.toFixed(2)}</span>
              <button className="bg-rose-600 text-white px-4 py-2 rounded-full font-medium hover:bg-rose-700">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

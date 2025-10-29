import { Star, Flame, Leaf } from 'lucide-react'

const products = [
  {
    id: 'p1',
    name: 'Smash Cheeseburger',
    price: 9.99,
    rating: 4.7,
    prep: '15-20 min',
    spicy: false,
    veg: false,
    image:
      'https://images.unsplash.com/photo-1551782450-17144c3a8f5e?q=80&w=800&auto=format&fit=crop',
    description:
      'Two smashed beef patties, melted cheddar, pickles, and house sauce on a toasted brioche bun.',
  },
  {
    id: 'p2',
    name: 'Pepperoni Fire Pizza',
    price: 14.5,
    rating: 4.6,
    prep: '20-25 min',
    spicy: true,
    veg: false,
    image:
      'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop',
    description:
      'Thin crust, double pepperoni, chili oil drizzle, and fresh basil.',
  },
  {
    id: 'p3',
    name: 'Loaded Nacho Bites',
    price: 7.25,
    rating: 4.4,
    prep: '10-15 min',
    spicy: true,
    veg: true,
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    description:
      'Crispy corn chips piled high with melted cheese, jalapeños, pico de gallo, and lime crema.',
  },
  {
    id: 'p4',
    name: 'Margherita Pizza',
    price: 12.0,
    rating: 4.8,
    prep: '18-22 min',
    spicy: false,
    veg: true,
    image:
      'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=800&auto=format&fit=crop',
    description:
      'San Marzano tomatoes, fresh mozzarella, extra virgin olive oil, and basil.',
  },
]

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700">
      {children}
    </span>
  )
}

export default function ProductShowcase({ filter = 'all' }) {
  const filtered = products.filter((p) => {
    if (filter === 'spicy') return p.spicy
    if (filter === 'veg') return p.veg
    return true
  })

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-baseline justify-between">
        <h3 className="text-xl font-semibold">Popular near you</h3>
        <div className="flex gap-2">
          <span className="text-sm text-gray-500">Filter:</span>
          <Badge>All</Badge>
          <Badge>
            <Flame className="h-3.5 w-3.5 text-rose-600" /> Spicy
          </Badge>
          <Badge>
            <Leaf className="h-3.5 w-3.5 text-emerald-600" /> Veg
          </Badge>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <article
            key={p.id}
            className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative">
              <img
                src={p.image}
                alt={p.name}
                className="h-44 w-full object-cover"
              />
              {p.spicy && (
                <span className="absolute left-3 top-3 rounded-full bg-rose-600/90 text-white text-[10px] px-2 py-0.5 font-semibold">
                  Spicy
                </span>
              )}
              {p.veg && (
                <span className="absolute left-3 top-3 mt-6 rounded-full bg-emerald-600/90 text-white text-[10px] px-2 py-0.5 font-semibold">
                  Veg
                </span>
              )}
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 group-hover:underline">
                {p.name}
              </h4>
              <p className="mt-1 text-sm text-gray-600 line-clamp-2">{p.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium text-gray-800">
                    {p.rating}
                  </span>
                  <span className="text-xs text-gray-500">• {p.prep}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">From</p>
                  <p className="text-lg font-bold">${p.price.toFixed(2)}</p>
                </div>
              </div>
              <button className="mt-4 w-full rounded-md bg-gray-900 text-white py-2 text-sm font-semibold hover:bg-black">
                Add to cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

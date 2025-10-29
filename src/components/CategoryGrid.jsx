import { Flame, Pizza, Sandwich, CupSoda } from 'lucide-react'

const categories = [
  {
    key: 'burgers',
    label: 'Burgers',
    color: 'from-amber-100 to-rose-100',
    icon: Sandwich,
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop',
  },
  {
    key: 'pizza',
    label: 'Pizza',
    color: 'from-orange-100 to-yellow-100',
    icon: Pizza,
    image:
      'https://images.unsplash.com/photo-1548365328-9f547fb095a6?q=80&w=600&auto=format&fit=crop',
  },
  {
    key: 'snacks',
    label: 'Snacks',
    color: 'from-rose-100 to-pink-100',
    icon: Flame,
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
  },
  {
    key: 'drinks',
    label: 'Drinks',
    color: 'from-sky-100 to-indigo-100',
    icon: CupSoda,
    image:
      'https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=600&auto=format&fit=crop',
  },
]

export default function CategoryGrid({ onSelect }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-baseline justify-between">
        <h3 className="text-xl font-semibold">Browse categories</h3>
        <p className="text-sm text-gray-500">Burgers, pizza, snacks, and more</p>
      </div>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((c) => {
          const Icon = c.icon
          return (
            <button
              key={c.key}
              onClick={() => onSelect?.(c.key)}
              className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${c.color} p-3 text-left shadow hover:shadow-md transition-shadow`}
              aria-label={`Open ${c.label} category`}
            >
              <img
                src={c.image}
                alt={`${c.label} category image`}
                className="absolute inset-0 h-full w-full object-cover opacity-40 group-hover:opacity-50 transition-opacity"
              />
              <div className="relative z-10 flex items-center gap-2">
                <span className="rounded-md bg-white/80 p-2 shadow">
                  <Icon className="h-5 w-5 text-gray-800" />
                </span>
                <span className="font-semibold text-gray-900">{c.label}</span>
              </div>
            </button>
          )
        })}
      </div>
    </section>
  )
}

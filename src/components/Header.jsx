import { ShoppingCart, User, MapPin } from 'lucide-react'

export default function Header({ cartCount = 0 }) {
  return (
    <header className="sticky top-0 z-20 w-full bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=200&auto=format&fit=crop"
            alt="BiteDash logo"
            className="h-9 w-9 rounded-md object-cover"
          />
          <div>
            <p className="text-lg font-semibold tracking-tight">BiteDash</p>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              Delivering to: Downtown
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="relative inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <ShoppingCart className="h-4 w-4" />
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 rounded-full bg-blue-600 text-white text-xs px-1.5 py-0.5">
                {cartCount}
              </span>
            )}
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-black">
            <User className="h-4 w-4" />
            Sign In
          </button>
        </div>
      </div>
    </header>
  )
}

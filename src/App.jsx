import { useState } from 'react'
import Header from './components/Header'
import PromoBanner from './components/PromoBanner'
import CategoryGrid from './components/CategoryGrid'
import ProductShowcase from './components/ProductShowcase'
import FooterCTA from './components/FooterCTA'

function App() {
  const [activeFilter, setActiveFilter] = useState('all')

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Header cartCount={2} />

      <main>
        <PromoBanner />

        <div className="mx-auto max-w-6xl px-4 mt-8">
          <div className="relative">
            <input
              aria-label="Search for dishes"
              placeholder="Search burgers, pizza, snacks..."
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 pr-28 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            />
            <div className="absolute inset-y-0 right-2 flex items-center gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`rounded-md px-3 py-1.5 text-sm font-medium ${
                  activeFilter === 'all'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveFilter('spicy')}
                className={`rounded-md px-3 py-1.5 text-sm font-medium ${
                  activeFilter === 'spicy'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Spicy
              </button>
              <button
                onClick={() => setActiveFilter('veg')}
                className={`rounded-md px-3 py-1.5 text-sm font-medium ${
                  activeFilter === 'veg'
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Veg
              </button>
            </div>
          </div>
        </div>

        <CategoryGrid onSelect={(key) => setActiveFilter(key === 'snacks' ? 'veg' : 'all')} />

        <ProductShowcase filter={activeFilter} />
      </main>

      <FooterCTA />
    </div>
  )
}

export default App

export default function PromoBanner() {
  return (
    <section className="w-full bg-gradient-to-r from-rose-500 via-orange-400 to-amber-400 text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <p className="text-sm uppercase tracking-widest/relaxed font-semibold/relaxed text-white/90">
            Limited Time
          </p>
          <h2 className="mt-1 text-3xl md:text-4xl font-extrabold leading-tight">
            Free delivery on orders over $20 this weekend
          </h2>
          <p className="mt-3 text-white/90">
            Burgers, pizza, and snacks from top-rated kitchens near you.
          </p>
          <div className="mt-5 flex gap-3">
            <button className="rounded-md bg-white text-gray-900 px-4 py-2 font-semibold hover:bg-white/90">
              Order now
            </button>
            <button className="rounded-md bg-black/20 text-white px-4 py-2 font-medium hover:bg-black/30">
              View deals
            </button>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-3 w-full">
          <img
            className="h-28 w-full rounded-lg object-cover shadow-md"
            src="https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=600&auto=format&fit=crop"
            alt="Cheeseburger with fries"
          />
          <img
            className="h-28 w-full rounded-lg object-cover shadow-md"
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=600&auto=format&fit=crop"
            alt="Pepperoni pizza"
          />
          <img
            className="h-28 w-full rounded-lg object-cover shadow-md"
            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=600&auto=format&fit=crop"
            alt="Loaded nachos"
          />
        </div>
      </div>
    </section>
  )
}

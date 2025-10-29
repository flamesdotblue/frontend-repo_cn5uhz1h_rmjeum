export default function FooterCTA() {
  return (
    <footer className="w-full border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h3 className="text-2xl font-bold">Craving something good?</h3>
          <p className="mt-2 text-gray-600">
            Download the app soon to track orders in real‑time, save your
            favorites, and earn rewards on every bite.
          </p>
        </div>
        <div className="flex gap-3 md:justify-end">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black"
          >
            Get for iOS
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
          >
            Get for Android
          </a>
        </div>
      </div>
      <div className="border-t border-gray-100 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} BiteDash, Inc. All rights reserved.
      </div>
    </footer>
  )
}

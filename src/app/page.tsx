import Link from "next/link"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-4">🎉 Welcome to Events Platform</h1>
      <p className="mb-6 text-gray-600">
        Browse upcoming events and RSVP in just a click.
      </p>
      <Link
        href="/events"
        className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700"
      >
        View Events
      </Link>
    </main>
  )
}

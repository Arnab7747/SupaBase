import { supabase } from "../../../lib/supabaseClient"

export default async function EventsPage() {
  const { data: events, error } = await supabase
    .from("events")
    .select("id, title, description, date, city")
    .order("date", { ascending: true })

  if (error) return <p>Error loading events: {error.message}</p>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      <ul className="space-y-4">
        {events?.map(event => (
          <li key={event.id} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p>{event.description}</p>
            <p className="text-sm text-gray-500">
              {event.date} • {event.city}
            </p>
            <a href={`/events/${event.id}`} className="text-blue-600 underline">
              RSVP →
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

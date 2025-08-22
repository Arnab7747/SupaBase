"use client"

import { useEffect, useState } from "react"
import { supabase } from "../../../../lib/supabaseClient"
import { useParams } from "next/navigation"

export default function EventDetailPage() {
  const params = useParams()
  const eventId = params.id as string
  const [event, setEvent] = useState<any>(null)
  const [status, setStatus] = useState("")

  useEffect(() => {
    async function fetchEvent() {
      const { data } = await supabase
        .from("events")
        .select("*")
        .eq("id", eventId)
        .single()
      setEvent(data)
    }
    fetchEvent()
  }, [eventId])

  async function handleRSVP(choice: string) {
    // For demo, assume user_id = 1
    const { error } = await supabase
      .from("RSVPs")
      .upsert({ user_id: 1, event_id: eventId, status: choice })

    if (!error) setStatus(choice)
  }

  if (!event) return <p>Loading...</p>

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{event.title}</h1>
      <p>{event.description}</p>
      <p className="text-sm text-gray-500">
        {event.date} • {event.city}
      </p>

      <div className="mt-4">
        <p className="font-medium mb-2">Your RSVP:</p>
        <div className="space-x-2">
          {["Yes", "No", "Maybe"].map(choice => (
            <button
              key={choice}
              onClick={() => handleRSVP(choice)}
              className={`px-4 py-2 rounded-lg border ${
                status === choice ? "bg-blue-500 text-white" : ""
              }`}
            >
              {choice}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

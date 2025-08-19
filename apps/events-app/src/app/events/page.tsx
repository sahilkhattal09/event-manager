"use client";

import AddEventForm from "@/components/AddEventForm";
import EventList from "@/components/EventList";
import { useEventStore } from "@/store/useEventStore";

export default function EventsPage() {
  const { events, addEvent, deleteEvent } = useEventStore();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
          📅 Events
        </h1>

        <AddEventForm onAdd={addEvent} />
        <div className="mt-10">
          <EventList />
        </div>
      </div>
    </div>
  );
}

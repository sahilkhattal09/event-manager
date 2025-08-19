"use client";

import { useState } from "react";
import { useEventStore } from "../store/useEventStore";
import { Trash2 } from "lucide-react";
import SearchBar from "./SearchBar";

export default function EventList() {
  const { events, deleteEvent } = useEventStore();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter events by name or date
  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.date.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (events.length === 0) {
    return <p className="text-gray-500 text-center italic">No events yet.</p>;
  }

  return (
    <div className="mt-10">
      {/* Parent container for search + list */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 sm:p-6 space-y-4">
        {/* Search bar */}
        <SearchBar onSearch={setSearchQuery} />

        {/* Event list */}
        {filteredEvents.length === 0 ? (
          <p className="text-gray-500 text-center italic">
            No matching events.
          </p>
        ) : (
          <div className="space-y-3">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="flex justify-between items-center bg-gray-50 border border-gray-200 shadow-sm p-4 rounded-lg hover:shadow-md transition"
              >
                <div>
                  <p className="text-gray-900 font-semibold">{event.name}</p>
                  <p className="text-gray-500 text-sm">{event.date}</p>
                </div>
                <button
                  onClick={() => deleteEvent(event.id)}
                  className="text-red-600 hover:text-red-800 transition"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

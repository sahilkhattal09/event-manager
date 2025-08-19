import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Event {
  id: number;
  name: string;
  date: string;
}

interface EventStore {
  events: Event[];
  addEvent: (name: string, date: string) => void;
  deleteEvent: (id: number) => void;
}

export const useEventStore = create<EventStore>()(
  persist(
    (set) => ({
      events: [],
      addEvent: (name, date) =>
        set((state) => ({
          events: [...state.events, { id: Date.now(), name, date }],
        })),
      deleteEvent: (id) =>
        set((state) => ({
          events: state.events.filter((e) => e.id !== id),
        })),
    }),
    {
      name: "events-storage", // key in localStorage
    }
  )
);

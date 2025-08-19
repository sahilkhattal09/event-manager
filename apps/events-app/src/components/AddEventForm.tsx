import { useState } from "react";

interface AddEventFormProps {
  onAdd: (name: string, date: string) => void;
}

export default function AddEventForm({ onAdd }: AddEventFormProps) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !date.trim()) return;
    onAdd(name, date);
    setName("");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg space-y-4"
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Event Name"
        className="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none p-2 rounded transition"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none p-2 rounded transition"
      />
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-2/3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transition transform hover:scale-105"
        >
          Add Event
        </button>
      </div>
    </form>
  );
}

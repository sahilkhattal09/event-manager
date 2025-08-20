import { useState } from "react";

interface AddEventFormProps {
  onAdd: (name: string, date: string) => void;
}

export default function AddEventForm({ onAdd }: AddEventFormProps) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [nameError, setNameError] = useState("");
  const [dateError, setDateError] = useState("");

  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    if (!name.trim()) {
      setNameError("Event name is required.");
      hasError = true;
    } else {
      setNameError("");
    }

    if (!date.trim()) {
      setDateError("Event date is required.");
      hasError = true;
    } else if (new Date(date) < new Date(today)) {
      setDateError("Event date cannot be in the past.");
      hasError = true;
    } else {
      setDateError("");
    }

    if (hasError) return;

    onAdd(name, date);
    setName("");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg space-y-4"
    >
      {/* Event name input */}
      <div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Event Name"
          className={`w-full border-b-2 p-2 rounded transition focus:outline-none ${
            nameError
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 focus:border-blue-500"
          }`}
        />
        {nameError && <p className="text-red-600 text-sm mt-1">{nameError}</p>}
      </div>

      {/* Event date input */}
      <div>
        <input
          type="date"
          value={date}
          min={today} // 🔒 prevents selecting past dates in picker
          onChange={(e) => setDate(e.target.value)}
          className={`w-full border-b-2 p-2 rounded transition focus:outline-none ${
            dateError
              ? "border-red-500 focus:border-red-500"
              : "border-gray-300 focus:border-blue-500"
          }`}
        />
        {dateError && <p className="text-red-600 text-sm mt-1">{dateError}</p>}
      </div>

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

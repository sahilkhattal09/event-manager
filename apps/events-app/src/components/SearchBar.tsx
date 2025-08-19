"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="relative w-full mb-4">
      <input
        type="text"
        placeholder="Search events..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
    </div>
  );
}

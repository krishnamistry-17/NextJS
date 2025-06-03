"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function NameData() {
  const [inputval, setInputVal] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/all/prediction/${inputval}`);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <h1 className="text-3xl font-semibold mb-8 text-gray-800">
        Predict data Using Next.js
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
      >
        <label className="block mb-2 text-gray-700 text-sm font-medium">
          Enter your name
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 
          focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter name..."
          value={inputval}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 hover:bg-blue-600
           text-white font-medium py-2 rounded-md
            "
          type="submit"
        >
          Predict Data
        </button>
      </form>
    </div>
  );
}

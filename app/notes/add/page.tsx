"use client";

import React, { useState } from "react";
import { useNotesContext } from "@/context/NotesContext";
import { useRouter } from "next/navigation";

export default function AddDetail() {
  const { addNote } = useNotesContext();
  const router = useRouter();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newNote = {
      ...formData,
    };

    addNote(newNote);
    setFormData({ id: "", name: "", username: "", email: "" }); // Clear form
    router.push("/notes");
  };
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
        <p className="text-[25px] font-bold text-black text-center">
          Add Detail
        </p>
        <form
          className="flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-4 my-4 text-center">
            <input
              type="number"
              placeholder="Id"
              className="max-w-[250px] p-[10px] border border-black"
              value={formData.id}
              onChange={(e) => setFormData({ ...formData, id: e.target.value })}
            />
            <input
              type="text"
              placeholder="Name"
              className="max-w-[250px] p-[10px] border border-black"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="User Name"
              className="max-w-[250px] p-[10px] border border-black"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="abc@gmail.com"
              className="max-w-[250px] p-[10px] border border-black"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 px-4 py-3 text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

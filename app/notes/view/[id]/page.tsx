"use client";

import { useNotesContext } from "@/context/NotesContext";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ViewPage() {
  const router = useRouter();
  const { id } = useParams();
  const { notes } = useNotesContext();

  const note = notes.find((n) => String(n.id) === String(id));

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    if (note) {
      setFormData({
        name: note.name || "",
        username: note.username || "",
        email: note.email || "",
      });
    }
  }, [note]);

  if (!note && notes.length === 0) return <div>Loading...</div>;
  if (!note) return <div>Note not found!</div>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/notes");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
        <p className="text-center text-black font-bold text-[25px]">
          View Page
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center"
        >
          <div className="flex flex-col gap-4 my-4 text-center">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="border border-black max-w-[250px] p-[10px]"
            />
            <input
              type="text"
              placeholder="UserName"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              className="border border-black max-w-[250px] p-[10px]"
            />
            <input
              type="email"
              placeholder="abc@gmail.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="border border-black max-w-[250px] p-[10px]"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-md px-4 py-3">
              Go Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

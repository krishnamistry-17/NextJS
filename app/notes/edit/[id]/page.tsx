"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useNotesContext } from "@/context/NotesContext";

export default function page() {
  const router = useRouter();
  const { id } = useParams();
  const { notes, updateNote } = useNotesContext();

  const note = notes.find((n) => n.id === Number(id));
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    if (note) {
      setFormData({
        name: note.name,
        username: note.username,
        email: note.email,
      });
    }
  }, [note]);

  if (!note) return <div>Note not found!</div>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateNote({ id: Number(id), ...formData });
    router.push(`/notes`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6">
        <p className=" text-[25px] font-bold text-black text-center">
          Edit Detail
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center "
        >
          <div className="flex flex-col gap-4 my-4 text-center">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="max-w-[250px] p-[10px] border border-black"
            />
            <input
              type="text"
              placeholder="User Name"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              className="max-w-[250px] p-[10px] border border-black"
            />
            <input
              type="email"
              placeholder="abc@gmail.com"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
              className="max-w-[250px] p-[10px] border border-black"
            />
            <button className="bg-blue-500 hover:bg-blue-700 px-4 py-3 text-white rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { useNotesContext } from "@/context/NotesContext";

interface Notes {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function Notes() {
  const router = useRouter();
  const { notes, setNotes } = useNotesContext();

  const [deleteId, setDeleteId] = useState<number | null>(null);
  console.log("deleteId :", deleteId);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("isModalOpen :", isModalOpen);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "show";
  }, [isModalOpen]);

  const handleConfirmDelete = () => {
    if (deleteId !== null) {
      setNotes((prev) => prev.filter((note) => note.id !== deleteId));
    }
    setDeleteId(null);
    setIsModalOpen(false);
  };

  const handleCancelDelete = () => {
    setDeleteId(null);
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    setDeleteId(id);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    router.push("/notes/add");
  };

  const handleEdit = (id: number) => {
    router.push(`/notes/edit/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-xl font-semibold mb-4 text-center">User Notes</h1>
        <table className="w-full table-auto border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-sm font-medium text-gray-700 px-4 py-2 border">
                ID
              </th>
              <th className="text-sm font-medium text-gray-700 px-4 py-2 border">
                Name
              </th>
              <th className="text-sm font-medium text-gray-700 px-4 py-2 border">
                Username
              </th>
              <th className="text-sm font-medium text-gray-700 px-4 py-2 border">
                Email
              </th>
              <th className="border">
                <div className="flex justify-center">
                  <button
                    onClick={handleAdd}
                    className="px-3 py-1  text-xs text-white bg-green-500 hover:bg-green-700 rounded"
                  >
                    Add
                  </button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note) => (
              <tr key={note.id} className="hover:bg-gray-50">
                <td className="text-sm px-4 py-2 border text-center">
                  {note.id}
                </td>
                <td className="text-sm px-4 py-2 border text-center">
                  {note.name}
                </td>
                <td className="text-sm px-4 py-2 border text-center">
                  {note.username}
                </td>
                <td className="text-sm px-4 py-2 border text-center">
                  {note.email}
                </td>
                <td className="text-sm px-4 py-2 border text-center">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => handleEdit(note.id)}
                      className="px-3 py-1 text-xs text-white bg-blue-500 hover:bg-blue-700 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(note.id)}
                      className="px-3 py-1 text-xs text-white bg-red-500 hover:bg-red-700 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
              <div className="text-center">
                <MdDelete className="text-red-500 text-5xl  mx-auto mb-4" />
                <h2 className="text-lg font-semibold mb-2">Confirm Delete</h2>
                <p className="text-sm text-gray-600 mb-6">
                  Are you sure you want to delete this note?
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={handleConfirmDelete}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                  >
                    Yes, Delete
                  </button>
                  <button
                    onClick={handleCancelDelete}
                    className="bg-gray-300 hover:bg-gray-600 px-4 py-2 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

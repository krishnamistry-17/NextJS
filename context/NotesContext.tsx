"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface Note {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface NotesContextType {
  notes: Note[];
  updateNote: (note: Note) => void;
  addNote: (note: Note) => void;
  setNotes: (notes: Note[]) => void;
  viewNotes: (notes: Note[]) => void;
  searchNotes: (notes: Note[]) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setNotes(data);
    };
    fetchNotes();
  }, []);

  const updateNote = (updatedNote: Note) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
  };

  const viewNotes = (viewNote: Note) => {
    console.log("Viewing note with ID:", viewNote.id);
    setNotes((prev) => {
      const existing = prev.find((note) => note.id === viewNote.id);
      if (existing) {
        // Update
        return prev.map((note) =>
          note.id === viewNote.id ? { ...note, ...viewNote } : note
        );
      } else {
        // Add
        return [...prev, viewNote];
      }
    });
  };

  const searchNotes = (searchNote: Note) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === searchNote.id ? { ...note, ...searchNote } : note
      )
    );
  };

  const addNote = (newNote: Note) => {
    setNotes((prev) => [...prev, newNote]);
  };

  return (
    <NotesContext.Provider
      value={{ notes, updateNote, addNote, setNotes, viewNotes, searchNotes }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotesContext = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error("useNotesContext must be used within a NotesProvider");
  }
  return context;
};

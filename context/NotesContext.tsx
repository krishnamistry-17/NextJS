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

  const addNote = (newNote: Note) => {
    setNotes((prev) => [...prev, newNote]);
  };

  return (
    <NotesContext.Provider value={{ notes, updateNote, addNote, setNotes }}>
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

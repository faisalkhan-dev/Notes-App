import React, { useEffect, useState } from "react";
import {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} from "./api";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const res = await getNotes();
      setNotes(res.data || []);
    } catch (err) {
      console.error("Failed to fetch notes", err);
      alert("Failed to fetch notes. Is backend running?");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSave = async (payload) => {
    try {
      if (editingNote) {
        await updateNote(editingNote.id, payload);
        setEditingNote(null);
      } else {
        await createNote(payload);
      }
      fetchNotes();
    } catch (err) {
      console.error("Save failed", err);
      alert("Save failed");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this note?")) return;
    try {
      await deleteNote(id);
      fetchNotes();
    } catch (err) {
      console.error("Delete failed", err);
      alert("Delete failed");
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: "2rem auto", padding: 20 }}>
      <h1 style={{ textAlign: "center" }}>Notes App (Internship Task)</h1>
      <NoteForm onSave={handleSave} editingNote={editingNote} />
      <hr style={{ margin: "1.5rem 0" }} />
      {loading ? <p>Loading notes…</p> : (
        <NoteList
          notes={notes}
          onEdit={(n) => setEditingNote(n)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

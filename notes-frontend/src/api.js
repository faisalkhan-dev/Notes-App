import axios from "axios";

const BASE = import.meta.env.VITE_API_URL || "http://localhost:8080";

const API = axios.create({
  baseURL: BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

// now always append `/api/notes`
export const getNotes = () => API.get("/api/notes");
export const getNote = (id) => API.get(`/api/notes/${id}`);
export const getNoteByShareId = (shareId) => API.get(`/api/notes/share/${shareId}`);
export const createNote = (note) => API.post("/api/notes", note);
export const updateNote = (id, note) => API.put(`/api/notes/${id}`, note);
export const deleteNote = (id) => API.delete(`/api/notes/${id}`);

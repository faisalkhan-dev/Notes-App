import axios from "axios";

const BASE = import.meta.env.VITE_API_URL || "http://localhost:8080/api/notes";

const API = axios.create({
  baseURL: BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ remove extra slashes
export const getNotes = () => API.get(""); 
export const getNote = (id) => API.get(`/${id}`);
export const getNoteByShareId = (shareId) => API.get(`/share/${shareId}`);
export const createNote = (note) => API.post("", note);
export const updateNote = (id, note) => API.put(`/${id}`, note);
export const deleteNote = (id) => API.delete(`/${id}`);

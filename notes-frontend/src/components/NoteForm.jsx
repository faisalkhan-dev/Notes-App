// import React, { useEffect, useState } from "react";

// export default function NoteForm({ onSave, editingNote }) {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   useEffect(() => {
//     if (editingNote) {
//       setTitle(editingNote.title || "");
//       setContent(editingNote.content || "");
//     } else {
//       setTitle("");
//       setContent("");
//     }
//   }, [editingNote]);

//   const submit = (e) => {
//     e.preventDefault();
//     if (!title.trim() || !content.trim()) {
//       alert("Title and content required");
//       return;
//     }
//     onSave({ title: title.trim(), content: content.trim() });
//     setTitle("");
//     setContent("");
//   };

//   return (
//     <form onSubmit={submit} style={{ display: "grid", gap: 8 }}>
//       <input
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         style={{ padding: 8, fontSize: 16 }}
//       />
//       <textarea
//         placeholder="Content"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//         rows={5}
//         style={{ padding: 8, fontSize: 14 }}
//       />
//       <button type="submit" style={{ padding: "8px 12px", width: 140 }}>
//         {editingNote ? "Update note" : "Create note"}
//       </button>
//     </form>
//   );
// }

import React, { useEffect, useState } from "react";

export default function NoteForm({ onSave, editingNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title || "");
      setContent(editingNote.content || "");
    } else {
      setTitle("");
      setContent("");
    }
  }, [editingNote]);

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("Title and content required");
      return;
    }
    onSave({ title: title.trim(), content: content.trim() });
    setTitle("");
    setContent("");
  };

  return (
    <form
      onSubmit={submit}
      style={{
        display: "grid",
        gap: 10,
        padding: 16,
        borderRadius: 12,
        background: "linear-gradient(135deg, #f6d365, #fda085)",
        boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
      }}
    >
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          padding: 10,
          fontSize: 16,
          borderRadius: 8,
          border: "none",
          outline: "none",
          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.06)",
          background: "rgba(255,255,255,0.95)",
        }}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={5}
        style={{
          padding: 10,
          fontSize: 14,
          borderRadius: 8,
          border: "none",
          outline: "none",
          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.06)",
          background: "rgba(255,255,255,0.95)",
          resize: "vertical",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 14px",
          width: 160,
          alignSelf: "start",
          background: "linear-gradient(135deg, #43cea2, #185a9d)",
          color: "white",
          border: "none",
          borderRadius: 8,
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: "0 6px 12px rgba(24,90,157,0.25)",
        }}
      >
        {editingNote ? "Update note" : "Create note"}
      </button>
    </form>
  );
}

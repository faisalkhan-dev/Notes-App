// import React from "react";
// import { Link } from "react-router-dom";

// export default function NoteList({ notes, onEdit, onDelete }) {
//   if (!notes || notes.length === 0) return <p>No notes yet.</p>;

//   const copyShareLink = (note) => {
//     const url = `${window.location.origin}/share/${note.shareId}`;
//     navigator.clipboard?.writeText(url)
//       .then(() => alert("Share link copied to clipboard"))
//       .catch(() => prompt("Copy this link:", url));
//   };

//   return (
//     <div style={{ display: "grid", gap: 12 }}>
//       {notes.map((note) => (
//         <div key={note.id} style={{ border: "1px solid #ddd", padding: 12, borderRadius: 6 }}>
//           <h3 style={{ margin: 0 }}>{note.title}</h3>
//           <p style={{ whiteSpace: "pre-wrap" }}>{note.content}</p>
//           <div style={{ fontSize: 12, color: "#666" }}>
//             Created: {note.createdAt ? note.createdAt.replace("T", " ").slice(0, 19) : "—"}
//           </div>
//           <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
//             <button onClick={() => onEdit(note)}>Edit</button>
//             <button onClick={() => onDelete(note.id)}>Delete</button>
//             <button onClick={() => copyShareLink(note)}>Copy Share Link</button>
//             {note.shareId && <Link to={`/share/${note.shareId}`}><button>Open Share View</button></Link>}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";

export default function NoteList({ notes, onEdit, onDelete }) {
  if (!notes || notes.length === 0)
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>No notes yet.</p>;

  const copyShareLink = (note) => {
    const url = `${window.location.origin}/share/${note.shareId}`;
    navigator.clipboard
      ?.writeText(url)
      .then(() => alert("Share link copied to clipboard"))
      .catch(() => prompt("Copy this link:", url));
  };

  return (
    <div style={{ display: "grid", gap: 16, marginTop: 20 }}>
      {notes.map((note) => (
        <div
          key={note.id}
          style={{
            background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
            borderRadius: 12,
            padding: 16,
            boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
          }}
        >
          <h3 style={{ margin: "0 0 8px 0", color: "#2c3e50" }}>{note.title}</h3>
          <p style={{ whiteSpace: "pre-wrap", color: "#333", margin: "0 0 12px 0" }}>
            {note.content}
          </p>
          <div style={{ fontSize: 12, color: "#555", marginBottom: 12 }}>
            Created:{" "}
            {note.createdAt ? note.createdAt.replace("T", " ").slice(0, 19) : "—"}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <button
              onClick={() => onEdit(note)}
              style={{
                padding: "6px 12px",
                border: "none",
                borderRadius: 6,
                background: "linear-gradient(135deg, #43cea2, #185a9d)",
                color: "white",
                cursor: "pointer",
              }}
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(note.id)}
              style={{
                padding: "6px 12px",
                border: "none",
                borderRadius: 6,
                background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
                color: "white",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
            <button
              onClick={() => copyShareLink(note)}
              style={{
                padding: "6px 12px",
                border: "none",
                borderRadius: 6,
                background: "linear-gradient(135deg, #245f67ff, #11adb2ff)",
                color: "white",
                cursor: "pointer",
              }}
            >
              Copy Share Link
            </button>
            {note.shareId && (
              <Link to={`/share/${note.shareId}`} style={{ textDecoration: "none" }}>
                <button
                  style={{
                    padding: "6px 12px",
                    border: "none",
                    borderRadius: 6,
                    background: "linear-gradient(135deg, #9468baff, #593b8dff)",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Open Share View
                </button>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { getNoteByShareId } from "../api";

// export default function ShareView() {
//   const { shareId } = useParams();
//   const [note, setNote] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const load = async () => {
//       try {
//         setLoading(true);
//         const res = await getNoteByShareId(shareId);
//         setNote(res.data);
//       } catch (err) {
//         console.error(err);
//         setNote(null);
//       } finally {
//         setLoading(false);
//       }
//     };
//     load();
//   }, [shareId]);

//   if (loading) return <p>Loading...</p>;
//   if (!note) return (
//     <div style={{ padding: 20 }}>
//       <p>Note not found or was deleted.</p>
//       <Link to="/">Back to notes</Link>
//     </div>
//   );

//   return (
//     <div style={{ maxWidth: 800, margin: "2rem auto", padding: 20 }}>
//       <h1>{note.title}</h1>
//       <p style={{ whiteSpace: "pre-wrap" }}>{note.content}</p>
//       <div style={{ color: "#666", marginTop: 8 }}>
//         Created: {note.createdAt ? note.createdAt.replace("T", " ").slice(0, 19) : "—"}
//       </div>
//       <div style={{ marginTop: 12 }}>
//         <Link to="/">Back</Link>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getNoteByShareId } from "../api";

export default function ShareView() {
  const { shareId } = useParams();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const res = await getNoteByShareId(shareId);
        setNote(res.data);
      } catch (err) {
        console.error(err);
        setNote(null);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [shareId]);

  if (loading)
    return <p style={{ textAlign: "center", marginTop: "2rem", color: "#6c63ff" }}>Loading...</p>;

  if (!note)
    return (
      <div style={{ padding: 20, textAlign: "center" }}>
        <p style={{ color: "#e63946", fontWeight: "bold", fontSize: "1.2rem" }}>
          🚫 Note not found or was deleted.
        </p>
        <Link
          to="/"
          style={{
            display: "inline-block",
            marginTop: "10px",
            padding: "10px 18px",
            background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          ⬅ Back to notes
        </Link>
      </div>
    );

  return (
    <div style={{ maxWidth: 800, margin: "2rem auto", padding: 20 }}>
      <div
        style={{
          background: "linear-gradient(135deg, #f6d365, #fda085)",
          borderRadius: "15px",
          padding: "2rem",
          boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
          color: "#2d3436",
        }}
      >
        <h1 style={{ color: "#1d3557", marginBottom: "1rem", textAlign: "center" }}>
          ✨ {note.title}
        </h1>
        <p
          style={{
            whiteSpace: "pre-wrap",
            fontSize: "1.2rem",
            color: "#2f2f2f",
            lineHeight: "1.6",
          }}
        >
          {note.content}
        </p>
        <div
          style={{
            color: "#333",
            marginTop: 20,
            fontSize: "0.95rem",
            textAlign: "right",
            fontStyle: "italic",
          }}
        >
          🕒 Created:{" "}
          {note.createdAt
            ? note.createdAt.replace("T", " ").slice(0, 19)
            : "—"}
        </div>
      </div>

      <div style={{ marginTop: 25, textAlign: "center" }}>
        <Link
          to="/"
          style={{
            padding: "10px 20px",
            background: "linear-gradient(135deg, #43cea2, #185a9d)",
            color: "white",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          ⬅ Back
        </Link>
      </div>
    </div>
  );
}

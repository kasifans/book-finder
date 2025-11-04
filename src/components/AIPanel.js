import React from "react";

export default function AIPanel() {
  return (
    <div
      style={{
        marginTop: "40px",
        backgroundColor: "#eef2ff",
        padding: "16px",
        borderRadius: "8px",
        border: "1px solid #c7d2fe",
      }}
    >
      <h2 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px" }}>
        💡 AI Insights
      </h2>
      <p style={{ fontSize: "14px", marginBottom: "12px" }}>
        See how I used ChatGPT to design and structure this app.
      </p>
      <a
        href="PASTE_YOUR_CHATGPT_LINK_HERE"
        target="_blank"
        rel="noreferrer"
        style={{
          backgroundColor: "#4f46e5",
          color: "#fff",
          padding: "8px 16px",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        View ChatGPT Conversation
      </a>
    </div>
  );
}

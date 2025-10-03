import React from "react";

function ResultCard({ result }) {
  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <h2>Disease: {result.disease}</h2>
      <p>Confidence: {result.confidence}</p>
    </div>
  );
}

export default ResultCard;

import React, { useState } from "react";
import UploadForm from "./components/UploadForm";
import ResultCard from "./components/ResultCard";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🌿 Plant Disease Detector</h1>
      <UploadForm setResult={setResult} />
      {result && <ResultCard result={result} />}
    </div>
  );
}

export default App;

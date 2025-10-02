import React, { useState } from "react";

function UploadForm({ setResult }) {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Please upload a file first");

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setResult(data);
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload & Detect</button>
    </div>
  );
}

export default UploadForm;

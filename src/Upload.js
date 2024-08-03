import React, { useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setResult(data.classification);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Upload Image for Classification</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label htmlFor="imageUpload">Choose an image:</label>
        <input type="file" id="imageUpload" name="image" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Submit</button>
      </form>
      {result && <div id="result">Classification: {result}</div>}
    </div>
  );
};

export default Upload;

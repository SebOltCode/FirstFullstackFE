import React, { useState } from 'react';
import axios from 'axios';

function FormPage() {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000', formData);
      console.log('Eintrag erfolgreich hinzugefügt:', response.data);
    } catch (error) {
      console.error('Fehler beim Hinzufügen des Eintrags:', error);
    }
  };

  return (
    <div>
      <h2>Post erstellen</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Titel:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <label>
          Inhalt:
          <textarea name="content" value={formData.content} onChange={handleChange} />
        </label>
        <button type="submit">Erstellen</button>
      </form>
    </div>
  );
}

export default FormPage;
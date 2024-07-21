import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000');
        setData(response.data); 
      } catch (error) {
        console.error('Problem beim Fetchen der Daten:', error);
      }
    };

    fetchData(); 
  }, []);

  return (
    <div>
      <h1>Posts from Database</h1>
      <div>
        {data.map(() => (
          <div key={id}>
            <h2>{eintrag.title}</h2>
            <p>{eintrag.author}</p>
            <p>{eintrag.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
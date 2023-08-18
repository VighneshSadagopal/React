import React, { useState, useEffect } from 'react';
import KanbanBoard from './KanbanBoard';
import './App.css';

const App = () => {
  const [data, setData] = useState({ tickets: [], users: [] });

  useEffect(() => {
    // Fetch data from your API
    if(localStorage.getItem('jsonApi')){
      
      const parsedData = JSON.parse(localStorage.getItem('jsonApi')); // Decoding JSON data
      setData(parsedData);
    }
    else{
      fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(apiData => {
        
        setData(apiData);
        // setting values in localStorage.
        localStorage.setItem('jsonApi', JSON.stringify(apiData));
        localStorage.setItem('jsonApiDefault', JSON.stringify(apiData));
        

      })
      .catch(error => console.error('Error fetching data:', error));
    }
   
  }, []);

  const { tickets, users } = data;

  return (
    <div className="App">
      <KanbanBoard tickets={tickets} users={users}/>
    </div>
  );
};

export default App;

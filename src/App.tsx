import React, { useEffect, useState } from 'react';
import api from '../services/api'

function App() {
  
  const [users, setUsers] = useState([])

  useEffect(()=>{
      api.get('/users').then(response => {
        setUsers(response.data)
      })
  },[])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;

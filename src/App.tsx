import React, { useEffect, useState } from 'react';
import api from '../services/api'


interface userProps{
  name: string,
  email: string
}


function App() {
  
  const [users, setUsers] = useState<userProps[]>([])

  useEffect(()=>{
      api.get<userProps[]>('/users').then(response => {
        setUsers(response.data)
      })
  },[])

  return (
    <div className="App">
        {
          users.map(user => <p>{user}</p>)
        }
    </div>
  );
}

export default App;

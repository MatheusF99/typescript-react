import React, { useEffect, useState } from 'react';
import api from './services/api'

import User from '../src/components/user'


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
          users.map(user => <User key={user.email} user={user}/>)
        }
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Router } from '@reach/router';
import Detail from '../src/views/Detail'
import './App.css';
import Main from '../src/views/Main'
import Update from '../src/views/Update'

function App() {
  const [socket] = useState(() => io(':8000'));

  useEffect(() => {
    console.log('Is this running?');
    socket.on('Welcome', data => console.log(data));
    return () => socket.disconnect(true);
  }, []);

  return (
    <div className="App">
      <Router>
        <Main path='authors/' default/>
        <Detail path='authors/:id'/>
        <Update path="authors/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;

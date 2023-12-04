
import Home from './components/Home';
import Navbar from './components/Navbar';
import React from 'react';

const App = () => {

  return (
    <div>
      <Navbar></Navbar>

      <main>
        <div id='home'>
          <Home></Home>
        </div>
      </main>
    </div>
  );
};

export default App;

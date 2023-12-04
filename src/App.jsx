
import Home from './components/Home';
import Menu from './components/Menu';
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

        <div id='menu'> 
          <Menu/>
        </div>
      </main>
    </div>
  );
};

export default App;

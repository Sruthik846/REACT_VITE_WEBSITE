
import About from './components/About';
import Home from './components/Home';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import React from 'react';
import Review from './components/Review';
import Footer from './components/Footer';
import Product from './components/Product';

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

        <div id='about'> 
          <About/>
        </div>

        <div id='product'> 
         <Product></Product>
        </div>

        <div id='review'> 
          <Review></Review>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;

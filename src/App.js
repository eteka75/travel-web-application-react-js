
import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destionation from './components/Destionation';
import Search from './components/Search';
import Selects from './components/Selects';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';

function App() {
  return (
    <div >
     <Navbar/>
     <Hero />
     <Destionation />
     <Search />
     <Selects />
     <Carrousel />
     <Footer />
    </div>
  );
}

export default App;

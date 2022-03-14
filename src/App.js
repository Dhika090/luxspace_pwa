import React from 'react';
import Header from './components/header.js';
import Hero from './components/hero.js';
import Browse from './components/browse.js';
import Arrived from './components/arrived';
import Clients from './components/clients';
import Asidemenu from './components/asidemenu';
import Footer from './components/footer';

function App() {
  return (
   <> 
    <Header />
    <Hero />
    <Browse />
    <Arrived />
    <Clients />
    <Asidemenu />
    <Footer />
   </>
  );
}

export default App;

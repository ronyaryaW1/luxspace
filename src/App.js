import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Browse from './components/Browse';
import Arrived from './components/Arrived';
import Client from './components/Client';
import AsideMenu from './components/AsideMenu';
import Footer from './components/Footer';


function App() {
  return (
    <div>

    <Header />
      <Hero />
      <Browse />
      <Arrived />
      <Client />
      <AsideMenu />
      <Footer/>
    </div>
  );
}

export default App;

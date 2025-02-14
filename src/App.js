import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Browse from './components/Browse';
import Arrived from './components/Arrived';
import Client from './components/Client';
import AsideMenu from './components/AsideMenu';
import Footer from './components/Footer';


function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        const data = await response.json();
        setItems(data.slice(0, 5))
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>

    <Header />
      <Hero />
      <Browse />
      <Arrived items={items} />
      <Client />
      <AsideMenu />
      <Footer/>
    </div>
  );
}

export default App;

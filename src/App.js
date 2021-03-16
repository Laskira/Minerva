import React, {useState, useEffect} from 'react';
import "./App.css";

//Components
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

export default function App() {

  const [salute, setSalute] = useState('');

  useEffect(() => {
    const today = new Date();

    if (today.getHours() >= 6 && today.getHours() <= 11) {
      setSalute("¡Buenos días!");
    }

    if (today.getHours() >= 12 && today.getHours() <= 19) {
     setSalute("¡Buenas tardes!");
    }

    if (today.getHours() >= 20 && today.getHours() <= 23) {
      setSalute("¡Buenas noches!");
    }

    if (today.getHours() >= 0 && today.getHours() <= 5) {
      setSalute("¡Buenas noches!");
    }
  }, [])
  
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer salute={salute} />
    </div>
  );
}

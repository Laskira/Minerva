import "./App.css";

//Components
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

//Funcion que saluda al usuario según la hora del día
export default function App() {

  //Variable string qua cambia segun la hora
  var welcome = "";
  
  const salute = () => {
    const today = new Date();

    if (today.getHours() >= 6 && today.getHours() <= 11) {
      welcome = "¡Buenos días!";
    }

    if (today.getHours() >= 12 && today.getHours() <= 19) {
      welcome = "¡Buenas tardes!";
    }

    if (today.getHours() >= 20 && today.getHours() <= 23) {
      welcome = "¡Buenas noches!";
    }

    if (today.getHours() >= 0 && today.getHours() <= 5) {
      welcome = "¡Buenas noches!";
    }
  };

  //Ejecución de función
  salute();
  
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer salute={welcome} />
    </div>
  );
}

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Nombre from "./components/Nombre";
import ItemListContainer from "./components/ItemListContainer";

const App  = () => { 
  return (
  <div>
    <Nombre/>
    
    <Header/>

    <NavBar/>

    <ItemListContainer/>
  </div>
  );
}

export default App
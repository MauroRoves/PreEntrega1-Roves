/* const App = () => {
    function mostrarAlerta() {
      alert("Sabelo Wachin")
    }
    
    return (
    <div>
      <Title value="Hola Mauro" />
      <Description alerta={mostrarAlerta} />
    </div>
    );
  }
  
  function Title({ value }) {
    return <h1>{value}</h1>;
  }
  
  
  function Description({ alerta }) {
    return (
      <div>
        <p>Pero mas bien!</p>
        <button onClick={alerta}>Enviar Alerta</button>
      </div>
    );
  }
  
export default App */

import "./navbar.css";
  
function NavBar() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container-fluid ">
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Cortador1</a></li>
                <li><a className="dropdown-item" href="#">Cortador2</a></li>
                <li><a className="dropdown-item" href="#">Cortador3</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Quienes Somos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
            <li className="nav-item">
              <img src="../imagenes/cart.svg" alt="carrito" />
            </li>
          </ul>
        </div>
      </div>
    </nav>

            
          );
    }
  
  
export default NavBar;




import "./NavBar.css";



function NavBar() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid ">
          <div className=" container-fluid collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav flex-nowrap align-items-center">
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
              <CartWidget/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    
    
    </div>        
          );
    }

     function CartWidget() {
      return (     
            <div className=" container-fluid d-flex">
              <img src="../imagenes/cart.svg" alt="carrito" className="img-fluid" />
              <p>4</p>  
            </div>
            );
    }
  
  
export default NavBar;




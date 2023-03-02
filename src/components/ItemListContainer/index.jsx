import "./container.css";

const Saludo = () => {
    function mostrarAlerta() {
      alert("Hola, como estas?")
    }
    
    return (
    <div>
      <Description alerta={mostrarAlerta} />
    </div>
    );
  }
  
  function Description({ alerta }) {
    return (
      <div className="fondo d-flex justify-content-center pt-5 pb-5">
        <button className="boton" onClick={alerta}>Click me</button>
      </div>
    );
  }
  
export default Saludo




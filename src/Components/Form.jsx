import { useState } from "react";
import Error from "./Error";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlerFormulario = (event) => {
    event.preventDefault();

    if (nombre.trim().length < 5 || apellido.trim() < 5 || email.length < 6 ) {
      setErrorMessage("Los datos ingresados no son correctos, vuelva a intentarlo, muchas gracias.");
    } else {
      setErrorMessage(`Gracias ${nombre} ${apellido}, se envio un email con los siguientes pasos`);
    }
  };



  return (
    <div>
      <form onSubmit={handlerFormulario}>
        <div>
          <input
            id="nombre"
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="form-input-tag"
          />
        </div>
        <div>
          <input
            id="apellido"
            type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className="form-input-tag"
          />
        
          <input
            id="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input-tag"
          />
        </div>
        <input className="btnForm" type="submit" />
      </form>
      <div className="error">
    {errorMessage ? <Error message={errorMessage}/> : null }

      </div>
      
    </div>
  );
};

export default Form;
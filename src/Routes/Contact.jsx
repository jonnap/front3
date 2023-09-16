import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-data">
        <h1 className="title">Contactenos</h1>
      <h2 className='subtitle'> Ingrese sus datos a continuacion</h2>
      <p>Nos comunicaremos con usted pronto</p>
      </div>
      
      <div className="contact-form">
         <Form />
      </div>
     
    </div>
  )
}

export default Contact
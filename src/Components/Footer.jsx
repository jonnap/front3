import { useContext } from 'react'
import { ThemeContext } from '../Components/ThemeContextProvider'

const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <footer className={`footer ${theme}`}>
    
           <p>Powered by</p>
           
      
   

      
      <img src="./images/daruma-nepal.png" alt='daruma-nepal' className='foto' />

      <div className="icon-container">
        <img
          src="./images/facebook.png"
          alt="Logo facebook"
          className="icono"
        />
        <img
          src="./images/instagram.png"
          alt="Logo facebook"
          className="icono"
        />
        <img
          src="./images/whatsapp.png"
          alt="Logo facebook"
          className="icono"
        />
        <img
          src="./images/tiktok.png"
          alt="Logo facebook"
          className="icono"
        />
      </div>
    </footer>
  )
}

export default Footer
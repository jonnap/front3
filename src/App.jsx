import { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Routes/Home"
import Navbar from "./Components/Navbar"
import Detail from "./Routes/Detail"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import Footer from "./Components/Footer"
import { NoPage } from "./Components/NoPage"
import { ThemeContext } from "./Components/ThemeContextProvider"


function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dentist/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
      <Footer/>
    </div>
  )
}
 

      

      


      export default App
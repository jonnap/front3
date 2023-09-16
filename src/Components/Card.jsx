import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Components/ThemeContextProvider";

const Card = ({ name, username, id }) => {
  const { theme } = useContext(ThemeContext);

  const addFav = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push({ name, username, id });
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <div className={`card ${theme}`}>
      <img src="https://img.freepik.com/vector-premium/perfil-medico-retrato-masculino-femenino-vector-diseno-plano_617655-11.jpg?w=826" alt="foto-dentista" className="imagen-card" />
      <div>
        <h3>{name}</h3>
        <h4>{username}</h4>
        <h5>{id}</h5>
      </div>
      <Link to={`/dentist/${id}`}>
        <button className="btn-detail">Detalles</button>
      </Link>
      <button onClick={addFav} className="favButton">★</button>
    </div >
  )
}

export default Card
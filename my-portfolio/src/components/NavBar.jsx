import {Link} from "react-router-dom"
import icon from "../../images/favicon1/favicon.ico"
import "./NavBar.css"
const NavBar = () => {
  // fazer a home agora
  return (
    <nav>
      <div className="nav-icon">
        <Link to="/">
           <img src={icon} alt="icon-image" className="icon" />
        </Link>
      </div>
      <div className="nav-links">
        <h2><a href="#" target="_blank">GitHub</a></h2>
        <h2><a href="#" target="_blank">LinkedIn</a></h2>
        <h2><Link to="/">Sobre Mim</Link></h2>
        <h2><Link to="/">Contatos</Link></h2>
      </div>
    </nav>
  )
}

export default NavBar
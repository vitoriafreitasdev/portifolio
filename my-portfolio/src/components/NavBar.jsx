
import {Link} from "react-router-dom"
import icon from "../../images/favicon1/favicon.ico"
import menu from "../../images/menu.jpg"
import "./NavBar.css"
import { useState } from "react"
const NavBar = () => {
  const [open, setOpen] = useState(false)
  const handleMenu = () => {
    setOpen(!open)
  }
  // depois de fazer o linkedIn colocar ai embaixo o link 
  return (
    
      <nav>
        <div className="nav-icon">
          <Link to="/">
            <img src={icon} alt="icon-image" className="icon" />
          </Link>
        </div>
        <div className={`nav-links ${open ? "show" : ""}`}>
          <h2 className="linkh2"><a href="https://github.com/vitoriafreitasdev" target="_blank">GitHub</a></h2>
          <h2 className="linkh2"><a href="#" target="_blank">LinkedIn</a></h2>
          <h2 className="linkh2"><Link to="/sobremim">+Sobre Mim</Link></h2>
          <h2 className="linkh2"><Link to="/contatos">Contatos</Link></h2>
        </div>
        <div className="div-menu">
          <h2 className="menu" onClick={handleMenu}>
          <img className="menuImg" src={menu} alt="" />
        </h2>
        </div>
    </nav>

  )
}

export default NavBar
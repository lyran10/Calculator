import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from "react-router-dom"
import "./style.css"
import {GiHamburgerMenu } from "react-icons/gi"
import {useState} from "react"

export const NavBar = () => {// This is the navbar component where it will display the Home and favourites link. Used react-router-dom. 
  const [menu,setMenu] = useState("responsive-menu")

  const handleClick = () => {
    console.log("yes")
    menu === "responsive-menu" ? setMenu("responsive-menuBack"):setMenu("responsive-menu")
  }

  return(
    <div>
      <nav className="navbar navbar-light p-3 pe-5 ps-5">
        <div className="container-fluid position-relative">
          <a className="navbar-brand fw-bolder">Weather</a>
          <div className="d-flex gap-5 position-relative">
            <Link className="navLink" to="/">Home</Link>
            <Link className="navLink" to="/favourites">Favourites</Link>
          </div>
          <div className="hamIcon">
          <GiHamburgerMenu onClick = {handleClick}/>
          </div>
        </div>
    </nav>
    <div className={`d-flex flex-column gap-3 justify-content-center ${menu} position-absolute bg-light`} style={{height :"100%",width:"100%",border:"solid black 1px"}}>
            <Link className="hamNavLink" onClick={() => {setMenu("responsive-menu")}} to="/">Home</Link>
            <Link className="hamNavLink" onClick={() => {setMenu("responsive-menu")}} to="/favourites">Favourites</Link>
    </div>
    </div>
  )
}
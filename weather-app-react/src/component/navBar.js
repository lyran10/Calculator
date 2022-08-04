import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from "react-router-dom"
import "./style.css"

export const NavBar = () => {

  return(
    <div>
      <nav className="navbar navbar-light p-3 pe-5 ps-5">
        <div className="container-fluid">
          <a className="navbar-brand fw-bolder">Weather</a>
          <div className="d-flex gap-5">
            <Link className="navLink" to="/">Home</Link>
            <Link className="navLink" to="/favourites">Favourites</Link>
          </div>
        </div>
    </nav>
    </div>
  )
}
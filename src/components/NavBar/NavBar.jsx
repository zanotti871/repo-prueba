/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ShopSport</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">REMERAS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">ZAPA</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">BOTINES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><CartWidget/></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default NavBar
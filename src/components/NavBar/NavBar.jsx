/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">ShopSport</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">REMERAS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">ZAPA</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">BOTINES</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><CartWidget/></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default NavBar
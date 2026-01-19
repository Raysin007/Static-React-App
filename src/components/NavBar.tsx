import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


interface NavBarProps {
  imageSrcPath: string;
  cartCount: number;
}

function Navbar({ imageSrcPath,cartCount }: NavBarProps) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-black shadow"
      style={{
        fontFamily: "'Smooch Sans', sans-serif",
        letterSpacing: 3,
        position: "fixed",
        top : 0,
        width: "100%",
        zIndex: 1,
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={imageSrcPath}
            width="100"
            height="100"
            className="d-inline-block align-middle me-2"
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse" // Changed from data-toggle
          data-bs-target="#navbarSupportedContent" // Changed from data-target
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{
              fontWeight: 700,
              fontSize: 30,
            }}
          >
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown" // Changed from data-toggle
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Pants
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Footwear
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Shirts
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="mainIcons">
            <a href="#" className="user">
              <FontAwesomeIcon icon={faUser}  style={{
                color:"white"}}/>
            </a>
            <a href="#" className="cart"> 
              <FontAwesomeIcon icon={faCartShopping}  style={{
                color:"white"}}/></a>
          
          <div className="cartNum">
            <a>{cartCount}</a>
          </div>
          </div>
          <div className="searchBar">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                style={{
                  backgroundColor: "grey",
                  color: "white",
                }}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

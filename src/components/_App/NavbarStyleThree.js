import * as React from "react"
import Container from "react-bootstrap/Container"
import { Link } from "gatsby"

import Logo from "../../images/white-logo.png" 

const NavbarStyleThree = () => {
  const [menu, setMenu] = React.useState(true)

  const toggleNavbar = () => {
    setMenu(!menu)
  }

  React.useEffect(() => {
    let elementId = document.getElementById("navbar")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("sticky")
      } else {
        elementId.classList.remove("sticky")
      }
    })
  })

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <>
      <div id="navbar" className="navbar-area bg-black">
        <Container fluid>
          <nav className="navbar navbar-expand-lg">
            <Link to="/" className="navbar-brand">
              <img src={Logo} alt="logo" />
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false" 
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne}>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/product"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    Product
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/features"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    Features
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/pricing"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    Pricing
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="#"
                    onClick={e => e.preventDefault()}
                    className="dropdown-toggle nav-link"
                  >
                    About Us
                  </Link>

                  <ul className="dropdown-menu">
                    {/* <li className="nav-item">
                      <Link
                        to="/about"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        The Company
                      </Link>
                    </li> */}

  

                    <li className="nav-item">
                      <Link
                        to="/faq"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        FAQ's
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/privacy-policy"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Privacy Policy
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/terms-conditions"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    to="/contact"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>

              {/* Others option */}
              <div className="others-option d-flex align-items-center">
                <div className="option-item">
                  <Link to="/profile-authentication" className="link-btn">
                    Login
                  </Link>
                </div>
                <div className="option-item">
                  <Link
                    to="/profile-authentication"
                    className="default-btn two"
                  >
                    Sign Up<i className="flaticon-plus-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </Container>
      </div>
    </>
  )
}

export default NavbarStyleThree

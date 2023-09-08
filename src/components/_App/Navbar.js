import * as React from "react"
import Container from "react-bootstrap/Container"
import { Link } from "gatsby"

import Logo from "../../images/logo.png"

const Navbar = () => {
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
      <div id="navbar" className="navbar-area">
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
                    to="#"
                    onClick={e => e.preventDefault()}
                    className="dropdown-toggle nav-link"
                  >
                    Demos
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        to="/"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        AI Integrated Design Tool
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/index-2"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Background Remover Tool
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/index-3"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Image Inhancer
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/index-4"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Email Marketing Image
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/index-5"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Team Collaboration
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/index-6"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Pattern Creator
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    to="#"
                    onClick={e => e.preventDefault()}
                    className="dropdown-toggle nav-link"
                  >
                    Services
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        to="/services"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Services
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/services/service-details"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Service Details
                      </Link>
                    </li>
                  </ul>
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
                    to="#"
                    onClick={e => e.preventDefault()}
                    className="dropdown-toggle nav-link"
                  >
                    Pages
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        to="#"
                        onClick={e => e.preventDefault()}
                        className="dropdown-toggle nav-link"
                      >
                        About Us
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            to="/about"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            About Us v1
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            to="/about-2"
                            activeClassName="active"
                            onClick={toggleNavbar}
                            className="nav-link"
                          >
                            About Us v2
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/team"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Team
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/integration"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Integration
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/how-it-works"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        How It Works
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
                        to="/testimonials"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Testimonials
                      </Link>
                    </li>

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
                        to="/profile-authentication"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        My Account
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

                    <li className="nav-item">
                      <Link
                        to="/404"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        404 Error Page
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link
                    to="#"
                    onClick={e => e.preventDefault()}
                    className="dropdown-toggle nav-link"
                  >
                    Blog
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        to="/blog"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Blog Grid
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/blog/blog-right-sidebar"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Blog Right Sidebar
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/blog/blog-details"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Blog Details
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
                    Sign Up For Free <i className="flaticon-plus-1"></i>
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

export default Navbar

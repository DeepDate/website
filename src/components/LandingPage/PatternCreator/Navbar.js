import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import { Link } from "gatsby"
import Modal from "react-bootstrap/Modal"
import MyAccount from "./ProfileAuthentication/MyAccount"

import Logo from "../../../images/logo.png"

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

  // Modal
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <div id="navbar" className="navbar-area">
        <Container fluid>
          <nav className="navbar navbar-expand-lg">
            <Link to="#home" className="navbar-brand">
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
                        to="/index-7"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        AI Integrated Design Tool
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/index-8"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Background Remover Tool
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/index-9"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Image Inhancer
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/index-10"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Email Marketing Image
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/index-11"
                        activeClassName="active"
                        onClick={toggleNavbar}
                        className="nav-link"
                      >
                        Team Collaboration
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        to="/index-12"
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
                    to="#features"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    Features
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="#howItWorks"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    How It Works
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="#pricing"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    Pricing
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="#integration"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    Integration
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="#blog"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    Blog
                  </Link>
                </li>
              </ul>

              {/* Others option */}
              <div className="others-option d-flex align-items-center">
                <div className="option-item">
                  <button
                    type="button"
                    className="link-btn two"
                    onClick={handleShow}
                  >
                    Login
                  </button>
                </div>
                <div className="option-item">
                  <button
                    type="button"
                    className="default-btn three"
                    onClick={handleShow}
                  >
                    Sign Up For Free <i className="flaticon-plus-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </Container>
      </div>

      {/* Profile Authentication Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="profileAuthenticationModal"
      >
        <Modal.Header closeButton></Modal.Header>

        {/* MyAccount */}
        <MyAccount />
      </Modal>
    </>
  )
}

export default Navbar

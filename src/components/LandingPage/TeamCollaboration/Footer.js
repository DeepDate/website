import * as React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import whiteLogo from "../../../images/logo.png"

const socialLinks = [
  {
    icon: "flaticon-facebook-app-symbol",
    url: "https://www.facebook.com/",
  },
  {
    icon: "flaticon-twitter",
    url: "https://www.twitter.com/",
  },
  {
    icon: "flaticon-instagram-1",
    url: "https://www.instagram.com/",
  },
  {
    icon: "flaticon-linkedin",
    url: "https://www.linkedin.com/",
  },
]

const pageLinks = [
  {
    text: "Blog",
    url: "#blog",
  },
  {
    text: "About Us",
    url: "#about",
  },
  {
    text: "Features",
    url: "#features",
  },
  {
    text: "Pricing",
    url: "#pricing",
  },
  {
    text: "How It Works",
    url: "#howItWorks",
  },
]

const Footer = () => {
  return (
    <>
      <div className="footer-area bg-white pt-100 pb-75">
        <Container>
          <Row className="justify-content-center">
            <Col
              lg={3}
              md={6}
              sm={6}
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
              data-aos-once="false"
            >
              <div className="single-footer-widget mb-25">
                <Link to="/" className="logo d-inline-block">
                  <img src={whiteLogo} alt="White Logo" />
                </Link>

                <p>
                  Lorem ipsum dolor sit amet, cons ect adipiscing elit, contised
                  do eius mod tempor incididunt fructue.
                </p>

                <ul className="social-links">
                  {socialLinks &&
                    socialLinks.map((value, i) => (
                      <li key={i}>
                        <a
                          href={value.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className={value.icon}></i>
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </Col>

            <Col
              lg={3}
              md={6}
              sm={6}
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="false"
            >
              <div className="single-footer-widget mb-25">
                <h4>About Us</h4>
                <ul className="custom-links">
                  {pageLinks &&
                    pageLinks.map((value, i) => (
                      <li key={i}>
                        <Link to={value.url}>{value.text}</Link>
                      </li>
                    ))}
                </ul>
              </div>
            </Col>

            <Col
              lg={3}
              md={6}
              sm={6}
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="300"
              data-aos-once="false"
            >
              <div className="single-footer-widget mb-25">
                <h4>Contact Us</h4>
                <ul className="footer-contact-info">
                  <li>
                    <span>Address:</span> 2750 Quadra Street Victoria, Canada.
                  </li>
                  <li>
                    <span>Email:</span>{" "}
                    <a href="mailto:hello@timo.com">hello@timo.com</a>
                  </li>
                  <li>
                    <span>Phone:</span>{" "}
                    <a href="tel:+14854560102">+1-485-456-0102</a>
                  </li>
                  <li>
                    <span>Fax:</span>{" "}
                    <a href="tel:+107854578964">+1-0785 4578964</a>
                  </li>
                </ul>
              </div>
            </Col>

            <Col
              lg={3}
              md={6}
              sm={6}
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="400"
              data-aos-once="false"
            >
              <div className="single-footer-widget mb-25">
                <h4>Subscribe Newsletter</h4>
                <form>
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Email address"
                  />
                  <button type="submit" className="default-btn three">
                    Subscribe Newsletter
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Copyright */}
      <div className="copyright-area bg-white">
        <Container>
          <p>
            © <span>Timo</span> is Proudly Owned by{" "}
            <a
              href="https://envytheme.com/"
              target="_blank"
              rel="noreferrer"
            >
              EnvyTheme
            </a>
          </p>
        </Container>
      </div>
    </>
  )
}

export default Footer

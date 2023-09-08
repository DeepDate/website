import * as React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import teamImg1 from "../../images/team/team1.jpg"
import teamImg2 from "../../images/team/team2.jpg"
import teamImg3 from "../../images/team/team3.jpg"
import teamImg4 from "../../images/team/team4.jpg"

const TeamMembers = () => {
  return (
    <>
      <div className="team-area pb-75">
        <Container>
          <div
            className="section-title"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <span className="sub-title">Team</span>
            <h2>
              Meet With Our <span>Team</span> Member
            </h2>
          </div>

          <Row className="justify-content-center">
            <Col
              lg={3}
              md={6}
              sm={6}
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-team-member mb-25">
                <img src={teamImg1} alt="member" />
                <span>CEO & Founder</span>
                <h4>Olivia Emma</h4>
                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                      <i className="flaticon-facebook-app-symbol"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                      <i className="flaticon-instagram-1"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                      <i className="flaticon-linkedin"></i>
                    </a>
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
              data-aos-delay="200"
            >
              <div className="single-team-member mb-25">
                <img src={teamImg2} alt="member" />
                <span>Web Developer</span>
                <h4>Lucas Oliver</h4>
                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                      <i className="flaticon-facebook-app-symbol"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                      <i className="flaticon-instagram-1"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                      <i className="flaticon-linkedin"></i>
                    </a>
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
              data-aos-delay="300"
            >
              <div className="single-team-member mb-25">
                <img src={teamImg3} alt="member" />
                <span>Web Designer</span>
                <h4>Amelia Iva</h4>
                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                      <i className="flaticon-facebook-app-symbol"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                      <i className="flaticon-instagram-1"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                      <i className="flaticon-linkedin"></i>
                    </a>
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
            >
              <div className="single-team-member mb-25">
                <img src={teamImg4} alt="member" />
                <span>Art Director</span>
                <h4>Liam Noah</h4>
                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                      <i className="flaticon-facebook-app-symbol"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                      <i className="flaticon-instagram-1"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                      <i className="flaticon-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default TeamMembers

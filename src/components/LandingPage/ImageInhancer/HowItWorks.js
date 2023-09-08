import * as React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import howItWorkImg1 from "../../../images//how-it-works/how-it-work4.jpg"
import howItWorkImg2 from "../../../images//how-it-works/how-it-work5.jpg"
import howItWorkImg3 from "../../../images//how-it-works/how-it-work6.jpg"

const HowItWorks = () => {
  return (
    <>
      <div id="howItWorks" className="how-it-works-area bg-252029 bg-half-color position-relative z-index1 pt-100 pb-75">
        <Container>
          <div 
            className="section-title text-white"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
            data-aos-once="false"
          >
            <span className="sub-title">How It Works</span>
            <h2>
              Here How It <span>Works</span>
            </h2>
            <p>
              You’re busy, so we’ll make this easy. Timo is constantly growing
              just like the possibilities of what you can achieve.
            </p>
          </div>

          <Row className="justify-content-center">
            <Col 
              lg={4} md={6} sm={6}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
              data-aos-once="false"
            >
              <div className="how-it-works-box text-white mb-25">
                <img
                  src={howItWorkImg1}
                  alt="how-it-works"
                />
                <h3>
                  Step <strong>- 01</strong>
                </h3>
                <p>
                  Open an account and select an artboard for creating a 3d art.
                  You can select from the ready template for your first work.
                </p>
              </div>
            </Col>

            <Col 
              lg={4} md={6} sm={6}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="false"
            >
              <div className="how-it-works-box text-white mb-25">
                <img
                  src={howItWorkImg2}
                  alt="how-it-works"
                />
                <h3>
                  Step <strong>- 02</strong>
                </h3>
                <p>
                  Follow the instruction and watch all youtube video to get a
                  clear idea about Timo and start your first 3d design project.
                </p>
              </div>
            </Col>

            <Col 
              lg={4} md={6} sm={6}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
              data-aos-once="false"
            >
              <div className="how-it-works-box text-white mb-25">
                <img
                  src={howItWorkImg3}
                  alt="how-it-works"
                />
                <h3>
                  Step <strong>- 03</strong>
                </h3>
                <p>
                  Save file in web and export in your desired format. In your
                  free trial you can only get the png file of your design.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default HowItWorks

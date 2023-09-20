import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import howItWorkImg1 from "../../images//how-it-works/how-it-work1.jpg";
import howItWorkImg2 from "../../images//how-it-works/how-it-work2.jpg";
import howItWorkImg3 from "../../images//how-it-works/how-it-work3.jpg";

const HowItWorks = () => {
  return (
    <>
      <div className="how-it-works-area bg-252029 bg-half-color position-relative z-index1 pt-100 pb-75">
        <Container>
          <div
            className="section-title text-white"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
            data-aos-once="false"
          >
            <span className="sub-title">Revolutionary experience</span>
            <h2>
              How It <span>Works</span>
            </h2>
            <p>
              <strong>Imagine your personal AI chatbot</strong>, who knows you
              as good as an old school friend, or even better...
            </p>
          </div>

          <Row className="justify-content-center">
            <Col
              lg={4}
              md={6}
              sm={6}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
              data-aos-once="false"
            >
              <div className="how-it-works-box text-white mb-25">
                <img src={howItWorkImg1} alt="how-it-works" />
                <h3>
                  <strong>
                    AI that is<br></br>inquisitive and smart
                  </strong>
                </h3>
                <p>
                  Capable of chatting on your behalf saving your a lot of time.
                </p>
              </div>
            </Col>

            <Col
              lg={4}
              md={6}
              sm={6}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="false"
            >
              <div className="how-it-works-box text-white mb-25">
                <img src={howItWorkImg2} alt="how-it-works" />
                <h3>
                  <strong>
                    AI that knows
                    <br></br>what to ask
                  </strong>
                </h3>
                <p>
                  Going as deep into the conversations as needed, while keeping
                  your secrets, until you are ready to reveal them.
                </p>
              </div>
            </Col>

            <Col
              lg={4}
              md={6}
              sm={6}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
              data-aos-once="false"
            >
              <div className="how-it-works-box text-white mb-25">
                <img src={howItWorkImg3} alt="how-it-works" />
                <h3>
                  <strong>
                    AI that tells you
                    <br></br>to continue or stop
                  </strong>
                </h3>
                <p>
                  Advising on how good the match is and if you should go to the
                  next level or leave it
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HowItWorks;

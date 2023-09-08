import * as React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import demoWorkImg1 from "../../images/demo-work/demo-work1.jpg"
import demoWorkImg2 from "../../images/demo-work/demo-work2.jpg"
import demoWorkImg3 from "../../images/demo-work/demo-work3.jpg"
import demoWorkImg4 from "../../images/demo-work/demo-work4.jpg"
import demoWorkImg5 from "../../images/demo-work/demo-work5.jpg"
import demoWorkImg6 from "../../images/demo-work/demo-work6.jpg"
import demoWorkImg7 from "../../images/demo-work/demo-work7.jpg"

const DemoWorks = () => {
  return (
    <>
      <div className="demo-work-area position-relative z-index2 pt-100">
        <Container>
          <div
            className="section-title"
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-duration="1200"
            data-aos-once="false"
          >
            <span className="sub-title">Demo Work</span>
            <h2>
              Revamp Your <span>Creativity</span> & <span>Efficiency</span>
            </h2>
          </div>

          <Row className="justify-content-center">
            <div className="col">
              <div
                className="image text-center mt-25"
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <img src={demoWorkImg1} alt="Demo work" />
              </div>
            </div>

            <div className="col">
              <div
                className="image text-center mt-25"
                data-aos="fade-in"
                data-aos-delay="300"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <img src={demoWorkImg2} alt="Demo work" />
              </div>
            </div>

            <div className="col">
              <div
                className="image text-center mt-25"
                data-aos="fade-in"
                data-aos-delay="400"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <img src={demoWorkImg3} alt="Demo work" />
              </div>
            </div>

            <div className="col">
              <div
                className="image text-center mt-25"
                data-aos="fade-in"
                data-aos-delay="500"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <img src={demoWorkImg4} alt="Demo work" />
              </div>
            </div>

            <div className="col">
              <div
                className="image text-center mt-25"
                data-aos="fade-in"
                data-aos-delay="600"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <img src={demoWorkImg5} alt="Demo work" />
              </div>
            </div>

            <div className="col">
              <div
                className="image text-center mt-25"
                data-aos="fade-in"
                data-aos-delay="700"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <img src={demoWorkImg6} alt="Demo work" />
              </div>
            </div>

            <div className="col">
              <div
                className="image text-center mt-25"
                data-aos="fade-in"
                data-aos-delay="800"
                data-aos-duration="1200"
                data-aos-once="false"
              >
                <img src={demoWorkImg7} alt="Demo work" />
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default DemoWorks

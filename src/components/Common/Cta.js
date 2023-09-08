import * as React from "react" 
import { Link } from "gatsby"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Cta = () => {
  return (
    <>
      <div className="cta-area">
        <Container>
          <div className="cta-inner-box position-relative z-index1">
            <Row className="align-items-center">
              <Col
                lg={9}
                md={12} 
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
                data-aos-once="false"
              >
                <h2>
                  <span>Book</span> a complimentary community{" "}
                  <span>consultation</span>
                </h2>
              </Col>

              <Col
                lg={3}
                md={12} 
                className="text-lg-end"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
                data-aos-once="false"
              >
                <Link to="/contact" className="default-btn three">
                  Schedule Now <i className="flaticon-plus-1"></i>
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Cta

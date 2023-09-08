import * as React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import serviceDetailsImg from "../../images/services/service1.jpg"
import serviceImg1 from "../../images/services/service2.jpg"
import serviceImg2 from "../../images/services/service3.jpg"
import serviceImg3 from "../../images/services/service4.jpg"

const ServiceDetailsContent = () => {
  return (
    <>
      <div className="service-details-area ptb-100">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={12}>
              <div className="service-details-desc">
                <div className="image">
                  <img src={serviceDetailsImg} alt="service-details" />
                </div>

                <h2>Brand Identity Design</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Pulvinar quam commodo
                  nisl suspendisse auctor gravida mauris. A quis quis amet
                  aliquam tristique sit urna. Diam porttitor sapien lobortis
                  nunc dignissim id adipiscing lacinia mattis.{" "}
                  <strong>Pellentesque</strong> imperdiet ut id consequat elit
                  urna. Neque feugiat nunc sit ultrices. Leo amet luctus elemenm
                  donecgrcc purus. Dui <i>ultrices gravida</i> in vitae porta
                  justo. In suscipit <u>scelerisque</u> condimentum consequat.
                </p>
                <p>
                  Sodales nisi scelerisque mollis ut <strong>malesuada</strong>{" "}
                  hendrerit sem elit lacinia. Penatibus molestie tempor odio
                  aliquam aliquet metus duis rhoncus dolor. Nec in{" "}
                  <i>fermentum</i> gravida posuere. Ut lobortis commodo faucibus
                  tincidunt nascetur urna. Nunc quis consectetur elit nisi nec
                  convallis convallis et.
                </p>
                <p>
                  Sed pharetra pulvinar magna posuere. Ornare nisi nulla est
                  cursus. Vitae suspendisse amet massa orci quis donec nulla.
                  Est porttitor eget lectus nunc amet morbi nunc nisl proin.
                  Ornare dui ac in amet. Gravida tincidunt feugiat phasellus
                  habitant. Tincidunt mi ac.
                </p>

                <div className="row align-items-center mt-25">
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="icon-box mb-25">
                      <i className="flaticon-check-mark-1"></i>
                      <h5 className="mb-0 mt-0">Centralized database</h5>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="icon-box mb-25">
                      <i className="flaticon-check-mark-1"></i>
                      <h5 className="mb-0 mt-0">Real-time integration</h5>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="icon-box mb-25">
                      <i className="flaticon-check-mark-1"></i>
                      <h5 className="mb-0 mt-0">Secure server system</h5>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="icon-box mb-25">
                      <i className="flaticon-check-mark-1"></i>
                      <h5 className="mb-0 mt-0">Rapid deployment</h5>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="icon-box mb-25">
                      <i className="flaticon-check-mark-1"></i>
                      <h5 className="mb-0 mt-0">Rich dashboards</h5>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="icon-box mb-25">
                      <i className="flaticon-check-mark-1"></i>
                      <h5 className="mb-0 mt-0">Time & cost reduction</h5>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center mt-10">
                  <div className="col-6">
                    <div className="mb-25 text-center">
                      <img src={serviceImg1} alt="service-details" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-25 text-center">
                      <img src={serviceImg2} alt="service-details" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-25 text-center">
                      <img src={serviceImg3} alt="service-details" />
                    </div>
                  </div>
                </div>

                <p>
                  Sodales nisi scelerisque mollis ut malesuada hendrerit sem
                  elit lacinia. Penatibus molestie tempor odio aliquam aliquet
                  metus duis rhoncus dolor. Nec in fermentum gravida posuere. Ut
                  lobortis commodo faucibus tincidunt nascetur urna. Nunc quis
                  consectetur elit nisi nec convallis convallis et.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ServiceDetailsContent

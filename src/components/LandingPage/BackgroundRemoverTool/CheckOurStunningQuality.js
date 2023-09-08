import * as React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import qualityCheckImg1 from "../../../images/quality-checker/quality-check11.jpg"
import qualityCheckImg2 from "../../../images/quality-checker/quality-check12.jpg"
import qualityCheckImg3 from "../../../images/quality-checker/quality-check13.jpg"
import qualityCheckImg4 from "../../../images/quality-checker/quality-check14.jpg"
import qualityCheckImg5 from "../../../images/quality-checker/quality-check15.jpg"
import qualityCheckImg6 from "../../../images/quality-checker/quality-check16.jpg"
import qualityCheckImg7 from "../../../images/quality-checker/quality-check17.jpg"
import qualityCheckImg8 from "../../../images/quality-checker/quality-check18.jpg"
import qualityCheckImg9 from "../../../images/quality-checker/quality-check19.jpg"
import qualityCheckImg10 from "../../../images/quality-checker/quality-check20.jpg"
import qualityCheckImg11 from "../../../images/quality-checker/quality-check21.jpg"
import qualityCheckImg12 from "../../../images/quality-checker/quality-check22.jpg"
import qualityCheckImg13 from "../../../images/quality-checker/quality-check23.jpg"
import qualityCheckImg14 from "../../../images/quality-checker/quality-check24.jpg"
import qualityCheckImg15 from "../../../images/quality-checker/quality-check25.jpg"
import qualityCheckImg16 from "../../../images/quality-checker/quality-check26.jpg"
import qualityCheckImg17 from "../../../images/quality-checker/quality-check27.jpg"
import qualityCheckImg18 from "../../../images/quality-checker/quality-check28.jpg"
import qualityCheckImg19 from "../../../images/quality-checker/quality-check29.jpg"
import qualityCheckImg20 from "../../../images/quality-checker/quality-check30.jpg"

import shape1 from "../../../images/shape/shape1.png"
import shape2 from "../../../images/shape/shape2.png"

const CheckOurStunningQuality = () => {
  return (
    <>
      <div className="quality-checker-area position-relative z-index1 pt-100 pb-75">
        <Container>
          <div 
            className="section-title"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="100"
            data-aos-once="false"
          >
            <span className="sub-title">Quality Checker</span>
            <h2>
              <span>Check</span> Our <span>Stunning</span> Quality
            </h2>
          </div>

          <div 
            className="imageComparisonSlider mw-100"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="300"
            data-aos-once="false"
          >
            <Tabs>
              <TabList>
                <Tab>People</Tab>
                <Tab>Products</Tab>
                <Tab>Animals</Tab>
                <Tab>Cars</Tab>
                <Tab>Graphics</Tab>
              </TabList>

              <TabPanel>
                <Row className="justify-content-center">
                  <Col lg={3} md={3} sm={6} className="col-6">
                    <div className="quality-checker-box text-center mb-25">
                      <img src={qualityCheckImg1} alt="Quality checker" />
                      <h4 className="mb-0">Original</h4>
                    </div>
                  </Col>

                  <Col lg={3} md={3} sm={6} className="col-6">
                    <div className="quality-checker-box text-center mb-25">
                      <img src={qualityCheckImg2} alt="Quality checker" />
                      <h4 className="mb-0">Transparent</h4>
                    </div>
                  </Col>

                  <Col lg={3} md={3} sm={6} className="col-6">
                    <div className="quality-checker-box text-center mb-25">
                      <img src={qualityCheckImg3} alt="Quality checker" />
                      <h4 className="mb-0">Gradient BG</h4>
                    </div>
                  </Col>

                  <Col lg={3} md={3} sm={6} className="col-6">
                    <div className="quality-checker-box text-center mb-25">
                      <img src={qualityCheckImg4} alt="Quality checker" />
                      <h4 className="mb-0">Endless Possibilities</h4>
                    </div>
                  </Col>
                </Row>
              </TabPanel>

              <TabPanel>
                <Row className="justify-content-center">
                  <Col lg={3} md={3} sm={6} className="col-6">
                    <div className="quality-checker-box text-center mb-25">
                      <img src={qualityCheckImg5} alt="Quality checker" />
                      <h4 className="mb-0">Original</h4>
                    </div>
                  </Col>

                  <Col lg={3} md={3} sm={6} className="col-6">
                    <div className="quality-checker-box text-center mb-25">
                      <img src={qualityCheckImg6} alt="Quality checker" />
                      <h4 className="mb-0">Transparent</h4>
                    </div>
                  </Col>

                  <Col lg={3} md={3} sm={6} className="col-6">
                    <div className="quality-checker-box text-center mb-25">
                      <img src={qualityCheckImg7} alt="Quality checker" />
                      <h4 className="mb-0">Gradient BG</h4>
                    </div>
                  </Col>

                  <Col lg={3} md={3} sm={6} className="col-6">
                    <div className="quality-checker-box text-center mb-25">
                      <img src={qualityCheckImg8} alt="Quality checker" />
                      <h4 className="mb-0">Endless Possibilities</h4>
                    </div>
                  </Col>
                </Row>
              </TabPanel>

              <TabPanel>
                <Row className="justify-content-center">
                  <Col lg={3} md={3} sm={6} className="col-6">
                    <div className="quality-checker-box text-center mb-25">
                      <img src={qualityCheckImg9} alt="Quality checker" />
                      <h4 className="mb-0">Original</h4>
                    </div>
                  </Col>

                  <Col lg={3} md={3} sm={6} className="col-6">
                    <div className="quality-checker-box text-center mb-25">
                      <img
                        src={qualityCheckImg10}
                        alt="Quality checker"
                      />
                      <h4 className="mb-0">Transparent</h4>
                    </div>
                  </Col>

                  <Col lg={3} md={3} sm={6} className="col-6">
                    <div className="quality-checker-box text-center mb-25">
                      <img
                        src={qualityCheckImg11}
                        alt="Quality checker"
                      />
                      <h4 className="mb-0">Gradient BG</h4>
                    </div>
                  </Col>

                  <Col lg={3} md={3} sm={6} className="col-6">
                    <div className="quality-checker-box text-center mb-25">
                      <img
                        src={qualityCheckImg12}
                        alt="Quality checker"
                      />
                      <h4 className="mb-0">Endless Possibilities</h4>
                    </div>
                  </Col>
                </Row>
              </TabPanel>

              <TabPanel>
                <Row className="justify-content-center">
                  <Col lg={3} md={3} sm={6} className="col-6">
                    <div className="quality-checker-box text-center mb-25">
                      <img
                        src={qualityCheckImg13}
                        alt="Quality checker"
                      />
                      <h4 className="mb-0">Original</h4>
                    </div>
                  </Col>

                  <Col lg={3} md={3} sm={6} className="col-6">
                    <div className="quality-checker-box text-center mb-25">
                      <img
                        src={qualityCheckImg14}
                        alt="Quality checker"
                      />
                      <h4 className="mb-0">Transparent</h4>
                    </div>
                  </Col>

                  <Col lg={3} md={3} sm={6} className="col-6">
                    <div className="quality-checker-box text-center mb-25">
                      <img
                        src={qualityCheckImg15}
                        alt="Quality checker"
                      />
                      <h4 className="mb-0">Gradient BG</h4>
                    </div>
                  </Col>

                  <Col lg={3} md={3} sm={6} className="col-6">
                    <div className="quality-checker-box text-center mb-25">
                      <img
                        src={qualityCheckImg16}
                        alt="Quality checker"
                      />
                      <h4 className="mb-0">Endless Possibilities</h4>
                    </div>
                  </Col>
                </Row>
              </TabPanel>

              <TabPanel>
                <Row className="justify-content-center">
                  <Col lg={3} md={3} sm={6} className="col-6">
                    <div className="quality-checker-box text-center mb-25">
                      <img
                        src={qualityCheckImg17}
                        alt="Quality checker"
                      />
                      <h4 className="mb-0">Original</h4>
                    </div>
                  </Col>

                  <Col lg={3} md={3} sm={6} className="col-6">
                    <div className="quality-checker-box text-center mb-25">
                      <img
                        src={qualityCheckImg18}
                        alt="Quality checker"
                      />
                      <h4 className="mb-0">Transparent</h4>
                    </div>
                  </Col>

                  <Col lg={3} md={3} sm={6} className="col-6">
                    <div className="quality-checker-box text-center mb-25">
                      <img
                        src={qualityCheckImg19}
                        alt="Quality checker"
                      />
                      <h4 className="mb-0">Gradient BG</h4>
                    </div>
                  </Col>

                  <Col lg={3} md={3} sm={6} className="col-6">
                    <div className="quality-checker-box text-center mb-25">
                      <img
                        src={qualityCheckImg20}
                        alt="Quality checker"
                      />
                      <h4 className="mb-0">Endless Possibilities</h4>
                    </div>
                  </Col>
                </Row>
              </TabPanel>
            </Tabs>
          </div>
        </Container>

        {/* Shape Images */}
        <div className="shapes">
          <img src={shape1} className="shape1" alt="shape1" />
          <img src={shape2} className="shape2" alt="shape2" />
        </div>
      </div>
    </>
  )
}

export default CheckOurStunningQuality

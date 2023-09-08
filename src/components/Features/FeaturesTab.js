import * as React from "react"
import { Link } from "gatsby"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import toolboxImg1 from "../../images/toolbox/toolbox1.jpg"
import toolboxImg2 from "../../images/toolbox/toolbox2.jpg"
import toolboxImg3 from "../../images/toolbox/toolbox3.jpg"
import toolboxImg4 from "../../images/toolbox/toolbox4.jpg"
import toolboxImg5 from "../../images/toolbox/toolbox5.jpg"

import shapeImg1 from "../../images/shape/shape1.png"
import shapeImg2 from "../../images/shape/shape2.png"

const FeaturesTab = () => {
  return (
    <>
      <div id="features" className="features-area">
        <Container>
          <div
            className="section-title"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="100"
            data-aos-once="false"
          >
            <span className="sub-title">Features</span>
            <h2>
              Meet The <span>Toolbox</span>
            </h2>
            <p>
              Generate unlimited high quality background graphics for your
              clients and your products
            </p>
          </div>

          <div
            className="features-tabs position-relative z-index1"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="300"
            data-aos-once="false"
          >
            <Tabs>
              <TabList>
                <Tab>Geometric Pattern</Tab>
                <Tab>Seamless Pattern</Tab>
                <Tab>Blob Composition</Tab>
                <Tab>Mesh Gradients</Tab>
                <Tab>Doodle Background</Tab>
                <Tab>Blob Composition</Tab>
                <Tab>Mesh Gradients</Tab>
                <Tab>Doodle Background</Tab>
              </TabList>

              <TabPanel>
                <Row className="align-items-center">
                  <Col lg={6} md={12}>
                    <div className="image">
                      <img src={toolboxImg1} alt="toolbox" />
                    </div>
                  </Col>

                  <Col lg={6} md={12}>
                    <div className="content">
                      <h3>
                        <span>Geometric</span> Pattern Generator
                      </h3>
                      <p>
                        Create unique graphics for social media posts, landing
                        pages and branding in a few clicks. Then export them as
                        images, or even code (SVG & CSS).
                      </p>
                      <p>
                        3D opens a new door for creativity. A solid set of
                        features that will help you create your best designs.
                      </p>

                      <ul className="features-list">
                        <li>
                          <i className="flaticon-check-mark-1"></i> No design
                          skills required
                        </li>
                        <li>
                          <i className="flaticon-check-mark-1"></i> No credit
                          card required
                        </li>
                        <li>
                          <i className="flaticon-check-mark-1"></i> Free tier
                          included
                        </li>
                      </ul>

                      <Link
                        to="/profile-authentication"
                        className="default-btn"
                      >
                        Open Geometric Pattern Generator{" "}
                        <i className="flaticon-plus-1"></i>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </TabPanel>

              <TabPanel>
                <Row className="align-items-center">
                  <Col lg={6} md={12}>
                    <div className="image">
                      <img src={toolboxImg2} alt="toolbox" />
                    </div>
                  </Col>

                  <Col lg={6} md={12}>
                    <div className="content">
                      <h3>
                        <span>Seamless</span> Pattern Generator
                      </h3>
                      <p>
                        Create unique graphics for social media posts, landing
                        pages and branding in a few clicks. Then export them as
                        images, or even code (SVG & CSS).
                      </p>
                      <p>
                        3D opens a new door for creativity. A solid set of
                        features that will help you create your best designs.
                      </p>

                      <ul className="features-list">
                        <li>
                          <i className="flaticon-check-mark-1"></i> No design
                          skills required
                        </li>
                        <li>
                          <i className="flaticon-check-mark-1"></i> No credit
                          card required
                        </li>
                        <li>
                          <i className="flaticon-check-mark-1"></i> Free tier
                          included
                        </li>
                      </ul>

                      <Link
                        to="/profile-authentication"
                        className="default-btn"
                      >
                        Open Geometric Pattern Generator{" "}
                        <i className="flaticon-plus-1"></i>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </TabPanel>

              <TabPanel>
                <Row className="align-items-center">
                  <Col lg={6} md={12}>
                    <div className="image">
                      <img src={toolboxImg3} alt="toolbox" />
                    </div>
                  </Col>

                  <Col lg={6} md={12}>
                    <div className="content">
                      <h3>
                        <span>Blob</span> Composition Generator
                      </h3>
                      <p>
                        Create unique graphics for social media posts, landing
                        pages and branding in a few clicks. Then export them as
                        images, or even code (SVG & CSS).
                      </p>
                      <p>
                        3D opens a new door for creativity. A solid set of
                        features that will help you create your best designs.
                      </p>

                      <ul className="features-list">
                        <li>
                          <i className="flaticon-check-mark-1"></i> No design
                          skills required
                        </li>
                        <li>
                          <i className="flaticon-check-mark-1"></i> No credit
                          card required
                        </li>
                        <li>
                          <i className="flaticon-check-mark-1"></i> Free tier
                          included
                        </li>
                      </ul>

                      <Link
                        to="/profile-authentication"
                        className="default-btn"
                      >
                        Open Geometric Pattern Generator{" "}
                        <i className="flaticon-plus-1"></i>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </TabPanel>

              <TabPanel>
                <Row className="align-items-center">
                  <Col lg={6} md={12}>
                    <div className="image">
                      <img src={toolboxImg4} alt="toolbox" />
                    </div>
                  </Col>

                  <Col lg={6} md={12}>
                    <div className="content">
                      <h3>
                        <span>Mesh</span> Gradients Generator
                      </h3>
                      <p>
                        Create unique graphics for social media posts, landing
                        pages and branding in a few clicks. Then export them as
                        images, or even code (SVG & CSS).
                      </p>
                      <p>
                        3D opens a new door for creativity. A solid set of
                        features that will help you create your best designs.
                      </p>

                      <ul className="features-list">
                        <li>
                          <i className="flaticon-check-mark-1"></i> No design
                          skills required
                        </li>
                        <li>
                          <i className="flaticon-check-mark-1"></i> No credit
                          card required
                        </li>
                        <li>
                          <i className="flaticon-check-mark-1"></i> Free tier
                          included
                        </li>
                      </ul>

                      <Link
                        to="/profile-authentication"
                        className="default-btn"
                      >
                        Open Geometric Pattern Generator{" "}
                        <i className="flaticon-plus-1"></i>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </TabPanel>

              <TabPanel>
                <Row className="align-items-center">
                  <Col lg={6} md={12}>
                    <div className="image">
                      <img src={toolboxImg5} alt="toolbox" />
                    </div>
                  </Col>

                  <Col lg={6} md={12}>
                    <div className="content">
                      <h3>
                        <span>Doodle</span> Background Generator
                      </h3>
                      <p>
                        Create unique graphics for social media posts, landing
                        pages and branding in a few clicks. Then export them as
                        images, or even code (SVG & CSS).
                      </p>
                      <p>
                        3D opens a new door for creativity. A solid set of
                        features that will help you create your best designs.
                      </p>

                      <ul className="features-list">
                        <li>
                          <i className="flaticon-check-mark-1"></i> No design
                          skills required
                        </li>
                        <li>
                          <i className="flaticon-check-mark-1"></i> No credit
                          card required
                        </li>
                        <li>
                          <i className="flaticon-check-mark-1"></i> Free tier
                          included
                        </li>
                      </ul>

                      <Link
                        to="/profile-authentication"
                        className="default-btn"
                      >
                        Open Geometric Pattern Generator{" "}
                        <i className="flaticon-plus-1"></i>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </TabPanel>
            </Tabs>

            {/* Shape Images */}
            <div className="shapes">
              <img src={shapeImg1} className="shape1" alt="shape1" />
              <img src={shapeImg2} className="shape2" alt="shape2" />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default FeaturesTab

import * as React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import featureImg1 from "../../../images/core-features/feature1.gif"
import shapeImg from "../../../images/shape/shape3.png"

const CoreFeatures = () => {
  return (
    <>
      <div id="features" className="core-features-area pb-100 position-relative z-index1">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12}>
              <div
                className="core-features-images"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300"
                data-aos-once="false"
              >
                <img
                  src={featureImg1}
                  className="active"
                  id="cf-image1"
                  alt="Core feature"
                />
              </div>
            </Col>

            <Col lg={6} md={12}>
              <div
                className="core-features-content"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
                data-aos-once="false"
              >
                <span className="sub-title">Core Features</span>
                <h2>
                  Timo is the <span>Best Tool</span> to express your{" "}
                  <span>Creativity</span>
                </h2>
                <p>
                  3D opens a new door for creativity. A solid set of features
                  that will help you create your best designs.
                </p>

                <div className="core-features-list">
                  <Tabs>
                    <TabList>
                      <Tab>1</Tab>
                      <Tab>2</Tab>
                      <Tab>3</Tab>
                      <Tab>4</Tab>
                    </TabList>

                    <TabPanel>
                      <h4>Realtime Collaboration</h4>
                      <p>
                        Work with your team in real-time and set individual
                        permissions. 3D opens a new door for creativity. A solid
                        set of features that will help you create your best
                        designs.
                      </p>
                    </TabPanel>

                    <TabPanel>
                      <h4>3D Modeling</h4>
                      <p>
                        Work with your team in real-time and set individual
                        permissions. 3D opens a new door for creativity. A solid
                        set of features that will help you create your best
                        designs.
                      </p>
                    </TabPanel>

                    <TabPanel>
                      <h4>Animation</h4>
                      <p>
                        Work with your team in real-time and set individual
                        permissions. 3D opens a new door for creativity. A solid
                        set of features that will help you create your best
                        designs.
                      </p>
                    </TabPanel>

                    <TabPanel>
                      <h4>Interactive Experiences</h4>
                      <p>
                        Work with your team in real-time and set individual
                        permissions. 3D opens a new door for creativity. A solid
                        set of features that will help you create your best
                        designs.
                      </p>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="shapes">
          <img src={shapeImg} alt="shape3" className="shape3" />
        </div>
      </div>
    </>
  )
}

export default CoreFeatures

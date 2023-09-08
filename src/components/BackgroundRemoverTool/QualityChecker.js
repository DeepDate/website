import * as React from "react"
import Container from 'react-bootstrap/Container';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import qualityCheckImg1 from "../../images/quality-checker/quality-check1.jpg"
import qualityCheckImg2 from "../../images/quality-checker/quality-check2.jpg"
import qualityCheckImg3 from "../../images/quality-checker/quality-check3.jpg"
import qualityCheckImg4 from "../../images/quality-checker/quality-check4.jpg"
import qualityCheckImg5 from "../../images/quality-checker/quality-check5.jpg"
import qualityCheckImg6 from "../../images/quality-checker/quality-check6.jpg"
import qualityCheckImg7 from "../../images/quality-checker/quality-check7.jpg"
import qualityCheckImg8 from "../../images/quality-checker/quality-check8.jpg"
import qualityCheckImg9 from "../../images/quality-checker/quality-check9.jpg"
import qualityCheckImg10 from "../../images/quality-checker/quality-check10.jpg"

import shapeImg1 from "../../images/shape/shape1.png"
import shapeImg2 from "../../images/shape/shape2.png"

const QualityChecker = () => {
  return (
    <>
      <div className="quality-checker-area ptb-100">
        <Container>
          <div 
            className="section-title"
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-duration="1200"
            data-aos-once="false"
          >
            <span className="sub-title">Quality Checker</span>
            <h2>
              <span>Check</span> Our <span>Stunning</span> Quality
            </h2>
          </div>

          <div 
            className="imageComparisonSlider"
            data-aos="fade-in"
            data-aos-delay="200"
            data-aos-duration="1200"
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
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={qualityCheckImg1}
                      srcSet={qualityCheckImg1}
                      alt="Quality Checker"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={qualityCheckImg2}
                      srcSet={qualityCheckImg2}
                      alt="Quality Checker"
                    />
                  }
                />
              </TabPanel>

              <TabPanel>
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={qualityCheckImg3}
                      srcSet={qualityCheckImg3}
                      alt="Quality Checker"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={qualityCheckImg4}
                      srcSet={qualityCheckImg4}
                      alt="Quality Checker"
                    />
                  }
                />
              </TabPanel>

              <TabPanel>
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={qualityCheckImg5}
                      srcSet={qualityCheckImg5}
                      alt="Quality Checker"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={qualityCheckImg6}
                      srcSet={qualityCheckImg6}
                      alt="Quality Checker"
                    />
                  }
                />
              </TabPanel>

              <TabPanel>
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={qualityCheckImg7}
                      srcSet={qualityCheckImg7}
                      alt="Quality Checker"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={qualityCheckImg8}
                      srcSet={qualityCheckImg8}
                      alt="Quality Checker"
                    />
                  }
                />
              </TabPanel>

              <TabPanel>
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={qualityCheckImg9}
                      srcSet={qualityCheckImg9}
                      alt="Quality Checker"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={qualityCheckImg10}
                      srcSet={qualityCheckImg10}
                      alt="Quality Checker"
                    />
                  }
                />
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

export default QualityChecker

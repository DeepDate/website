import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper";
import Container from "react-bootstrap/Container"

import graphicalWorkImg1 from "../../../images/graphical-work/graphical-work1.jpg"
import graphicalWorkImg2 from "../../../images/graphical-work/graphical-work2.jpg"
import graphicalWorkImg3 from "../../../images/graphical-work/graphical-work3.jpg"
import graphicalWorkImg4 from "../../../images/graphical-work/graphical-work4.jpg"
import graphicalWorkImg5 from "../../../images/graphical-work/graphical-work5.jpg"
import graphicalWorkImg6 from "../../../images/graphical-work/graphical-work6.jpg"

const StartGraphicalWork = () => {
  return (
    <>
      <div className="graphical-work-area pb-75">
        <Container>
          <div className="section-title">
            <span className="sub-title">Start Graphical Work</span>
            <h2>
              <span>Pick</span> Design & Start <span>Doodling</span>
            </h2>
            <p>
              You’re busy, so we’ll make this easy. Timo is constantly growing
              just like the possibilities of what you can achieve.
            </p>
          </div>
        </Container>

        <Container fluid>
          <Swiper
            spaceBetween={25}
            navigation={true}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
              1400: {
                slidesPerView: 6,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="graphicalWorkSwiper"
          >
            <SwiperSlide>
              <div className="single-graphical-work-box">
                <img
                  src={graphicalWorkImg1}
                  alt="graphical-work"
                />
                <h4 className="mb-0">Radious Shape</h4>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-graphical-work-box">
                <img
                  src={graphicalWorkImg2}
                  alt="graphical-work"
                />
                <h4 className="mb-0">Text Shape</h4>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-graphical-work-box">
                <img
                  src={graphicalWorkImg3}
                  alt="graphical-work"
                />
                <h4 className="mb-0">Abstract Shape</h4>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-graphical-work-box">
                <img
                  src={graphicalWorkImg4}
                  alt="graphical-work"
                />
                <h4 className="mb-0">Mixtape Shape</h4>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-graphical-work-box">
                <img
                  src={graphicalWorkImg5}
                  alt="graphical-work"
                />
                <h4 className="mb-0">Letter Shape</h4>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-graphical-work-box">
                <img
                  src={graphicalWorkImg6}
                  alt="graphical-work"
                />
                <h4 className="mb-0">3D Shape</h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
    </>
  )
}

export default StartGraphicalWork

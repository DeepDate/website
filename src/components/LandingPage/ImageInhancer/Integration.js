import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"

import sketchImg from "../../../images/integration/slider/sketch.png"
import slackImg from "../../../images/integration/slider/slack.png"
import discordImg from "../../../images/integration/slider/discord.png"
import figmaImg from "../../../images/integration/slider/figma.png"
import googleImg from "../../../images/integration/slider/google.png"
import gitlabImg from "../../../images/integration/slider/gitlab.png"

const Integration = () => {
  return (
    <>
      <div id="integration" className="integration-area position-relative z-index1 bg-252029 pt-100 pb-75">
        <div className="container">
          <div className="section-title text-white" data-cue="fadeIn">
            <span className="sub-title">Integration</span>
            <h2>
              <span>Integration</span> that we’ve got
            </h2>
          </div>
        </div>

        <div className="container-fluid ps-0 pe-0">
          <Swiper
            spaceBetween={25}
            speed={11000}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              576: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
              },
              1400: {
                slidesPerView: 6,
              },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
	            pauseOnMouseEnter: false,
            }}
            modules={[Autoplay]}
            className="integrationSwiper mb-25"
          >
            <SwiperSlide>
              <div className="item text-center">
                <img src={sketchImg} alt="sketch" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item text-center">
                <img src={slackImg} alt="slack" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item text-center">
                <img src={discordImg} alt="discord" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item text-center">
                <img src={figmaImg} alt="figma" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item text-center">
                <img src={googleImg} alt="google" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item text-center">
                <img src={slackImg} alt="slack" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item text-center">
                <img src={gitlabImg} alt="gitlab" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Integration

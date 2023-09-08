import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"
import Container from "react-bootstrap/Container"

import userImg1 from "../../images/user/user8.jpg"
import userImg2 from "../../images/user/user9.jpg"
import userImg3 from "../../images/user/user10.jpg"
import userImg4 from "../../images/user/user8.jpg"

const TestimonialStyle5 = () => {
  return (
    <>
      <div className="testimonials-area pb-100">
        <Container>
          <div 
            className="section-title"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="100"
            data-aos-once="false"
          >
            <span className="sub-title">Testimonials</span>
            <h2>
              What <span>Our Customers</span> Say About Us
            </h2>
          </div>

          <Swiper
            spaceBetween={25}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Pagination, Autoplay]}
            className="testimonialsSwiper2"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="200"
            data-aos-once="false"
          >
            <SwiperSlide>
              <div className="single-testimonial-item mb-25">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="image">
                      <img src={userImg1} alt="user" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content">
                      <p>
                        “Timo has been design with true human connection in mind
                        - it's helping me scale.”
                      </p>
                    </div>
                    <div className="user-info">
                      <h4>Walter White</h4>
                      <span>Founder & CEO at Soapbox</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonial-item mb-25">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="image">
                      <img src={userImg2} alt="user" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content">
                      <p>
                        “Timo has been design with true human connection in mind
                        - it's helping me scale.”
                      </p>
                    </div>
                    <div className="user-info">
                      <h4>Alina Smith</h4>
                      <span>CEO at EnvyTheme</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonial-item mb-25">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="image">
                      <img src={userImg3} alt="user" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content">
                      <p>
                        “Timo has been design with true human connection in mind
                        - it's helping me scale.”
                      </p>
                    </div>
                    <div className="user-info">
                      <h4>Sarah Taylor</h4>
                      <span>Founder at ThemeForest</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonial-item mb-25">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="image">
                      <img src={userImg4} alt="user" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="content">
                      <p>
                        “Timo has been design with true human connection in mind
                        - it's helping me scale.”
                      </p>
                    </div>
                    <div className="user-info">
                      <h4>Sarah Taylor</h4>
                      <span>Founder at ThemeForest</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Container>
      </div>
    </>
  )
}

export default TestimonialStyle5

import * as React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper"
import Container from "react-bootstrap/Container"

import userImg1 from "../../images/user/user1.jpg"
import userImg2 from "../../images/user/user2.jpg"
import userImg3 from "../../images/user/user3.jpg"
import userImg4 from "../../images/user/user4.jpg"

const TestimonialStyle4 = () => {
  return (
    <>
      <div className="testimonials-area pb-100">
        <div className="testimonials-inner position-relative z-index1">
          <Container>
            <div className="testimonials-bg-shape2">
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

              <div
                className="testimonialsSwiper"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
                data-aos-once="false"
              >
                <Swiper
                  navigation={true}
                  autoplay={{
                    delay: 6500,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                  }}
                  modules={[Navigation, Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <p>
                      “Timo has been designed with true human connection in mind -
                      it's helping me scale not just community operations, but
                      also thoughtful leadership, gratitude. I am happy that I
                      chose Timo to work on my projects. I would definitely
                      recommend Timo”
                    </p>
                    <div className="info">
                      <h4>Walter White</h4>
                      <span>Founder & CEO at Soapbox</span>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <p>
                      “Timo has been designed with true human connection in mind -
                      it's helping me scale not just community operations, but
                      also thoughtful leadership, gratitude. I am happy that I
                      chose Timo to work on my projects. I would definitely
                      recommend Timo”
                    </p>
                    <div className="info">
                      <h4>Sarah Taylor</h4>
                      <span>Founder & CEO at EnvyTheme</span>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <p>
                      “Timo has been designed with true human connection in mind -
                      it's helping me scale not just community operations, but
                      also thoughtful leadership, gratitude. I am happy that I
                      chose Timo to work on my projects. I would definitely
                      recommend Timo”
                    </p>
                    <div className="info">
                      <h4>James Anderson</h4>
                      <span>Founder & CEO at ThemeForest</span>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="users-list">
                <img
                  src={userImg1}
                  alt="user"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                  data-aos-once="false"
                />
                <img
                  src={userImg2}
                  alt="user"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                  data-aos-once="false"
                />
                <img
                  src={userImg3}
                  alt="user"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                  data-aos-once="false"
                />
                <img
                  src={userImg4}
                  alt="user"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="600"
                  data-aos-once="false"
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}

export default TestimonialStyle4

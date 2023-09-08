import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Container from "react-bootstrap/Container";

import userImg1 from "../../images/user/user1.jpg";
import userImg2 from "../../images/user/user2.jpg";
import userImg3 from "../../images/user/user3.jpg";
import userImg4 from "../../images/user/user4.jpg";

const TestimonialStyle3 = () => {
  return (
    <>
      <div className="testimonials-area bg-1f1a23 ptb-100">
        <Container>
          <div className="testimonials-bg-shape2 text-white">
            <div
              className="section-title text-white"
              data-aos="fade-up"
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
              data-aos="fade-up"
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
                    "AML Cloud's product has revolutionized the way we approach
                    anti-money laundering. The platform's advanced analytics and
                    machine learning capabilities have allowed us to detect
                    suspicious activity more efficiently than ever before."
                  </p>
                  <div className="info">
                    <h4>Sameer</h4>
                    <span>SME Expert</span>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <p>
                    "The flexibility of AML Cloud's product is unmatched. We can
                    easily customize the platform to fit our specific needs and
                    workflows, which has saved us a significant amount of time
                    and resources."
                  </p>
                  <div className="info">
                    <h4>Jenny</h4>
                    <span> SME Expert</span>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <p>
                    “AML Cloud's product offers a comprehensive suite of
                    features and functionalities that cover all aspects of
                    anti-money laundering, making it an invaluable tool for any
                    organization in the financial industry.”
                  </p>
                  <div className="info">
                    <h4>Arnold</h4>
                    <span>SME Expert</span>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <p>
                    “The user interface of AML Cloud's product is intuitive and
                    user-friendly, making it easy for teams to navigate and
                    utilize the platform effectively."
                  </p>
                  <div className="info">
                    <h4>Bob</h4>
                    <span>SME Expert</span>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="users-list">
              <img
                src={userImg1}
                alt="user"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
                data-aos-once="false"
              />
              <img
                src={userImg2}
                alt="user"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
                data-aos-once="false"
              />
              <img
                src={userImg3}
                alt="user"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="500"
                data-aos-once="false"
              />
              <img
                src={userImg4}
                alt="user"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600"
                data-aos-once="false"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default TestimonialStyle3;

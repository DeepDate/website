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
                What <span>Users</span> Say About Us
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
                    "DeepDate has fundamentally changed the way I approach
                    dating. Seeing AI chat bots simulating a conversation based
                    on my interests and personality traits gave me a sneak peek
                    into how a conversation with a match would unfold in real
                    life. It's been a game-changer!"
                  </p>
                  <div className="info">
                    <h4>Simone</h4>
                    <span>34</span>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <p>
                    "What sets DeepDate apart is the genuine connections it
                    fosters. Being able to observe AI-driven conversations drawn
                    from my own interests and preferences has allowed me to find
                    matches with whom I share deep commonalities. It's not just
                    another dating app; it's a pathway to meaningful
                    relationships."
                  </p>
                  <div className="info">
                    <h4>Derrick</h4>
                    <span>27</span>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <p>
                    “DeepDate App has revolutionized the way I date. It's like
                    having a helping hand guiding you to your perfect match. The
                    AI chat bots feel so real, and it's exciting to see
                    conversations unfold naturally. I found my current partner
                    through DeepDate, and our initial bot conversation was
                    surprisingly close to our real-life dynamics!”
                  </p>
                  <div className="info">
                    <h4>Li</h4>
                    <span>31</span>
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

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"

// Json file path: data/trusted-brands
const query = graphql`
  query {
    trustedBrandsJson {
      trustedBrands {
        title
        brands {
          id
          brandImg {
            publicURL
          }
        }
      }
    }
  }
`

const TrustedBrands = () => {
  const {
    trustedBrandsJson: {
      trustedBrands: { title, brands },
    },
  } = useStaticQuery(query)

  return (
    <>
      <div className="trusted-brands-area position-relative z-index2 pt-100 bg-252029">
        <Container>
          <div
            className="section-sub-title text-white"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
            data-aos-once="false"
          >
            <h5>{title}</h5>
          </div>

          <Swiper
            spaceBetween={25}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
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
              992: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
              11400200: {
                slidesPerView: 7,
              },
            }}
            modules={[Autoplay]}
            className="trustedBrandsSwiper"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
            data-aos-once="false"
          >
            {brands &&
              brands.map(brand => (
                <SwiperSlide key={brand.id}>
                  <img src={brand.brandImg.publicURL} alt="Brand" />
                </SwiperSlide>
              ))}
          </Swiper>
        </Container>
      </div>
    </>
  )
}

export default TrustedBrands

import * as React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper"
import { useStaticQuery, graphql } from "gatsby"

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

const TrustedBrandsStyle2 = () => {
  const {
    trustedBrandsJson: {
      trustedBrands: { title, brands },
    },
  } = useStaticQuery(query)

  return (
    <>
      <div className="trusted-brands-area">
        <Container>
          <div className="trusted-brands-list">
            <Row className="align-items-center">
              <Col xl={3} lg={12} md={12}>
                <h5>{title}</h5>
              </Col>

              <Col xl={9} lg={12} md={12}>
                <Row className="justify-content-center">
                  <Swiper
                    spaceBetween={25}
                    speed={11000}
                    breakpoints={{
                      0: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      576: {
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
                    }}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: false,
                    }}
                    modules={[Autoplay]}
                    className="trustedBrandsSwiper"
                  >
                    {brands &&
                      brands.map(brand => (
                        <SwiperSlide className="text-center" key={brand.id}>
                          <img src={brand.brandImg.publicURL} alt="Brand" />
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}

export default TrustedBrandsStyle2

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

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
          aosDelay
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
      <div className="trusted-brands-area pt-100 pb-75">
        <Container>
          <div
            className="section-sub-title"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="100"
            data-aos-once="false"
          >
            <h5>{title}</h5>
          </div>

          <Row className="align-items-center justify-content-center">
            {brands &&
              brands.map(brand => (
                <div
                  className="brand-item mb-25"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={brand.aosDelay}
                  data-aos-once="false"
                  key={brand.id}
                >
                  <img src={brand.brandImg.publicURL} alt="Brand" />
                </div>
              ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default TrustedBrands

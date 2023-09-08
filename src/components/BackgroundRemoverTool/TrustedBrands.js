import * as React from "react"
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

const TrustedBrands = () => {
  const {
    trustedBrandsJson: {
      trustedBrands: { title, brands },
    },
  } = useStaticQuery(query)

  return (
    <>
      <div className="brt-banner-brands-list">
        <div className="row align-items-center">
          <div className="col-xl-3 col-lg-12 col-md-12">
            <h5>{title}</h5>
          </div>

          <div className="col-xl-9 col-lg-12 col-md-12">
            <div className="row justify-content-center">
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TrustedBrands

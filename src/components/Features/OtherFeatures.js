import * as React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useStaticQuery, graphql } from "gatsby"

// Json file path: data/other-features
const query = graphql`
  query {
    otherFeaturesJson {
      otherFeatures {
        subTitle
        title
        shortDescription
        features {
          id
          featureImg {
            publicURL
          }
          title
          text
          shapeImg {
            publicURL
          }
          aosDelay
        }
      }
    }
  }
`

const OtherFeatures = () => {
  const {
    otherFeaturesJson: {
      otherFeatures: { subTitle, title, shortDescription, features },
    },
  } = useStaticQuery(query)

  return (
    <>
      <div id="features" className="other-features-area pb-75">
        <Container>
          <div
            className="section-title"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="100"
            data-aos-once="false"
          >
            <span className="sub-title">{subTitle}</span>
            <h2>{title}</h2>
            <p>{shortDescription}</p>
          </div>
        </Container>

        <Container fluid>
          <Row className="justify-content-center">
            {features &&
              features.map(feature => (
                <Col
                  xl={3}
                  lg={4}
                  md={6}
                  sm={6}
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={feature.aosDelay}
                  data-aos-once="false"
                  key={feature.id}
                >
                  <div className="other-features-box mb-25">
                    <img
                      src={feature.featureImg.publicURL}
                      className="main-image"
                      alt="Features"
                    />
                    <h4>{feature.title}</h4>
                    <div className="content">
                      <h4>{feature.title}</h4>
                      <p>{feature.text}</p>
                    </div>
                    <img
                      src={feature.shapeImg.publicURL}
                      className="shape"
                      alt="shape"
                    />
                  </div>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default OtherFeatures

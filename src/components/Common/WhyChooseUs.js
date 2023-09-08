import * as React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useStaticQuery, graphql } from "gatsby"

// Json file path: data/why-choose-us
const query = graphql`
  query {
    whyChooseUsJson {
      whyChooseUs {
        subTitle
        title
        shortDescription
        whyChooseUsImg1 {
          publicURL
        }
        whyChooseUsImg2 {
          publicURL
        }
        whyChooseUsImg3 {
          publicURL
        }

        features {
          id
          title
          text
        }
      }
    }
  }
`

const WhyChooseUs = () => {
  const {
    whyChooseUsJson: {
      whyChooseUs: {
        subTitle,
        title,
        shortDescription,
        whyChooseUsImg1,
        whyChooseUsImg2,
        whyChooseUsImg3,
        features,
      },
    },
  } = useStaticQuery(query)

  return (
    <>
      <div className="why-choose-us-area pb-100">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12}>
              <div
                className="why-choose-us-content"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
                data-aos-once="false"
              >
                <span className="sub-title">{subTitle}</span>
                <h2>{title}</h2>
                <p>{shortDescription}</p>

                <Row className="features-list">
                  {features &&
                    features.map(feature => (
                      <Col lg={6} md={6} sm={6} key={feature.id}>
                        <div className="mt-25">
                          <h4>{feature.title}</h4>
                          <p>{feature.text}</p>
                        </div>
                      </Col>
                    ))}
                </Row>
              </div>
            </Col>

            <Col lg={6} md={12}>
              <div
                className="why-choose-us-image"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
                data-aos-once="false"
              >
                <img src={whyChooseUsImg1.publicURL} alt="Why choose us" />
                <img src={whyChooseUsImg2.publicURL} alt="Why choose us" />
                <img src={whyChooseUsImg3.publicURL} alt="Why choose us" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default WhyChooseUs

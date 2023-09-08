import * as React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useStaticQuery, graphql } from "gatsby"

// Json file path: data/how-it-works
const query = graphql`
  query {
    howItWorksJson {
      howItWorks {
        title
        subTitle
        shortDescription
        shapeImg1 {
          publicURL
        }
        shapeImg2 {
          publicURL
        }
        btnText
        btnLink

        steps {
          id
          howItWorkImg {
            publicURL
          }
          title
          text
          aosDelay
        }
      }
    }
  }
`

const HowItWorks = () => {
  const {
    howItWorksJson: {
      howItWorks: {
        subTitle,
        title,
        shortDescription,
        shapeImg1,
        shapeImg2,
        btnText,
        btnLink,
        steps,
      },
    },
  } = useStaticQuery(query)

  return (
    <>
      <div id="howItWorks" className="how-it-works-area bg-half-color position-relative z-index1 ptb-100">
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

          <Row className="justify-content-center">
            {steps &&
              steps.map(step => (
                <Col
                  lg={4}
                  md={6}
                  sm={6}
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={step.aosDelay}
                  data-aos-once="false"
                  key={step.id}
                >
                  <div className="how-it-works-box mb-25">
                    <img src={step.howItWorkImg.publicURL} alt="How it works" />
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </Col>
              ))}
          </Row>

          <div
            className="get-started-btn text-center"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="500"
            data-aos-once="false"
          >
            <Link to={btnLink} className="default-btn two">
              {btnText} <i className="flaticon-plus-1"></i>
            </Link>
          </div>
        </Container>

        {/* Shapes */}
        <div className="shapes">
          <img src={shapeImg1.publicURL} alt="shape4" className="shape4" />
          <img src={shapeImg2.publicURL} alt="shape5" className="shape5" />
        </div>
      </div>
    </>
  )
}

export default HowItWorks

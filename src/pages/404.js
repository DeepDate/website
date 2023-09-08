import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Container from "react-bootstrap/Container"

import errorImg from "../images/error.gif"
import shapeImg1 from "../images/shape/shape1.png"
import shapeImg2 from "../images/shape/shape8.png"

const NotFoundPage = () => (
  <Layout>
    <div className="page-banner-area mt-5 position-relative z-index1">
      <Container>
        <div className="page-banner-content">
          <img src={errorImg} alt="error" />
          <h4>Oops! That page can't be found</h4>
          <Link to="/" className="default-btn">
            Back to Home <i className="flaticon-plus-1"></i>
          </Link>
        </div>
      </Container>

      <div className="shapes">
        <img
          src={shapeImg1}
          className="shape1"
          alt="shape1"
        />
        <img
          src={shapeImg2}
          className="shape8"
          alt="shape8"
        />
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

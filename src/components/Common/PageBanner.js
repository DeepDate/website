import * as React from "react"
import { Link } from "gatsby"
import Container from 'react-bootstrap/Container';

import shapeImg1 from "../../images/shape/shape1.png"
import shapeImg2 from "../../images/shape/shape8.png"

const PageBanner = ({ pageTitle, homePageUrl, homePageText, activePageText }) => {
  return (
    <>
      <div className="page-banner-area position-relative z-index1">
        <Container>
          <div className="page-banner-content">
            <h1>
              {pageTitle}
            </h1>
            <ul>
              <li>
                <Link to={homePageUrl}>{homePageText}</Link>
              </li>
              <li>{activePageText}</li>
            </ul>
          </div>
        </Container>

        {/* shape Images */}
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
    </>
  )
}

export default PageBanner

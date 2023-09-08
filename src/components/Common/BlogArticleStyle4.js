import * as React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import blogImg1 from "../../images/blog/blog1.jpg"
import blogImg2 from "../../images/blog/blog2.jpg"
import blogImg3 from "../../images/blog/blog3.jpg"
import shapeImg1 from "../../images/shape/shape8.png"

const BlogArticleStyle4 = () => {
  return (
    <>
      <div className="blog-area pb-75 position-relative z-index1">
        <Container>
          <div
            className="section-title"
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-duration="1200"
            data-aos-once="false"
          >
            <span className="sub-title">Blog Article</span>
            <h2>
              <span>Our Blog</span> will help you to get a better knowledge
            </h2>
          </div>

          <Row className="justify-content-center">
            <Col
              lg={4}
              md={6}
              sm={6}
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-blog-item mb-25">
                <Link to="/blog/blog-details" className="image d-block">
                  <img src={blogImg1} alt="blog" />
                </Link>
                <div className="content">
                  <div className="meta d-flex align-items-center justify-content-between">
                    <Link to="/blog" className="tag">
                      Marketing
                    </Link>
                    <span className="date">Feb 12, 2023</span>
                  </div>
                  <h4>
                    <Link to="/blog/blog-details">
                      How ChatGPT Will Change The World: The Future of AI
                    </Link>
                  </h4>
                  <p>
                    A static site generator is a program that creates an
                    entirely static HTML website.
                  </p>
                </div>
              </div>
            </Col>

            <Col
              lg={4}
              md={6}
              sm={6}
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-blog-item mb-25">
                <Link to="/blog/blog-details" className="image d-block">
                  <img src={blogImg2} alt="blog" />
                </Link>
                <div className="content">
                  <div className="meta d-flex align-items-center justify-content-between">
                    <Link to="/blog" className="tag">
                      Dev
                    </Link>
                    <span className="date">Feb 11, 2023</span>
                  </div>
                  <h4>
                    <Link to="/blog/blog-details">
                      Plugins To Convert Your Figma Designs Into HTML Code
                    </Link>
                  </h4>
                  <p>
                    A static site generator is a program that creates an
                    entirely static HTML website.
                  </p>
                </div>
              </div>
            </Col>

            <Col
              lg={4}
              md={6}
              sm={6}
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-blog-item mb-25">
                <Link to="/blog/blog-details" className="image d-block">
                  <img src={blogImg3} alt="blog" />
                </Link>
                <div className="content">
                  <div className="meta d-flex align-items-center justify-content-between">
                    <Link to="/blog" className="tag">
                      ChatGPT
                    </Link>
                    <span className="date">Feb 10, 2023</span>
                  </div>
                  <h4>
                    <Link to="/blog/blog-details">
                      How to Test HTML Code In a Browser: Top 5 Extensions
                    </Link>
                  </h4>
                  <p>
                    A static site generator is a program that creates an
                    entirely static HTML website.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="shapes">
          <img src={shapeImg1} className="shape8 three" alt="shape8" />
        </div>
      </div>
    </>
  )
}

export default BlogArticleStyle4

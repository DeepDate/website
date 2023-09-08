import * as React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import blogImg1 from "../../images/blog/blog1.jpg"
import blogImg2 from "../../images/blog/blog2.jpg"
import blogImg3 from "../../images/blog/blog3.jpg"
import blogImg4 from "../../images/blog/blog4.jpg"

const BlogArticleStyle3 = () => {
  return (
    <>
      <div className="blog-area pb-75 position-relative z-index1 bg-252029">
        <Container>
          <div
            className="section-title text-white"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1200"
            data-aos-once="false"
          >
            <span className="sub-title">Blog Article</span>
            <h2>
              <span>Our Blog</span> will help you to get a better knowledge
            </h2>
          </div>

          <Row
            className="justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1200"
            data-aos-once="false"
          >
            <Col lg={3} md={6} sm={6}>
              <div className="single-blog-post mb-25 text-white">
                <Link to="/blog/blog-details" className="image d-block">
                  <img src={blogImg1} alt="blog" />
                </Link>
                <div className="content">
                  <h4>
                    <Link to="/blog/blog-details">
                      How to Build Web App Without Coding: A Guide
                    </Link>
                  </h4>
                  <ul className="meta">
                    <li>
                      <Link to="/blog">Marketing</Link>
                    </li>
                    <li>Feb 12, 2023</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col
              lg={3}
              md={6}
              sm={6}
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-blog-post mb-25 text-white">
                <Link to="/blog/blog-details" className="image d-block">
                  <img src={blogImg2} alt="blog" />
                </Link>
                <div className="content">
                  <h4>
                    <Link to="/blog/blog-details">
                      Top 7 Featured Dev Posts from the Past Week
                    </Link>
                  </h4>
                  <ul className="meta">
                    <li>
                      <Link to="/blog">Dev</Link>
                    </li>
                    <li>Feb 11, 2023</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col
              lg={3}
              md={6}
              sm={6}
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-blog-post mb-25 text-white">
                <Link to="/blog/blog-details" className="image d-block">
                  <img src={blogImg3} alt="blog" />
                </Link>
                <div className="content">
                  <h4>
                    <Link to="/blog/blog-details">
                      Build a Text Summarization App in React with ChatGPT
                    </Link>
                  </h4>
                  <ul className="meta">
                    <li>
                      <Link to="/blog">ChatGPT</Link>
                    </li>
                    <li>Feb 10, 2023</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col
              lg={3}
              md={6}
              sm={6}
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1200"
              data-aos-once="false"
            >
              <div className="single-blog-post mb-25 text-white">
                <Link to="/blog/blog-details" className="image d-block">
                  <img src={blogImg4} alt="blog" />
                </Link>
                <div className="content">
                  <h4>
                    <Link to="/blog/blog-details">
                      How You Can Consider Exiting Even At the Start
                    </Link>
                  </h4>
                  <ul className="meta">
                    <li>
                      <Link to="/blog">Email</Link>
                    </li>
                    <li>Feb 09, 2023</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default BlogArticleStyle3

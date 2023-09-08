import * as React from "react" 
import { Link } from "gatsby"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import blogImg1 from "../../images/blog/blog1.jpg"
import blogImg2 from "../../images/blog/blog2.jpg"
import blogImg3 from "../../images/blog/blog3.jpg"
import blogImg4 from "../../images/blog/blog4.jpg"

import shapeImg from "../../images/shape/shape8.png"

const BlogArticle = () => {
  return (
    <>
      <div className="blog-area pt-100 pb-75 position-relative z-index1">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} md={12}>
              <div className="blog-posts-list">
                <Row>
                  <Col
                    lg={6}
                    md={6}
                    sm={6}
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                    data-aos-once="false"
                  >
                    <div className="single-blog-post mb-25">
                      <Link to="/blog/blog-details" className="image d-block">
                        <img src={blogImg1} alt="blog Thumb" />
                      </Link>
                      <div className="content">
                        <h4>
                          <Link to="/blog/blog-details">
                            How to Build a Web App Without Coding: A Guide
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
                    lg={6}
                    md={6}
                    sm={6}
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                    data-aos-once="false"
                  >
                    <div className="single-blog-post mb-25">
                      <Link to="/blog/blog-details" className="image d-block">
                        <img src={blogImg2} alt="blog Thumb" />
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
                    lg={6}
                    md={6}
                    sm={6}
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                    data-aos-once="false"
                  >
                    <div className="single-blog-post mb-25">
                      <Link to="/blog/blog-details" className="image d-block">
                        <img src={blogImg3} alt="blog Thumb" />
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
                    lg={6}
                    md={6}
                    sm={6}
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                    data-aos-once="false"
                  >
                    <div className="single-blog-post mb-25">
                      <Link to="/blog/blog-details" className="image d-block">
                        <img src={blogImg4} alt="blog Thumb" />
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
              </div>
            </Col>

            <Col lg={5} md={12}>
              <div
                className="blog-section-title section-title"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="600"
                data-aos-once="false"
              >
                <span className="sub-title">Blog Article</span>
                <h2>
                  <span>Our Blog</span> will help you to get a better knowledge
                </h2>
                <p>
                  You’re busy, so we’ll make this easy. Timo is constantly
                  growing just like the possibilities of what you can achieve 3D
                  opens a new door for creativity. A solid set of features that
                  will help you create your top best designs with us..
                </p>
                <Link to="/blog" className="default-btn two">
                  Visit Blog Page <i className="flaticon-plus-1"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="shapes">
          <img src={shapeImg} className="shape8" alt="shape8" />
        </div>
      </div>
    </>
  )
}

export default BlogArticle

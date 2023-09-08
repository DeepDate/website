import * as React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import blogImg1 from "../../images/blog/blog1.jpg"
import blogImg2 from "../../images/blog/blog2.jpg"
import blogImg3 from "../../images/blog/blog3.jpg"
import blogImg4 from "../../images/blog/blog4.jpg"
import blogImg5 from "../../images/blog/blog5.jpg"
import blogImg6 from "../../images/blog/blog6.jpg"
import blogImg7 from "../../images/blog/blog7.jpg"
import blogImg8 from "../../images/blog/blog8.jpg"
import blogImg9 from "../../images/blog/blog9.jpg"
import blogImg10 from "../../images/blog/blog10.jpg"
import blogImg11 from "../../images/blog/blog11.jpg"
import blogImg12 from "../../images/blog/blog12.jpg"
import blogImg13 from "../../images/blog/blog13.jpg"
import blogImg14 from "../../images/blog/blog14.jpg"
import blogImg15 from "../../images/blog/blog15.jpg"
import blogImg16 from "../../images/blog/blog16.jpg"

const BlogGrid = () => {
  return (
    <>
      <div className="blog-area ptb-100">
        <Container>
          <Row className="justify-content-center">
            <Col xl={3} lg={4} md={6} sm={6}>
              <div className="single-blog-post mb-25">
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

            <Col xl={3} lg={4} md={6} sm={6}>
              <div className="single-blog-post mb-25">
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

            <Col xl={3} lg={4} md={6} sm={6}>
              <div className="single-blog-post mb-25">
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

            <Col xl={3} lg={4} md={6} sm={6}>
              <div className="single-blog-post mb-25">
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

            <Col xl={3} lg={4} md={6} sm={6}>
              <div className="single-blog-post mb-25">
                <Link to="/blog/blog-details" className="image d-block">
                  <img src={blogImg5} alt="blog" />
                </Link>
                <div className="content">
                  <h4>
                    <Link to="/blog/blog-details">
                      12 Best Android Dialer Apps You Can Try in 2023
                    </Link>
                  </h4>
                  <ul className="meta">
                    <li>
                      <Link to="/blog">Android</Link>
                    </li>
                    <li>Feb 08, 2023</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={4} md={6} sm={6}>
              <div className="single-blog-post mb-25">
                <Link to="/blog/blog-details" className="image d-block">
                  <img src={blogImg6} alt="blog" />
                </Link>
                <div className="content">
                  <h4>
                    <Link to="/blog/blog-details">
                      Windows PowerShell vs CMD – What’s the Difference
                    </Link>
                  </h4>
                  <ul className="meta">
                    <li>
                      <Link to="/blog">Windows</Link>
                    </li>
                    <li>Feb 07, 2023</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={4} md={6} sm={6}>
              <div className="single-blog-post mb-25">
                <Link to="/blog/blog-details" className="image d-block">
                  <img src={blogImg7} alt="blog" />
                </Link>
                <div className="content">
                  <h4>
                    <Link to="/blog/blog-details">
                      Start Menu Not Working in Windows 10 [Solved]
                    </Link>
                  </h4>
                  <ul className="meta">
                    <li>
                      <Link to="/blog">Menu</Link>
                    </li>
                    <li>Feb 06, 2023</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={4} md={6} sm={6}>
              <div className="single-blog-post mb-25">
                <Link to="/blog/blog-details" className="image d-block">
                  <img src={blogImg8} alt="blog" />
                </Link>
                <div className="content">
                  <h4>
                    <Link to="/blog/blog-details">
                      Cats in Video Games – Popular Indie Titles Worth Playing
                    </Link>
                  </h4>
                  <ul className="meta">
                    <li>
                      <Link to="/blog">Games</Link>
                    </li>
                    <li>Feb 05, 2023</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={4} md={6} sm={6}>
              <div className="single-blog-post mb-25">
                <Link to="/blog/blog-details" className="image d-block">
                  <img src={blogImg9} alt="blog" />
                </Link>
                <div className="content">
                  <h4>
                    <Link to="/blog/blog-details">
                      Octa Core vs Quad Core – Which is Better for You
                    </Link>
                  </h4>
                  <ul className="meta">
                    <li>
                      <Link to="/blog">Core</Link>
                    </li>
                    <li>Feb 04, 2023</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={4} md={6} sm={6}>
              <div className="single-blog-post mb-25">
                <Link to="/blog/blog-details" className="image d-block">
                  <img src={blogImg10} alt="blog" />
                </Link>
                <div className="content">
                  <h4>
                    <Link to="/blog/blog-details">
                      How to Increase Broadband Speed on Windows
                    </Link>
                  </h4>
                  <ul className="meta">
                    <li>
                      <Link to="/blog">Broadband</Link>
                    </li>
                    <li>Feb 03, 2023</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={4} md={6} sm={6}>
              <div className="single-blog-post mb-25">
                <Link to="/blog/blog-details" className="image d-block">
                  <img src={blogImg11} alt="blog" />
                </Link>
                <div className="content">
                  <h4>
                    <Link to="/blog/blog-details">
                      How to Run Android Apps on PC: The Right Way
                    </Link>
                  </h4>
                  <ul className="meta">
                    <li>
                      <Link to="/blog">Apps</Link>
                    </li>
                    <li>Feb 02, 2023</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={4} md={6} sm={6}>
              <div className="single-blog-post mb-25">
                <Link to="/blog/blog-details" className="image d-block">
                  <img src={blogImg12} alt="blog" />
                </Link>
                <div className="content">
                  <h4>
                    <Link to="/blog/blog-details">
                      6 Best Alternative Operating Systems for Windows
                    </Link>
                  </h4>
                  <ul className="meta">
                    <li>
                      <Link to="/blog">Systems</Link>
                    </li>
                    <li>Feb 01, 2023</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={4} md={6} sm={6}>
              <div className="single-blog-post mb-25">
                <Link to="/blog/blog-details" className="image d-block">
                  <img src={blogImg13} alt="blog" />
                </Link>
                <div className="content">
                  <h4>
                    <Link to="/blog/blog-details">
                      How to Download Subtitles from YouTube Videos
                    </Link>
                  </h4>
                  <ul className="meta">
                    <li>
                      <Link to="/blog">YouTube</Link>
                    </li>
                    <li>Jan 31, 2023</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={4} md={6} sm={6}>
              <div className="single-blog-post mb-25">
                <Link to="/blog/blog-details" className="image d-block">
                  <img src={blogImg14} alt="blog" />
                </Link>
                <div className="content">
                  <h4>
                    <Link to="/blog/blog-details">
                      How to Choose the Right B2B Service Provider?
                    </Link>
                  </h4>
                  <ul className="meta">
                    <li>
                      <Link to="/blog">B2B</Link>
                    </li>
                    <li>Jan 30, 2023</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={4} md={6} sm={6}>
              <div className="single-blog-post mb-25">
                <Link to="/blog/blog-details" className="image d-block">
                  <img src={blogImg15} alt="blog" />
                </Link>
                <div className="content">
                  <h4>
                    <Link to="/blog/blog-details">
                      9 Free Ways to Find Someone’s Email Address
                    </Link>
                  </h4>
                  <ul className="meta">
                    <li>
                      <Link to="/blog">Email</Link>
                    </li>
                    <li>Jan 29, 2023</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={4} md={6} sm={6}>
              <div className="single-blog-post mb-25">
                <Link to="/blog/blog-details" className="image d-block">
                  <img src={blogImg16} alt="blog" />
                </Link>
                <div className="content">
                  <h4>
                    <Link to="/blog/blog-details">
                      Here Are the Top Gmail Tricks to Save Your Time
                    </Link>
                  </h4>
                  <ul className="meta">
                    <li>
                      <Link to="/blog">Gmail</Link>
                    </li>
                    <li>Jan 28, 2023</li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col className="col-lg-12 col-md-12 col-sm-12">
              <nav className="pagination-area">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <Link className="page-link" to="/blog">
                      <i className="flaticon-chevron-1"></i>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="/blog">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link active" to="/blog">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="/blog">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="/blog">
                      4
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="/blog">
                      <i className="flaticon-chevron"></i>
                    </Link>
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default BlogGrid

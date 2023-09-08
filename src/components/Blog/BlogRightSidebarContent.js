import * as React from "react"
import { Link } from "gatsby"
import Sidebar from "./Sidebar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import blogImg1 from "../../images/blog/blog3.jpg"
import blogImg2 from "../../images/blog/blog4.jpg"
import blogImg3 from "../../images/blog/blog5.jpg"
import blogImg4 from "../../images/blog/blog6.jpg"
import blogImg5 from "../../images/blog/blog7.jpg"
import blogImg6 from "../../images/blog/blog8.jpg"
import blogImg7 from "../../images/blog/blog9.jpg"
import blogImg8 from "../../images/blog/blog10.jpg"
import blogImg9 from "../../images/blog/blog11.jpg"
import blogImg10 from "../../images/blog/blog12.jpg"

const BlogRightSidebarContent = () => {
  return (
    <>
      <div className="blog-area ptb-100">
        <Container>
          <Row>
            <Col lg={8} md={12}>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <div className="single-blog-item mb-25">
                    <Link to="/blog/blog-details" className="image d-block">
                      <img src={blogImg1} alt="blog" />
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

                <Col lg={6} md={6} sm={6}>
                  <div className="single-blog-item mb-25">
                    <Link to="/blog/blog-details" className="image d-block">
                      <img src={blogImg2} alt="blog" />
                    </Link>
                    <div className="content">
                      <div className="meta d-flex align-items-center justify-content-between">
                        <Link to="/blog" className="tag">
                          Event
                        </Link>
                        <span className="date">Feb 09, 2023</span>
                      </div>
                      <h4>
                        <Link to="/blog/blog-details">
                          How You Can Consider Exiting Event At the Start
                        </Link>
                      </h4>
                      <p>
                        A static site generator is a program that creates an
                        entirely static HTML website.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col lg={6} md={6} sm={6}>
                  <div className="single-blog-item mb-25">
                    <Link to="/blog/blog-details" className="image d-block">
                      <img src={blogImg3} alt="blog" />
                    </Link>
                    <div className="content">
                      <div className="meta d-flex align-items-center justify-content-between">
                        <Link to="/blog" className="tag">
                          Android
                        </Link>
                        <span className="date">Feb 08, 2023</span>
                      </div>
                      <h4>
                        <Link to="/blog/blog-details">
                          12 Best Android Dialer Apps You Can Try in 2023
                        </Link>
                      </h4>
                      <p>
                        A static site generator is a program that creates an
                        entirely static HTML website.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col lg={6} md={6} sm={6}>
                  <div className="single-blog-item mb-25">
                    <Link to="/blog/blog-details" className="image d-block">
                      <img src={blogImg4} alt="blog" />
                    </Link>
                    <div className="content">
                      <div className="meta d-flex align-items-center justify-content-between">
                        <Link to="/blog" className="tag">
                          Windows
                        </Link>
                        <span className="date">Feb 07, 2023</span>
                      </div>
                      <h4>
                        <Link to="/blog/blog-details">
                          Windows PowerShell vs CMD – What’s the Difference
                        </Link>
                      </h4>
                      <p>
                        A static site generator is a program that creates an
                        entirely static HTML website.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col lg={6} md={6} sm={6}>
                  <div className="single-blog-item mb-25">
                    <Link to="/blog/blog-details" className="image d-block">
                      <img src={blogImg5} alt="blog" />
                    </Link>
                    <div className="content">
                      <div className="meta d-flex align-items-center justify-content-between">
                        <Link to="/blog" className="tag">
                          Menu
                        </Link>
                        <span className="date">Feb 06, 2023</span>
                      </div>
                      <h4>
                        <Link to="/blog/blog-details">
                          Start Menu Not Working in Windows 10 [Solved]
                        </Link>
                      </h4>
                      <p>
                        A static site generator is a program that creates an
                        entirely static HTML website.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col lg={6} md={6} sm={6}>
                  <div className="single-blog-item mb-25">
                    <Link to="/blog/blog-details" className="image d-block">
                      <img src={blogImg6} alt="blog" />
                    </Link>
                    <div className="content">
                      <div className="meta d-flex align-items-center justify-content-between">
                        <Link to="/blog" className="tag">
                          Games
                        </Link>
                        <span className="date">Feb 05, 2023</span>
                      </div>
                      <h4>
                        <Link to="/blog/blog-details">
                          Cats in Video Games – Popular Indie Titles Worth
                          Playing
                        </Link>
                      </h4>
                      <p>
                        A static site generator is a program that creates an
                        entirely static HTML website.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col lg={6} md={6} sm={6}>
                  <div className="single-blog-item mb-25">
                    <Link to="/blog/blog-details" className="image d-block">
                      <img src={blogImg7} alt="blog" />
                    </Link>
                    <div className="content">
                      <div className="meta d-flex align-items-center justify-content-between">
                        <Link to="/blog" className="tag">
                          Core
                        </Link>
                        <span className="date">Feb 04, 2023</span>
                      </div>
                      <h4>
                        <Link to="/blog/blog-details">
                          Octa Core vs Quad Core – Which is Better for You
                        </Link>
                      </h4>
                      <p>
                        A static site generator is a program that creates an
                        entirely static HTML website.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col lg={6} md={6} sm={6}>
                  <div className="single-blog-item mb-25">
                    <Link to="/blog/blog-details" className="image d-block">
                      <img src={blogImg8} alt="blog" />
                    </Link>
                    <div className="content">
                      <div className="meta d-flex align-items-center justify-content-between">
                        <Link to="/blog" className="tag">
                          Broadband
                        </Link>
                        <span className="date">Feb 03, 2023</span>
                      </div>
                      <h4>
                        <Link to="/blog/blog-details">
                          How to Increase Broadband Speed on Windows
                        </Link>
                      </h4>
                      <p>
                        A static site generator is a program that creates an
                        entirely static HTML website.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col lg={6} md={6} sm={6}>
                  <div className="single-blog-item mb-25">
                    <Link to="/blog/blog-details" className="image d-block">
                      <img src={blogImg9} alt="blog" />
                    </Link>
                    <div className="content">
                      <div className="meta d-flex align-items-center justify-content-between">
                        <Link to="/blog" className="tag">
                          Apps
                        </Link>
                        <span className="date">Feb 02, 2023</span>
                      </div>
                      <h4>
                        <Link to="/blog/blog-details">
                          How to Run Android Apps on PC: The Right Way
                        </Link>
                      </h4>
                      <p>
                        A static site generator is a program that creates an
                        entirely static HTML website.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col lg={6} md={6} sm={6}>
                  <div className="single-blog-item mb-25">
                    <Link to="/blog/blog-details" className="image d-block">
                      <img src={blogImg10} alt="blog" />
                    </Link>
                    <div className="content">
                      <div className="meta d-flex align-items-center justify-content-between">
                        <Link to="/blog" className="tag">
                          Systems
                        </Link>
                        <span className="date">Feb 01, 2023</span>
                      </div>
                      <h4>
                        <Link to="/blog/blog-details">
                          6 Best Alternative Operating Systems for Windows
                        </Link>
                      </h4>
                      <p>
                        A static site generator is a program that creates an
                        entirely static HTML website.
                      </p>
                    </div>
                  </div>
                </Col>

                <Col lg={12} md={12} sm={12}>
                  <nav className="pagination-area">
                    <ul className="pagination">
                      <li className="page-item disabled">
                        <Link className="page-link" to="/blog/blog-right-sidebar/">
                          <i className="flaticon-chevron-1"></i>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="/blog/blog-right-sidebar/">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link active" to="/blog/blog-right-sidebar/">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="/blog/blog-right-sidebar/">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="/blog/blog-right-sidebar/">
                          4
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="/blog/blog-right-sidebar/">
                          <i className="flaticon-chevron"></i>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </Col>
              </Row>
            </Col>

            <Col lg={4} md={12}>
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default BlogRightSidebarContent

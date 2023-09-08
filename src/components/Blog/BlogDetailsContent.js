import * as React from "react"
import { Link } from "gatsby"
import Sidebar from "./Sidebar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import blogImg1 from "../../images/blog/blog1.jpg"
import blogImg2 from "../../images/blog/blog17.jpg"
import blogImg3 from "../../images/blog/blog18.jpg"

const BlogDetailsContent = () => {
  return (
    <>
      <div className="blog-details-area ptb-100">
        <Container>
          <Row>
            <Col lg={8} md={12}>
              <div className="blog-details-desc">
                <div className="post-thumb">
                  <img src={blogImg1} alt="blog-details" />
                </div>

                <ul className="post-meta">
                  <li>
                    <Link to="/blog">Marketing</Link>
                  </li>
                  <li>Feb 12, 2023</li>
                </ul>

                <div className="post-desc">
                  <h3>
                    How to Build a App Without Coding: A Full Beginner Guide
                  </h3>
                  <p>
                    3D opens a new door for creativity. A solid set of features
                    that will help you create your best designs. Suspendisse id
                    sem sit amet velit <strong>tempus</strong> dapibus et in
                    eros. Etiam rutrum imperdiet rutrum.{" "}
                    Vestibulum mollis diam sapien, at auctor
                    ligula faucibus quis.
                  </p>
                  <p>
                    Nam orci sapien, tincidunt sit amet augue sit amet, ultrices
                    molestie ex. Donec <u>ultrices</u> sit amet lacus nec
                    pellentesque. Phasellus ultrices ac dolor sed mollis.
                  </p>
                  <h4>What is web app</h4>
                  <p>
                    3D opens a new door for creativity. A solid set of features
                    that will help you create your best designs. Suspendisse id
                    sem sit amet velit <strong>tempus</strong> dapibus et in
                    eros. Etiam rutrum imperdiet rutrum. <i>Vestibulum</i>{" "}
                    mollis diam sapien, at auctor ligula faucibus quis.
                  </p>

                  <div className="row mt-25">
                    <div className="col-6">
                      <div className="image mb-25">
                        <img
                          src={blogImg2}
                          alt="blog"
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="image mb-25">
                        <img
                          src={blogImg3}
                          alt="blog"
                        />
                      </div>
                    </div>
                  </div>

                  <p>
                    Nam orci sapien, tincidunt sit amet augue sit amet, ultrices
                    molestie ex. Donec ultrices sit amet lacus nec pellentesque.
                    Phasellus ultrices ac dolor sed mollis.
                  </p>

                  <h4>How to start Coding</h4>
                  <p>
                    3D opens a new door for creativity. A solid set of features
                    that will help you create your best designs. Suspendisse id
                    sem sit amet velit tempus dapibus et in eros. Etiam rutrum
                    imperdiet rutrum. Vestibulum mollis diam sapien, at auctor
                    ligula faucibus quis.
                  </p>
                  <ul>
                    <li>Phasellus ultrices nulla in nunc feugiat fermentum.</li>
                    <li>Pellentesque lacinia quis ante eget vestibulum.</li>
                    <li>
                      Sed sed velit nec elit accumsan iaculis vel et arcu.
                    </li>
                  </ul>
                  <p>
                    Nam orci sapien, tincidunt sit amet augue sit amet, ultrices
                    molestie ex. Donec ultrices sit amet lacus nec pellentesque.
                    Phasellus ultrices ac dolor sed mollis.
                  </p>
                </div>

                <div className="post-share">
                  <h4>Share The Article:</h4>
                  <ul className="social-links">
                    <li>
                      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <i className="flaticon-facebook-app-symbol"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                        <i className="flaticon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        <i className="flaticon-instagram-1"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                        <i className="flaticon-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="post-comment">
                  <h3>
                    Leave A <span>Comment</span>
                  </h3>
                  <form>
                    <Row>
                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label htmlFor="name">
                            <i className="bi bi-person"></i>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                      </Col>

                      <Col lg={6} md={6}>
                        <div className="form-group">
                          <label htmlFor="email">
                            <i className="bi bi-envelope"></i>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </Col>

                      <Col lg={12} md={12}>
                        <div className="form-group">
                          <label htmlFor="phone">
                            <i className="bi bi-telephone"></i>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone no"
                          />
                        </div>
                      </Col>

                      <Col lg={12} md={12}>
                        <div className="form-group">
                          <label htmlFor="message">
                            <i className="bi bi-pencil"></i>
                          </label>
                          <textarea
                            className="form-control"
                            placeholder="Your message here"
                            cols="30"
                            rows="7"
                          ></textarea>
                        </div>
                      </Col>

                      <Col lg={12} md={12}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="save-info"
                          />
                          <label className="form-check-label" htmlFor="save-info">
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </label>
                        </div>
                      </Col>

                      <Col lg={12} md={12}>
                        <button type="submit" className="default-btn three">
                          Post Comment Now <i className="flaticon-plus-1"></i>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
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

export default BlogDetailsContent

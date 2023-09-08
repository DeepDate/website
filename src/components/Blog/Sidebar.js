import * as React from "react"
import { Link } from "gatsby"

import blogImg1 from "../../images/blog/blog1.jpg"
import blogImg2 from "../../images/blog/blog2.jpg"
import blogImg3 from "../../images/blog/blog3.jpg"
import blogImg4 from "../../images/blog/blog4.jpg"

const Sidebar = () => {
  return (
    <>
      <aside className="widget-area">
        <div className="widget widget_search">
          <form>
            <input
              type="search"
              className="search-field"
              placeholder="Search keyword"
            />
            <button type="submit">
              <i className="flaticon-search"></i>
            </button>
          </form>
        </div>

        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>
          <ul>
            <li>
              <Link to="/blog">
                Web Design <span className="count">(05)</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                Branding <span className="count">(14)</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                Digital Art <span className="count">(03)</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                Graphics <span className="count">(12)</span>
              </Link>
            </li>
            <li>
              <Link to="/blog">
                Marketing <span className="count">(25)</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="widget widget_posts_thumb">
          <h3 className="widget-title">Latest Posts</h3>

          <article className="item">
            <Link to="/blog/blog-details" className="thumb">
              <img src={blogImg1} alt="blog" />
            </Link>
            <div className="info">
              <ul className="meta">
                <li>
                  <Link to="/blog">AWS</Link>
                </li>
                <li>Feb 07, 2023</li>
              </ul>
              <h4 className="title">
                <Link to="/blog/blog-details">
                  The Awag (And Humans) Of AWS Reinvent 2021 Reviewed
                </Link>
              </h4>
            </div>
          </article>

          <article className="item">
            <Link to="/blog/blog-details" className="thumb">
              <img src={blogImg2} alt="blog" />
            </Link>
            <div className="info">
              <ul className="meta">
                <li>
                  <Link to="/blog">Writing</Link>
                </li>
                <li>Feb 06, 2023</li>
              </ul>
              <h4 className="title">
                <Link to="/blog/blog-details">
                  It’s Time To Think Differently About Writing In The className
                </Link>
              </h4>
            </div>
          </article>

          <article className="item">
            <Link to="/blog/blog-details" className="thumb">
              <img src={blogImg3} alt="blog" />
            </Link>
            <div className="info">
              <ul className="meta">
                <li>
                  <Link to="/blog">Student</Link>
                </li>
                <li>Feb 05, 2023</li>
              </ul>
              <h4 className="title">
                <Link to="/blog/blog-details">
                  A Better Alternative To Grading Student Writing
                </Link>
              </h4>
            </div>
          </article>

          <article className="item">
            <Link to="/blog/blog-details" className="thumb">
              <img src={blogImg4} alt="blog" />
            </Link>
            <div className="info">
              <ul className="meta">
                <li>
                  <Link to="/blog">Event</Link>
                </li>
                <li>Feb 04, 2023</li>
              </ul>
              <h4 className="title">
                <Link to="/blog/blog-details">
                  How You Can Consider Exiting Event At the Start
                </Link>
              </h4>
            </div>
          </article>
        </div>

        <div className="widget widget_follow_us">
          <h3 className="widget-title">Follow Us</h3>
          <ul>
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
                Pinterest
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                Linkedin
              </a>
            </li>
          </ul>
        </div>

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>
          <div className="tagcloud">
            <Link to="/blog">AWS</Link>
            <Link to="/blog">Programming</Link>
            <Link to="/blog">React</Link>
            <Link to="/blog">Design System</Link>
            <Link to="/blog">Language</Link>
            <Link to="/blog">Covid</Link>
            <Link to="/blog">web Development</Link>
            <Link to="/blog">Cloudinary</Link>
            <Link to="/blog">Treand2023</Link>
            <Link to="/blog">Video</Link>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar

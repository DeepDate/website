import * as React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import BlogGrid from "../../components/Blog/BlogGrid"
import Cta from "../../components/Common/Cta"
import Footer from "../../components/_App/Footer"

const BlogPage = () => (
  <Layout>
    <Navbar />

    <PageBanner
      pageTitle="Blog Grid"
      homePageText="Home"
      homePageUrl="/"
      activePageText="Blog Grid"
    />

    <BlogGrid />
     
    <div className="pb-100">
      <Cta />
    </div>
 
    <Footer />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Blog" />

export default BlogPage

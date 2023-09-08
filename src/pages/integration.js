import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import IntegrationStyle2 from "../components/Common/IntegrationStyle2"
import Integration from "../components/Common/Integration"
import Cta from "../components/Common/Cta"
import Footer from "../components/_App/Footer"

const IntegrationPage = () => (
  <Layout>
    <Navbar />

    <PageBanner
      pageTitle="Integration that we’ve got"
      homePageText="Home"
      homePageUrl="/"
      activePageText="Integration"
    />

    <div className="pt-100">
      <IntegrationStyle2 />
    </div>

    <Integration />
   
    <div className="ptb-100">
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
export const Head = () => <Seo title="Integration" />

export default IntegrationPage

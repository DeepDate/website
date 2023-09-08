import * as React from "react"
import Layout from "../../components/_App/layout"
import Seo from "../../components/_App/seo"
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner"
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent"
import TrustedBrandsStyle2 from "../../components/Common/TrustedBrandsStyle2"
import Cta from "../../components/Common/Cta"
import Footer from "../../components/_App/Footer"

const ServiceDetailsPage = () => (
  <Layout>

    <Navbar />

    <PageBanner
      pageTitle="Brand Identity Design" 
      homePageText="Home" 
      homePageUrl="/" 
      activePageText="Service Details" 
    />

    <ServiceDetailsContent />

    <TrustedBrandsStyle2 />

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
export const Head = () => <Seo title="Services" />

export default ServiceDetailsPage

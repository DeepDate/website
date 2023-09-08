import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import NavbarStyleThree from "../components/_App/NavbarStyleThree"
import PageBanner from "../components/Common/PageBanner"
import PricingPlansStyle2 from "../components/Pricing/PricingPlansStyle2"
import Cta from "../components/Common/Cta"
import Footer from "../components/_App/Footer"

const PricingPage = () => (
  <Layout>
    <NavbarStyleThree />

    <PageBanner
      pageTitle="Our Affordable Pricing"
      homePageText="Home"
      homePageUrl="/"
      activePageText="Pricing"
    />

    {/* <div className="pt-100">
      <PricingPlans />
    </div> */}

    <PricingPlansStyle2 />

    {/* <div className="pt-100">
      <PricingPlansStyle3 />
    </div> */}
 
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
export const Head = () => <Seo title="Pricing" />

export default PricingPage

import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import NavbarStyleThree from "../components/_App/NavbarStyleThree"
import PageBanner from "../components/Common/PageBanner"
import OurFeatures from "../components/Features/OurFeatures"
import FeaturesTab from "../components/Features/FeaturesTab"
import CoreFeatures from "../components/Features/CoreFeatures"
import OtherFeatures from "../components/Features/OtherFeatures"
import Cta from "../components/Common/Cta"
import Footer from "../components/_App/Footer"

const FeaturesPage = () => (
  <Layout>

    <NavbarStyleThree />

    <PageBanner
      pageTitle="Core Features" 
      homePageText="Home" 
      homePageUrl="/" 
      activePageText="Features" 
    />

    <div className="pt-100">
        <OurFeatures />
    </div>

    <div className="pb-100">
        <FeaturesTab />
    </div>

    {/* <CoreFeatures /> */}

    {/* <OtherFeatures /> */}
 
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
export const Head = () => <Seo title="Features" />

export default FeaturesPage

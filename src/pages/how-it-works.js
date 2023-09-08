import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import HowItWorksStep from "../components/HowItWorks/HowItWorksStep"
import HowItWorks from './../components/Common/HowItWorks';
import HowItWorksStepStyle2 from "../components/HowItWorks/HowItWorksStepStyle2"
import IntegrationStyle2 from "../components/Common/IntegrationStyle2"
import Cta from "../components/Common/Cta"
import Footer from "../components/_App/Footer"

const HowItWorksPage = () => (
  <Layout>
    <Navbar />

    <PageBanner
      pageTitle="How It Works"
      homePageText="Home"
      homePageUrl="/"
      activePageText="How It Works"
    />

    <HowItWorksStep />

    <HowItWorks />

    <HowItWorksStepStyle2 />

    <IntegrationStyle2 />
   
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
export const Head = () => <Seo title="How It Works" />

export default HowItWorksPage

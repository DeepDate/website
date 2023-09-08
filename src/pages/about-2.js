import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import AboutUsContent2 from "../components/AboutUs/AboutUsContent2"
import TrustedBrandsStyle2 from "../components/Common/TrustedBrandsStyle2"
import TeamMembers from "../components/Common/TeamMembers"
import IntegrationStyle2 from "../components/Common/IntegrationStyle2"
import TestimonialStyle4 from "../components/Testimonials/TestimonialStyle4"
import AboutUsContent from "../components/AboutUs/AboutUsContent"
import Cta from "../components/Common/Cta"
import Footer from "../components/_App/Footer"

const AboutPage = () => (
  <Layout>
    <Navbar />

    <PageBanner
      pageTitle="About Us"
      homePageText="Home"
      homePageUrl="/"
      activePageText="About Us"
    />

    <div className="pt-100">
      <AboutUsContent2 />
    </div>

    <div className="pb-100">
      <TrustedBrandsStyle2 />
    </div>

    <TeamMembers />

    <IntegrationStyle2 />
 
    <TestimonialStyle4 />

    <Cta />
 
    <AboutUsContent />
 
    <Footer />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About Us" />

export default AboutPage

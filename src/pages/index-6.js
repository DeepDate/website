import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import HeroBanner from "../components/PatternCreator/HeroBanner"
import TrustedBrandsStyle2 from "../components/Common/TrustedBrandsStyle2"
import FeaturesTab from "../components/Features/FeaturesTab"
import HowItWorks from "../components/PatternCreator/HowItWorks"
import WhyChooseUs from "../components/Common/WhyChooseUs"
import StartGraphicalWork from "../components/PatternCreator/StartGraphicalWork"
import TestimonialStyle2 from "../components/Testimonials/TestimonialStyle2"
import PricingPlansStyle3 from "../components/Pricing/PricingPlansStyle3"
import Integration from "../components/Common/Integration"
import BlogArticle from "../components/Common/BlogArticle"
import Footer from "../components/_App/Footer"
 
const IndexPageSix = () => (
  <Layout>

    <Navbar />

    <HeroBanner />

    <div className="ptb-100">
      <TrustedBrandsStyle2 />
    </div>

    <FeaturesTab />

    <HowItWorks />

    <WhyChooseUs />

    <StartGraphicalWork />

    <div className="ptb-100">
      <TestimonialStyle2 />
    </div>

    <PricingPlansStyle3 />

    <Integration />

    <BlogArticle />

    <Footer />
 
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home 6" />

export default IndexPageSix

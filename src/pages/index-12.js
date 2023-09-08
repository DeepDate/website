import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/LandingPage/PatternCreator/Navbar"
import HeroBanner from "../components/LandingPage/PatternCreator/HeroBanner"
import TrustedBrandsStyle2 from "../components/Common/TrustedBrandsStyle2"
import FeaturesTab from "../components/Features/FeaturesTab"
import HowItWorks from "../components/LandingPage/PatternCreator/HowItWorks"
import WhyChooseUs from "../components/LandingPage/PatternCreator/WhyChooseUs"
import StartGraphicalWork from "../components/LandingPage/PatternCreator/StartGraphicalWork"
import TestimonialStyle2 from "../components/Testimonials/TestimonialStyle2"
import PricingPlansStyle3 from "../components/Pricing/PricingPlansStyle3"
import Integration from "../components/Common/Integration"
import BlogArticle from "../components/LandingPage/PatternCreator/BlogArticle"
import Footer from "../components/LandingPage/PatternCreator/Footer"
 
const IndexPageTwelve = () => (
  <Layout>

    <Navbar />

    <HeroBanner />

    <div className="pt-100">
      <TrustedBrandsStyle2 />
    </div>

    <div className="pt-100">
      <FeaturesTab />
    </div>

    <HowItWorks />

    <WhyChooseUs />

    <StartGraphicalWork />

    <TestimonialStyle2 />

    <div className="pt-100">
      <PricingPlansStyle3 />
    </div>

    <Integration />

    <div className="pt-100">
      <BlogArticle />
    </div>

    <Footer />

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home 12" />

export default IndexPageTwelve

import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/LandingPage/AIIntegratedDesignTool/Navbar"
import HeroBanner from "../components/LandingPage/AIIntegratedDesignTool/HeroBanner"
import TrustedBrands from "../components/Common/TrustedBrands"
import CoreFeatures from "../components/LandingPage/AIIntegratedDesignTool/CoreFeatures"
import OtherFeatures from "../components/LandingPage/AIIntegratedDesignTool/OtherFeatures"
import WhyChooseUs from "../components/LandingPage/AIIntegratedDesignTool/WhyChooseUs"
import HowItWorks from "../components/Common/HowItWorks"
import TestimonialStyle1 from "../components/Testimonials/TestimonialStyle1"
import Integration from "../components/Common/Integration"
import PricingPlans from "../components/Pricing/PricingPlans"
import Cta from "../components/LandingPage/AIIntegratedDesignTool/Cta"
import BlogArticle from "../components/LandingPage/AIIntegratedDesignTool/BlogArticle"
import Footer from "../components/LandingPage/AIIntegratedDesignTool/Footer"

const IndexPageSeven = () => (
  <Layout>

    <Navbar />

    <HeroBanner />

    <TrustedBrands />

    <CoreFeatures />

    <OtherFeatures />

    <WhyChooseUs />

    <HowItWorks />

    <TestimonialStyle1 />

    <Integration />

    <div className="pt-100">
      <PricingPlans />
    </div>

    <Cta />

    <BlogArticle />

    <Footer />

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home 7" />

export default IndexPageSeven

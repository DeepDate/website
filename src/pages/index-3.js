import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import HeroBanner from "../components/AIIntegratedDesignTool/HeroBanner"
import TrustedBrands from "../components/Common/TrustedBrands"
import CoreFeatures from "../components/Features/CoreFeatures"
import OtherFeatures from "../components/Features/OtherFeatures"
import WhyChooseUs from "../components/Common/WhyChooseUs"
import HowItWorks from "../components/Common/HowItWorks"
import TestimonialStyle1 from "../components/Testimonials/TestimonialStyle1"
import Integration from "../components/Common/Integration"
import PricingPlans from "../components/Pricing/PricingPlans"
import Cta from "../components/Common/Cta"
import BlogArticle from "../components/Common/BlogArticle"
import Footer from "../components/_App/Footer"

const IndexPage = () => (
  <Layout>

    <Navbar />

    <HeroBanner />

    <TrustedBrands />

    <CoreFeatures />

    <OtherFeatures />

    <WhyChooseUs />

    <HowItWorks />

    <TestimonialStyle1 />

    <div className="pb-100">
      <Integration />
    </div>

    <PricingPlans />

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
export const Head = () => <Seo title="Home" />

export default IndexPage

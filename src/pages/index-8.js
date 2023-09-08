import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo" 
import Navbar from "../components/LandingPage/BackgroundRemoverTool/Navbar"
import HeroBanner from "../components/LandingPage/BackgroundRemoverTool/HeroBanner"
import QualityChecker from "../components/LandingPage/BackgroundRemoverTool/QualityChecker"
import OtherFeatures from "../components/Features/OtherFeatures"
import WhyChooseUs from "../components/LandingPage/BackgroundRemoverTool/WhyChooseUs"
import HowItWorks from "../components/Common/HowItWorks"
import TestimonialStyle2 from "../components/Testimonials/TestimonialStyle2"
import CheckOurStunningQuality from "../components/LandingPage/BackgroundRemoverTool/CheckOurStunningQuality"
import RemoveBackground from "../components/LandingPage/BackgroundRemoverTool/RemoveBackground"
import Integration from "../components/Common/Integration"
import PricingPlans from "../components/Pricing/PricingPlans"
import BlogArticle from "../components/LandingPage/BackgroundRemoverTool/BlogArticle"
import SubscribeForm from "../components/LandingPage/BackgroundRemoverTool/SubscribeForm"
import DemoWorks from "../components/LandingPage/BackgroundRemoverTool/DemoWorks"
import Footer from "../components/LandingPage/BackgroundRemoverTool/Footer"
 

const IndexPageEight = () => (
  <Layout>

    <Navbar />

    <HeroBanner />

    <QualityChecker />

    <OtherFeatures />

    <WhyChooseUs />

    <HowItWorks />

    <TestimonialStyle2 />

    <CheckOurStunningQuality />

    <RemoveBackground />

    <div className="pt-100">
      <Integration />
    </div>

    <div className="pt-100">
      <PricingPlans />
    </div>

    <BlogArticle />

    <SubscribeForm />

    <DemoWorks />

    <Footer />

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home 8" />

export default IndexPageEight

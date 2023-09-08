import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/LandingPage/EmailMarketingImage/Navbar"
import HeroBanner from "../components/LandingPage/EmailMarketingImage/HeroBanner"
import OurFeatures from "../components/Features/OurFeatures"
import WhyChooseUs from "../components/LandingPage/EmailMarketingImage/WhyChooseUs"
import HowItWorksStyle2 from "../components/Common/HowItWorksStyle2"
import WhatCanYouBuild from "../components/LandingPage/EmailMarketingImage/WhatCanYouBuild"
import IntegrationStyle2 from "../components/Common/IntegrationStyle2"
import TestimonialStyle4 from "../components/Testimonials/TestimonialStyle4"
import PricingPlansStyle3 from "../components/Pricing/PricingPlansStyle3"
import BlogArticle from "../components/LandingPage/EmailMarketingImage/BlogArticle"
import GetStarted from "../components/LandingPage/EmailMarketingImage/GetStarted"
import Footer from "../components/LandingPage/EmailMarketingImage/Footer"
 
const IndexPageTen = () => (
  <Layout>

    <Navbar /> 
    
    <HeroBanner />

    <OurFeatures />

    <WhyChooseUs />

    <HowItWorksStyle2 />

    <WhatCanYouBuild />

    <IntegrationStyle2 />

    <TestimonialStyle4 />

    <PricingPlansStyle3 />

    <BlogArticle />

    <GetStarted />

    <Footer />

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home 10" />

export default IndexPageTen

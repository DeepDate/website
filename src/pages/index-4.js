import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import HeroBanner from "../components/EmailMarketingImage/HeroBanner"
import OurFeatures from "../components/Features/OurFeatures"
import WhyChooseUs from "../components/Common/WhyChooseUs"
import HowItWorksStyle2 from "../components/Common/HowItWorksStyle2"
import WhatCanYouBuild from "../components/EmailMarketingImage/WhatCanYouBuild"
import IntegrationStyle2 from './../components/Common/IntegrationStyle2';
import TestimonialStyle4 from './../components/Testimonials/TestimonialStyle4';
import PricingPlansStyle3 from './../components/Pricing/PricingPlansStyle3';
import BlogArticleStyle4 from './../components/Common/BlogArticleStyle4';
import GetStarted from "../components/EmailMarketingImage/GetStarted"
import FooterStyle3 from './../components/_App/FooterStyle3';
 
const IndexPageFour = () => (
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

    <BlogArticleStyle4 />

    <GetStarted />

    <FooterStyle3 />
 
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home 4" />

export default IndexPageFour

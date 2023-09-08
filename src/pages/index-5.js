import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import HeroBanner from "../components/TeamCollaboration/HeroBanner"
import Features from "../components/TeamCollaboration/Features"
import TrustedBrandsStyle2 from "../components/Common/TrustedBrandsStyle2"
import OurFeatures from "../components/Features/OurFeatures"
import WhatCanYouBuild from './../components/TeamCollaboration/WhatCanYouBuild';
import HowItWorks from "../components/Common/HowItWorks"
import IntegrationStyle2 from "../components/Common/IntegrationStyle2"
import TestimonialStyle5 from "../components/Testimonials/TestimonialStyle5"
import PricingPlansStyle3 from "../components/Pricing/PricingPlansStyle3"
import Cta from "../components/Common/Cta"
import BlogArticle from "../components/Common/BlogArticle"
import FooterStyle4 from "../components/_App/FooterStyle4"
 
const IndexPageFive = () => (
  <Layout>

    <Navbar />

    <HeroBanner />

    <Features />

    <div className="pb-100">
      <TrustedBrandsStyle2 />
    </div>

    <OurFeatures />

    <WhatCanYouBuild />

    <HowItWorks />

    <IntegrationStyle2 />

    <TestimonialStyle5 />

    <PricingPlansStyle3 />

    <Cta />

    <BlogArticle />

    <FooterStyle4 />
 
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home 5" />

export default IndexPageFive

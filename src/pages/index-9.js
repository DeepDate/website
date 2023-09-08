import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/LandingPage/ImageInhancer/Navbar"
import HeroBanner from "../components/LandingPage/ImageInhancer/HeroBanner"
import TrustedBrands from "../components/LandingPage/ImageInhancer/TrustedBrands"
import WhyChooseUs from "../components/LandingPage/ImageInhancer/WhyChooseUs"
import HowItWorks from "../components/LandingPage/ImageInhancer/HowItWorks"
import WhyChooseUsTwo from "../components/LandingPage/ImageInhancer/WhyChooseUsTwo"
import TestimonialStyle3 from "../components/Testimonials/TestimonialStyle3"
import RemoveBackground from "../components/LandingPage/ImageInhancer/RemoveBackground"
import Integration from "../components/LandingPage/ImageInhancer/Integration"
import PricingPlansStyle2 from "../components/Pricing/PricingPlansStyle2"
import BlogArticle from "../components/LandingPage/ImageInhancer/BlogArticle"
import Footer from "../components/LandingPage/ImageInhancer/Footer"

const IndexPageNine = () => (
  <Layout>

    <Navbar />

    <HeroBanner />

    <TrustedBrands />

    <WhyChooseUs />

    <HowItWorks />

    <WhyChooseUsTwo />

    <TestimonialStyle3 /> 

    <RemoveBackground />

    <Integration />

    <PricingPlansStyle2 />

    <BlogArticle />

    <Footer />

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home 9" />

export default IndexPageNine

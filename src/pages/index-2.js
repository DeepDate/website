import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import NavbarStyleTwo from "../components/_App/NavbarStyleTwo"
import HeroBanner from "../components/BackgroundRemoverTool/HeroBanner"
import QualityChecker from "../components/BackgroundRemoverTool/QualityChecker"
import OtherFeatures from "../components/Features/OtherFeatures"
import WhyChooseUs from "../components/BackgroundRemoverTool/WhyChooseUs"
import HowItWorks from "../components/Common/HowItWorks"
import TestimonialStyle2 from "../components/Testimonials/TestimonialStyle2"
import CheckOurStunningQuality from "../components/BackgroundRemoverTool/CheckOurStunningQuality"
import RemoveBackground from "../components/BackgroundRemoverTool/RemoveBackground"
import Integration from "../components/Common/Integration"
import PricingPlans from "../components/Pricing/PricingPlans"
import BlogArticleStyle2 from "../components/Common/BlogArticleStyle2"
import SubscribeForm from "../components/BackgroundRemoverTool/SubscribeForm"
import DemoWorks from "../components/BackgroundRemoverTool/DemoWorks"
import FooterStyle2 from "../components/_App/FooterStyle2"

const IndexPageTwo = () => (
  <Layout>

    <NavbarStyleTwo />

    <HeroBanner />

    <QualityChecker />

    <OtherFeatures />

    <WhyChooseUs />

    <HowItWorks />

    <TestimonialStyle2 />

    <CheckOurStunningQuality />

    <RemoveBackground />

    <div className="ptb-100">
      <Integration />
    </div>

    <PricingPlans />

    <BlogArticleStyle2 />

    <SubscribeForm />

    <DemoWorks />

    <FooterStyle2 />
 
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home 2" />

export default IndexPageTwo

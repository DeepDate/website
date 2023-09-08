import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import TestimonialStyle1 from "../components/Testimonials/TestimonialStyle1"
import TestimonialStyle2 from "../components/Testimonials/TestimonialStyle2"
import TestimonialStyle3 from "../components/Testimonials/TestimonialStyle3"
import TestimonialStyle4 from "../components/Testimonials/TestimonialStyle4"
import TestimonialStyle5 from "../components/Testimonials/TestimonialStyle5"
import Cta from "../components/Common/Cta"
import Footer from "../components/_App/Footer"
  
const TestimonialsPage = () => (
  <Layout>
    <Navbar />

    <PageBanner
      pageTitle="Testimonials"
      homePageText="Home"
      homePageUrl="/"
      activePageText="Testimonials"
    />

    <div className="pt-100">
      <TestimonialStyle1 />
    </div>

    <div className="ptb-100">
      <TestimonialStyle2 />
    </div>

    <TestimonialStyle5 />

    <TestimonialStyle3 />

    <div className="pt-100">
      <TestimonialStyle4 />
    </div>
 
    <div className="pb-100">
      <Cta />
    </div>
 
    <Footer />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Testimonials" />

export default TestimonialsPage

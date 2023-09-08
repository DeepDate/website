import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import NavbarStyleThree from "../components/_App/NavbarStyleThree"
import PageBanner from "../components/Common/PageBanner"
import AboutUsContent from "../components/AboutUs/AboutUsContent"
import WhyChooseUs from "../components/ImageInhancer/WhyChooseUs"
import WhyChooseUsTwo from "../components/ImageInhancer/WhyChooseUsTwo"
import Footer from "../components/_App/Footer"

const AboutPage = () => (
  <Layout>
    <NavbarStyleThree />
    
    {/* <WhyChooseUs /> */}
    
    <AboutUsContent />  

    <WhyChooseUsTwo />

    

    <Footer />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About Us" />

export default AboutPage

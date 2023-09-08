import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import NavbarStyleThree from "../components/_App/NavbarStyleThree"
import HeroBanner from "../components/BackgroundRemoverTool/HeroBanner"
import WhyChooseUs from "../components/BackgroundRemoverTool/WhyChooseUs"
import FooterStyle2 from "../components/_App/FooterStyle2"

const Product = () => (
  <Layout>

    <NavbarStyleThree />

    <HeroBanner />

    <WhyChooseUs />

    <FooterStyle2 />
 
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Product" />

export default Product

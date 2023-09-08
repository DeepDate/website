import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import NavbarStyleThree from "../components/_App/NavbarStyleThree"
import PageBanner from "../components/Common/PageBanner"
import FAQContent from "../components/FAQ/FAQContent"
import Cta from "../components/Common/Cta"
import Footer from "../components/_App/Footer"

const FaqPage = () => (
  <Layout>
    <NavbarStyleThree />

    <PageBanner
      pageTitle="Frequently Asked Questions"
      homePageText="Home"
      homePageUrl="/"
      activePageText="FAQ"
    />

    <FAQContent />
 
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
export const Head = () => <Seo title="FAQ" />

export default FaqPage

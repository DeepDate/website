import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import NavbarStyleThree from "../components/_App/NavbarStyleThree"
import PageBanner from "../components/Common/PageBanner"
import ContactInfo from "../components/Contact/ContactInfo"
import ContactForm from "../components/Contact/ContactForm"
import TrustedBrands from "../components/Common/TrustedBrands"
import Footer from "../components/_App/Footer"

const ContactPage = () => (
  <Layout>
    <NavbarStyleThree />

    <PageBanner
      pageTitle="Contact Us"
      homePageText="Home"
      homePageUrl="/"
      activePageText="Contact Us"
    />

    <ContactInfo />

    <ContactForm />

    {/* <TrustedBrands /> */}

    <Footer />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Contact Us" />

export default ContactPage

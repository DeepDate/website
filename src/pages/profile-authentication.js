import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import MyAccount from "../components/ProfileAuthentication/MyAccount"
import Cta from "../components/Common/Cta"
import TrustedBrands from "../components/Common/TrustedBrands"
import Footer from "../components/_App/Footer"

const ProfileAuthenticationPage = () => (
  <Layout>
    <Navbar />

    <PageBanner
      pageTitle="My Account"
      homePageText="Home"
      homePageUrl="/"
      activePageText="My Account"
    />

    <MyAccount />

    <Cta />

    <TrustedBrands />

    <Footer />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="My Account" />

export default ProfileAuthenticationPage

import * as React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import TeamMember from "../components/Team/TeamMember"
import TestimonialStyle4 from "../components/Testimonials/TestimonialStyle4"
import Cta from "../components/Common/Cta"
import Footer from "../components/_App/Footer"

const TeamPage = () => (
  <Layout>
    <Navbar />

    <PageBanner
      pageTitle="Our Team"
      homePageText="Home"
      homePageUrl="/"
      activePageText="Our Team"
    />

    <TeamMember />
  
    <TestimonialStyle4 />

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
export const Head = () => <Seo title="Team" />

export default TeamPage

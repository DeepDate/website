import * as React from "react";
import Layout from "../components/_App/layout";
import Seo from "../components/_App/seo";
// import NavbarStyleThree from "../components/_App/NavbarStyleThree";
import HeroBanner from "../components/ImageInhancer/HeroBanner";
import HowItWorks from "../components/ImageInhancer/HowItWorks";
import WhomItsFor from "../components/ImageInhancer/WhomItsFor";
import TestimonialStyle3 from "../components/Testimonials/TestimonialStyle3";
import Footer from "../components/_App/Footer";

const IndexPageThree = () => (
  <Layout>
    {/* <NavbarStyleThree /> */}

    <HeroBanner />

    <HowItWorks />

    <WhomItsFor />

    {/* <WhyChooseUsTwo /> */}

    <TestimonialStyle3 />

    <Footer />
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home 3" />;

export default IndexPageThree;

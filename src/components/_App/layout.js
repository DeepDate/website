/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import AOS from "aos"
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <main>{children}</main>

      <ScrollToTop /> 
    </>
  )
}

export default Layout

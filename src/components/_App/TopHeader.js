import * as React from "react" 
import { Link } from "gatsby"
import Container from 'react-bootstrap/Container';

import rocket from "../../images/rocket.png"

const TopHeader = () => {
  return (
    <>
      <div className="top-header-area">
        <Container fluid>
          <p>
            <img src={rocket} alt="rocket" />
            New year, new membership?{" "}
            <strong>
              <Link to="/integration">Check out</Link>
            </strong>{" "}
            our new product
          </p>
        </Container>
      </div>
    </>
  )
}

export default TopHeader

import * as React from "react" 
import Container from 'react-bootstrap/Container';

import removeBackroundImg1 from "../../../images/remove-background/remove-backround1.jpg"
import removeBackroundImg2 from "../../../images/remove-background/remove-backround2.jpg"
import removeBackroundImg3 from "../../../images/remove-background/remove-backround3.jpg"
import removeBackroundImg4 from "../../../images/remove-background/remove-backround4.jpg"

const RemoveBackground = () => {
  return (
    <>
      <div className="remove-background-area">
        <Container>
          <div className="remove-background-inner-box ptb-100 position-relative z-index1">
            <div 
              className="section-title mb-0" 
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
              data-aos-once="false"
            >
              <span className="sub-title">Remove Background</span>
              <h2>
                <span>Remove</span> Image Background
              </h2>
              <div className="upload-btn">
                <label htmlFor="file-upload" className="custom-file-upload">
                  Upload Image <i className="flaticon-image"></i>
                </label>
                <input id="file-upload" type="file" />
              </div>
              <p>
                <span>or drop a file here</span> Max file size 5mb
              </p>
            </div>

            <div className="images-list">
              <img
                src={removeBackroundImg1}
                alt="remove-background"
              />
              <img
                src={removeBackroundImg2}
                alt="remove-background"
              />
              <img
                src={removeBackroundImg3}
                alt="remove-background"
              />
              <img
                src={removeBackroundImg4}
                alt="remove-background"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default RemoveBackground

import React, { useState, useEffect } from "react"

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop)
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <div
        className="scrollToTop position-fixed text-center border-0 p-0"
        onClick={scrollTop}
        style={{
          display: showScroll ? "block" : "none",
        }}
      >
        <i className="flaticon-chevron-3"></i>
      </div>
    </>
  )
}

export default ScrollToTop

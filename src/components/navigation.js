import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-container, .navigation-link, .navigation-logo-center, .navigation-overlay-link, .navigation-mobile-overlay.is-active {
  transition: none;
  animation: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <nav className="navigation-container">
        <div className="navigation-desktop-wrapper">
          <div className="navigation-links-left">
            <Link to="/about">
              <div className="navigation-link">
                <span>About</span>
              </div>
            </Link>
            <Link to="/">
              <div className="navigation-link">
                <span>Ventures</span>
              </div>
            </Link>
          </div>
          <Link to="/">
            <div className="navigation-logo-center">
              <span className="section-title">Ataneh Peculiar</span>
            </div>
          </Link>
          <div className="navigation-links-right">
            <Link to="/">
              <div className="navigation-link">
                <span>Media</span>
              </div>
            </Link>
            <Link to="/">
              <div className="navigation-link">
                <span>Contact</span>
              </div>
            </Link>
          </div>
          <button
            id="navigation-mobile-toggle"
            aria-expanded="false"
            aria-label="Toggle navigation menu"
            className="navigation-mobile-toggle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div id="navigation-mobile-overlay" className="navigation-mobile-overlay">
        <div className="navigation-overlay-header">
          <Link to="/">
            <div className="navigation-logo-center">
              <span className="section-title">Ataneh Peculiar</span>
            </div>
          </Link>
          <button
            id="navigation-overlay-close"
            aria-label="Close navigation menu"
            className="navigation-overlay-close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
              ></path>
            </svg>
          </button>
        </div>
        <div className="navigation-overlay-content">
          <div className="navigation-overlay-links">
            <Link to="/about">
              <div className="navigation-overlay-link">
                <span>About</span>
              </div>
            </Link>
            <Link to="/">
              <div className="navigation-overlay-link">
                <span>Ventures</span>
              </div>
            </Link>
            <Link to="/">
              <div className="navigation-overlay-link">
                <span>Media</span>
              </div>
            </Link>
            <Link to="/">
              <div className="navigation-overlay-link">
                <span>Contact</span>
              </div>
            </Link>
          </div>
          <div className="navigation-overlay-footer">
            <p className="section-content">
              Empowering visions, creating destinies.
            </p>
            <Link to="/">
              <div className="btn btn-primary">
                <span>Work With Me</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<style>
        @keyframes overlayFadeIn {from {opacity: 0;
transform: translateY(20px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container6">
        <div className="navigation-container7">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const mobileToggle = document.getElementById("navigation-mobile-toggle")
  const mobileOverlay = document.getElementById("navigation-mobile-overlay")
  const overlayClose = document.getElementById("navigation-overlay-close")
  const overlayLinks = document.querySelectorAll(".navigation-overlay-link")

  const openMenu = () => {
    mobileOverlay.classList.add("is-active")
    mobileToggle.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
  }

  const closeMenu = () => {
    mobileOverlay.classList.remove("is-active")
    mobileToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  }

  mobileToggle.addEventListener("click", openMenu)
  overlayClose.addEventListener("click", closeMenu)

  overlayLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  let lastScroll = 0
  const nav = document.querySelector(".navigation-container")

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
      nav.style.transform = "translateY(0)"
      return
    }

    if (currentScroll > lastScroll && !mobileOverlay.classList.contains("is-active")) {
      nav.style.transform = "translateY(-100%)"
    } else {
      nav.style.transform = "translateY(0)"
    }

    lastScroll = currentScroll
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation

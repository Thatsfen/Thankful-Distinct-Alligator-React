import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-root">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand-column">
              <Link to="/">
                <div className="footer-logo-link">
                  <span className="footer-logo-text">DestinyVista</span>
                </div>
              </Link>
              <p className="footer-brand-description">
                Empowering voices and driving social change through media,
                entrepreneurship, and purposeful storytelling. Join the movement
                for a better tomorrow.
              </p>
              <div className="footer-social-links">
                <a href="#">
                  <div
                    aria-label="Follow on Instagram"
                    className="footer-social-icon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    aria-label="Follow on LinkedIn"
                    className="footer-social-icon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2"></circle>
                      </g>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    aria-label="Follow on Twitter"
                    className="footer-social-icon"
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
                        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div
                    aria-label="Subscribe on YouTube"
                    className="footer-social-icon"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                        <path d="m10 15l5-3l-5-3z"></path>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-newsletter-column">
              <h3 className="footer-column-title">Stay Inspired</h3>
              <p className="footer-newsletter-text">
                Subscribe to our newsletter for exclusive insights on media and
                social entrepreneurship.
              </p>
              <form
                action="/subscribe"
                method="POST"
                id="newsletterForm"
                data-form-id="d4e2caf6-2a1d-437a-aa68-59f5715e0e79"
                className="footer-newsletter-form"
              >
                <div className="footer-input-group">
                  <input
                    type="email"
                    placeholder="Your email address"
                    required="true"
                    aria-label="Email for newsletter"
                    id="thq_textinput_CyDu"
                    name="textinput"
                    data-form-field-id="thq_textinput_CyDu"
                    className="footer-newsletter-input"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    id="thq_button_PRrt"
                    name="button"
                    data-form-field-id="thq_button_PRrt"
                    className="footer-newsletter-btn"
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
                        d="M5 12h14m-7-7l7 7l-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>
                <p
                  id="formStatus"
                  aria-live="polite"
                  className="footer-form-status"
                ></p>
              </form>
            </div>
          </div>
          <div className="footer-middle">
            <div className="footer-nav-grid">
              <nav
                aria-labelledby="footer-nav-explore"
                className="footer-nav-column"
              >
                <h3 id="footer-nav-explore" className="footer-column-title">
                  Explore
                </h3>
                <ul className="footer-nav-list">
                  <li>
                    <Link to="/">
                      <div className="footer-nav-link">
                        <span>Home</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>About Destiny</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Portfolio</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Social Impact</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Media Gallery</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </nav>
              <nav
                aria-labelledby="footer-nav-endeavours"
                className="footer-nav-column"
              >
                <h3 id="footer-nav-endeavours" className="footer-column-title">
                  Endeavours
                </h3>
                <ul className="footer-nav-list">
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Speaking Engagements</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Media Production</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Consultancy</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Foundation</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Workshops</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </nav>
              <nav
                aria-labelledby="footer-nav-resources"
                className="footer-nav-column"
              >
                <h3 id="footer-nav-resources" className="footer-column-title">
                  Resources
                </h3>
                <ul className="footer-nav-list">
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Blog &amp; News</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Press Kit</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Case Studies</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Podcast</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>E-Books</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </nav>
              <div
                aria-labelledby="footer-nav-contact"
                className="footer-nav-column"
              >
                <h3 id="footer-nav-contact" className="footer-column-title">
                  Get In Touch
                </h3>
                <ul className="footer-nav-list footer-contact-list">
                  <li className="footer-contact-item">
                    <span className="footer-contact-label">Inquiries:</span>
                    <a href="mailto:hello@destinyvista.com?subject=">
                      <div className="footer-nav-link">
                        <span>hello@destinyvista.com</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-contact-item">
                    <span className="footer-contact-label">Press:</span>
                    <a href="mailto:press@destinyvista.com?subject=">
                      <div className="footer-nav-link">
                        <span>press@destinyvista.com</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-contact-item">
                    <span className="footer-contact-label">Location:</span>
                    <span className="footer-contact-text">
                      Lagos, Nigeria &amp; Global
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="footer-copyright">
                &amp;copy; 2026 DestinyVista. All rights reserved. Designed with
                purpose.
              </p>
              <div className="footer-legal-links">
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Privacy Policy</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Terms of Service</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Cookie Policy</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<script defer data-name="footer-newsletter">
(function(){
  const newsletterForm = document.getElementById("newsletterForm")
  const formStatus = document.getElementById("formStatus")

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const emailInput = newsletterForm.querySelector(".footer-newsletter-input")
      const submitBtn = newsletterForm.querySelector(".footer-newsletter-btn")

      if (emailInput.checkValidity()) {
        // Visual feedback for submission
        submitBtn.disabled = true
        submitBtn.style.opacity = "0.7"
        formStatus.textContent = "Joining the movement..."
        formStatus.style.color = "var(--color-primary)"

        // Simulate success after brief delay
        setTimeout(() => {
          formStatus.textContent = "Welcome to the inner circle! Check your inbox soon."
          formStatus.style.color = "#2ecc71" // Success green
          emailInput.value = ""
          submitBtn.disabled = false
          submitBtn.style.opacity = "1"

          // Clear success message after 5 seconds
          setTimeout(() => {
            formStatus.textContent = ""
          }, 5000)
        }, 1200)
      }
    })

    // Real-time validation visual hint
    const emailInput = newsletterForm.querySelector(".footer-newsletter-input")
    emailInput.addEventListener("blur", () => {
      if (emailInput.value && !emailInput.checkValidity()) {
        formStatus.textContent = "Please enter a valid email address."
        formStatus.style.color = "#e74c3c" // Error red
      } else {
        formStatus.textContent = ""
      }
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer

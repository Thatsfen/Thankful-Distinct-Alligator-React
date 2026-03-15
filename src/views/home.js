import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Thankful Distinct Alligator</title>
        <meta property="og:title" content="Thankful Distinct Alligator" />
        <link
          rel="canonical"
          href="https://thankful-distinct-alligator-c5w1xk.teleporthq.app/"
        />
        <meta
          property="og:url"
          content="https://thankful-distinct-alligator-c5w1xk.teleporthq.app/"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="hero-intro">
        <div className="hero-intro-media">
          <video
            autoPlay="true"
            muted="true"
            loop="true"
            playsInline="true"
            poster="https://images.pexels.com/videos/2404291/pictures/preview-0.jpg"
            src="https://videos.pexels.com/video-files/2404291/2404291-hd_1280_720_24fps.mp4"
          ></video>
          <div className="hero-intro-overlay"></div>
        </div>
        <div className="hero-intro-content">
          <div className="hero-intro-inner">
            <div className="hero-intro-badge">
              <span>Media Personality &amp; Social Entrepreneur</span>
            </div>
            <h1 className="hero-title">
              Shaping Narratives, Empowering Communities.
            </h1>
            <p className="hero-subtitle">
              Harnessing the power of media to drive sustainable social change
              and foster entrepreneurial growth across emerging markets.
            </p>
            <div className="hero-intro-actions">
              <a href="#latest">
                <div className="btn btn-primary btn-lg">
                  <span>View Latest Work</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14m-7-7l7 7l-7 7"></path>
                  </svg>
                </div>
              </a>
              <a href="#contact">
                <div className="btn btn-lg btn-outline">
                  <span>Get In Touch</span>
                </div>
              </a>
            </div>
          </div>
          <div className="hero-intro-portrait">
            <img
              src="https://images.pexels.com/photos/2041396/pexels-photo-2041396.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Portrait of Destiny Vista"
            />
          </div>
        </div>
      </section>
      <section className="featured-highlights">
        <div className="featured-highlights-header">
          <h2 className="section-title">Standout Milestones</h2>
          <p className="section-subtitle">
            A snapshot of media presence and social leadership.
          </p>
        </div>
        <div className="featured-highlights-grid">
          <div className="highlight-card">
            <div className="highlight-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M9 5a3 3 0 0 1 3-3a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3a3 3 0 0 1-3-3z"></path>
                <path d="M5 10a7 7 0 0 0 14 0M8 21h8m-4-4v4"></path>
              </svg>
            </div>
            <h3 className="highlight-title">Global Media Host</h3>
            <p className="section-content">
              Leading dialogues on international platforms about economic equity
              and youth representation.
            </p>
            <a href="#">
              <div className="btn-link">
                <span>Watch Reel</span>
              </div>
            </a>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762"></path>
              </svg>
            </div>
            <h3 className="highlight-title">Social Impact Founder</h3>
            <p className="section-content">
              Launched &apos;VistaVanguard&apos;, an initiative providing
              digital literacy to 5,000+ rural entrepreneurs.
            </p>
            <a href="#">
              <div className="btn-link">
                <span>Impact Report</span>
              </div>
            </a>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </g>
              </svg>
            </div>
            <h3 className="highlight-title">UN Global Goal Award</h3>
            <p className="section-content">
              Recognized for outstanding contribution to Quality Education and
              Decent Work (SDG 4 &amp; 8).
            </p>
            <a href="#">
              <div className="btn-link">
                <span>View Award</span>
              </div>
            </a>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5"></path>
              </svg>
            </div>
            <h3 className="highlight-title">Economic Policy Board</h3>
            <p className="section-content">
              Appointed as a special advisor on Creative Economy for the
              Pan-African Trade Council.
            </p>
            <a href="#">
              <div className="btn-link">
                <span>Learn More</span>
              </div>
            </a>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M5 12h14m-7-7l7 7l-7 7"></path>
              </svg>
            </div>
            <h3 className="highlight-title">Top 40 Under 40</h3>
            <p className="section-content">
              Named among the most influential social entrepreneurs reshaping
              the media landscape.
            </p>
            <a href="#">
              <div className="btn-link">
                <span>Press Release</span>
              </div>
            </a>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M15 3h6v6m-11 5L21 3m-3 10v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </div>
            <h3 className="highlight-title">TEDx Keynote Speaker</h3>
            <p className="section-content">
              Delivered &apos;The Currency of Connection&apos; talk, reaching
              over 1 million viewers globally.
            </p>
            <a href="#">
              <div className="btn-link">
                <span>Watch Talk</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="mission-impact">
        <div className="mission-impact-container">
          <div className="mission-bento">
            <div className="bento-main">
              <h2 className="section-title">
                A Vision for Tangible Transformation
              </h2>
              <p className="section-content">
                My mission is to bridge the gap between media storytelling and
                social action. By leveraging broadcast platforms and grassroots
                entrepreneurship, we create ecosystems where talent meets
                opportunity and narratives drive policy change.
              </p>
              <div className="impact-stats">
                <div className="stat-item">
                  <span className="stat-number">10M+</span>
                  <span className="stat-label">Global Reach</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Ventures Mentored</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">$2M+</span>
                  <span className="stat-label">Impact Capital</span>
                </div>
              </div>
            </div>
            <div className="bento-side">
              <div className="bento-side-card">
                <h3 className="section-subtitle">Core Philosophy</h3>
                <ul className="philosophy-list">
                  <li>
                    <span>Authentic Representation</span>
                  </li>
                  <li>
                    <span>Sustainable Innovation</span>
                  </li>
                  <li>
                    <span>Collaborative Growth</span>
                  </li>
                </ul>
              </div>
              <div className="bento-side-image">
                <img
                  src="https://images.pexels.com/photos/8845956/pexels-photo-8845956.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Action Shot"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="latest" className="latest-updates">
        <div className="latest-updates-header">
          <h2 className="section-title">The Pulse</h2>
          <p className="section-subtitle">
            Real-time dispatches from the field and studio.
          </p>
        </div>
        <div className="update-rail">
          <div className="update-card">
            <div className="update-tag">
              <span>Broadcasting</span>
            </div>
            <h3 className="update-title">
              Behind the Scenes: New Series on Social Tech
            </h3>
            <p className="section-content">
              Exploring how blockchain is revolutionizing community funding in
              Africa.
            </p>
            <span className="update-date">Oct 12, 2025</span>
          </div>
          <div className="update-card">
            <div className="update-tag">
              <span>Impact</span>
            </div>
            <h3 className="update-title">
              VistaVanguard Cohort 4 Applications Open
            </h3>
            <p className="section-content">
              Calling all social entrepreneurs ready to scale their digital
              presence.
            </p>
            <span className="update-date">Oct 08, 2025</span>
          </div>
          <div className="update-card">
            <div className="update-tag">
              <span>Speaking</span>
            </div>
            <h3 className="update-title">
              Keynote: World Economic Forum Regional Summit
            </h3>
            <p className="section-content">
              Discussing the role of media in post-digital economic recovery.
            </p>
            <span className="update-date">Sep 28, 2025</span>
          </div>
          <div className="update-card">
            <div className="update-tag">
              <span>Media</span>
            </div>
            <h3 className="update-title">
              Featured Interview with Forbes Africa
            </h3>
            <p className="section-content">
              A deep dive into the intersection of personal branding and social
              utility.
            </p>
            <span className="update-date">Sep 15, 2025</span>
          </div>
          <div className="update-card">
            <div className="update-tag">
              <span>Award</span>
            </div>
            <h3 className="update-title">Top 100 Influential Leaders 2025</h3>
            <p className="section-content">
              Honored to be included in the annual list of media change-makers.
            </p>
            <span className="update-date">Sep 01, 2025</span>
          </div>
        </div>
      </section>
      <section className="spotlight-portfolio">
        <div className="spotlight-header">
          <h2 className="section-title">Curated Projects</h2>
          <p className="section-subtitle">
            A deep dive into media productions and social ventures.
          </p>
        </div>
        <div className="portfolio-masonry">
          <div className="portfolio-item">
            <img
              src="https://images.pexels.com/photos/6953929/pexels-photo-6953929.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Podcast Project"
            />
            <div className="portfolio-overlay">
              <h3 className="portfolio-name">The Vista Podcast</h3>
              <p className="section-content">
                Weekly conversations with the world&apos;s most daring social
                entrepreneurs.
              </p>
            </div>
          </div>
          <div className="portfolio-item">
            <img
              src="https://images.pexels.com/photos/7514827/pexels-photo-7514827.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Social Venture"
            />
            <div className="portfolio-overlay">
              <h3 className="portfolio-name">Digital Roots Initiative</h3>
              <p className="section-content">
                Equipping rural youth with the tools for the digital economy.
              </p>
            </div>
          </div>
          <div className="portfolio-item">
            <img
              src="https://images.pexels.com/photos/13929964/pexels-photo-13929964.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Documentary"
            />
            <div className="portfolio-overlay">
              <h3 className="portfolio-name">
                &apos;Echos of Change&apos; Docuseries
              </h3>
              <p className="section-content">
                A multi-part series exploring forgotten grassroots movements.
              </p>
            </div>
          </div>
          <div className="portfolio-item">
            <img
              src="https://images.pexels.com/photos/6144024/pexels-photo-6144024.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Workshop"
            />
            <div className="portfolio-overlay">
              <h3 className="portfolio-name">Media Mastery Workshop</h3>
              <p className="section-content">
                Intensive training for NGOs on effective visual storytelling.
              </p>
            </div>
          </div>
          <div className="portfolio-item">
            <img
              src="https://images.pexels.com/photos/18327490/pexels-photo-18327490.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Art Installation"
            />
            <div className="portfolio-overlay">
              <h3 className="portfolio-name">The Narrative Lab</h3>
              <p className="section-content">
                An experimental space for multi-media activism.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="voices-impact">
        <div className="voices-header">
          <h2 className="section-title">Voices of Change</h2>
          <p className="section-subtitle">
            Testimonials from partners and community leaders.
          </p>
        </div>
        <div className="voices-rail">
          <div className="testimonial-card">
            <div className="quote-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H5c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 4-2 5-2 5M14 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-3c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 4-2 5-2 5"></path>
              </svg>
            </div>
            <p className="section-content">
              &quot;Destiny has a unique ability to humanize complex economic
              issues. Her work with our youth has been truly
              transformative.&quot;
            </p>
            <div className="testimonial-author">
              <span className="author-name">Sarah Jenkins</span>
              <span className="author-role">Director, Youth Global Forum</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="quote-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H5c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 4-2 5-2 5M14 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-3c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 4-2 5-2 5"></path>
              </svg>
            </div>
            <p className="section-content">
              &quot;As a media partner, she brings both professionalism and a
              deep sense of purpose to every production. A rare talent.&quot;
            </p>
            <div className="testimonial-author">
              <span className="author-name">Marcus Thorne</span>
              <span className="author-role">
                Executive Producer, MetroMedia
              </span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="quote-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H5c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 4-2 5-2 5M14 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-3c-1.25 0-2 .75-2 2v3c0 1.25.75 2 2 2h3c0 4-2 5-2 5"></path>
              </svg>
            </div>
            <p className="section-content">
              &quot;The impact of the VistaVanguard program on local
              entrepreneurs cannot be overstated. She is building real economic
              bridges.&quot;
            </p>
            <div className="testimonial-author">
              <span className="author-name">Dr. Elena Rodriguez</span>
              <span className="author-role">
                Economic Advisor, Pan-African Council
              </span>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="get-involved">
        <div className="get-involved-container">
          <div className="get-involved-split">
            <div className="get-involved-info">
              <h2 className="section-title">Let’s Create Impact Together</h2>
              <p className="section-content">
                Whether you&apos;re looking for a media collaborator, a social
                impact partner, or a keynote speaker for your next event,
                I&apos;m always open to meaningful connections.
              </p>
              <div className="connect-options">
                <div className="option-item">
                  <h4 className="option-label">Media Inquiries</h4>
                  <p className="section-content">press@destinyvista.com</p>
                </div>
                <div className="option-item">
                  <h4 className="option-label">Collaborations</h4>
                  <p className="section-content">collab@destinyvista.com</p>
                </div>
              </div>
            </div>
            <div className="get-involved-actions">
              <div className="action-card">
                <h3 className="section-subtitle">Start a Conversation</h3>
                <p className="section-content">
                  Drop a quick message about your project or inquiry.
                </p>
                <form
                  action="/submit"
                  method="POST"
                  data-form-id="cc10ddce-e39b-43c9-9f03-6978c476d023"
                  className="simple-contact-form"
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    required="true"
                    id="thq_textinput_WLWD"
                    name="textinput"
                    data-form-field-id="thq_textinput_WLWD"
                    className="form-input"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    required="true"
                    id="thq_textinput_73zw"
                    name="textinput"
                    data-form-field-id="thq_textinput_73zw"
                    className="form-input"
                  />
                  <textarea
                    placeholder="How can we work together?"
                    required="true"
                    id="thq_textarea_QFT8"
                    name="textarea"
                    data-form-field-id="thq_textarea_QFT8"
                    className="form-textarea"
                  ></textarea>
                  <button
                    type="submit"
                    id="thq_button_inRa"
                    name="button"
                    data-form-field-id="thq_button_inRa"
                    className="btn btn-primary btn-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<script defer data-name="destiny-vista-interactions">
(function(){
  const rails = document.querySelectorAll(".update-rail, .voices-rail")

  rails.forEach((rail) => {
    let isDown = false
    let startDate
    let scrollLeft

    rail.addEventListener("mousedown", (e) => {
      isDown = true
      rail.classList.add("active")
      startX = e.pageX - rail.offsetLeft
      scrollLeft = rail.scrollLeft
    })

    rail.addEventListener("mouseleave", () => {
      isDown = false
      rail.classList.remove("active")
    })

    rail.addEventListener("mouseup", () => {
      isDown = false
      rail.classList.remove("active")
    })

    rail.addEventListener("mousemove", (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - rail.offsetLeft
      const walk = (x - startX) * 2
      rail.scrollLeft = scrollLeft - walk
    })
  })

  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  const animateElements = document.querySelectorAll(".highlight-card, .update-card, .portfolio-item, .testimonial-card")
  animateElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.6s ease-out"
    observer.observe(el)
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon33"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text27">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home

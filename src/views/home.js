import React, { useState } from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'
import pecu from '../assets/pecu.jpg'
import Ppecu from '../assets/Ppecu.jpg'

const Home = (props) => {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <div className="home-container1">
      <Helmet>
        <title>Ataneh Peculiar</title>
        <meta property="og:title" content="Ataneh Peculiar" />
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
              Telling stories, Empowering Communities.
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
            <img src={pecu} alt="Ataneh Peculiar Portrait" />
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
            <div onClick={() => setShowVideo(true)} className="btn-link">
              <span>Watch Reel</span>
            </div>
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
                <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path>
              </svg>
            </div>
            <h3 className="highlight-title">NGO Partnership Leader</h3>
            <p className="section-content">
              Built strategic collaborations with global NGOs to scale digital
              inclusion programs across 10+ countries.
            </p>
            <a href="#">
              <div className="btn-link">
                <span>Learn More</span>
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
                entrepreneurship, creating ecosystems where talent meets
                opportunity and narratives drive policy change.
              </p>
              <div className="impact-stats">
                <div className="stat-item">
                  <span className="stat-number">1M+</span>
                  <span className="stat-label">Global Reach</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">Ventures Mentored</span>
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
                  src={Ppecu}
                  alt="Ataneh Peculiar in Action"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="latest" className="latest-updates">
        <div className="latest-updates-header">
          <h2 className="section-title">Talk with Pecs</h2>
          <p className="section-subtitle">
            Conversations that explore culture, creativity, and impact.
          </p>
        </div>
        <div className="update-rail">
          <div className="update-card">
            <div className="update-tag">
              <span>Community</span>
            </div>
            <h3 className="update-title">Stories from the Ground</h3>
            <p className="section-content">
              Real voices and experiences shaping change in local communities.
            </p>
            <span className="update-date">Episode 12</span>
          </div>
          <div className="update-card">
            <div className="update-tag">
              <span>Innovation</span>
            </div>
            <h3 className="update-title">Tech for Good</h3>
            <p className="section-content">
              Conversations on tools and ideas that move social impact forward.
            </p>
            <span className="update-date">Episode 09</span>
          </div>
          <div className="update-card">
            <div className="update-tag">
              <span>Leadership</span>
            </div>
            <h3 className="update-title">Leading with Purpose</h3>
            <p className="section-content">
              Insights on how to build teams and movements that last.
            </p>
            <span className="update-date">Episode 06</span>
          </div>
          <div className="update-card">
            <div className="update-tag">
              <span>Culture</span>
            </div>
            <h3 className="update-title">Creativity in Motion</h3>
            <p className="section-content">
              Exploring the power of storytelling to shift perspectives.
            </p>
            <span className="update-date">Episode 03</span>
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
     
    <Footer></Footer>
    </div>
    {showVideo && (
      <div className="video-modal">
        <div className="video-overlay" onClick={() => setShowVideo(false)}></div>
        <div className="video-content">
          <video controls src="/reel.mp4" className="custom-video"></video>
          <button className="close-btn" onClick={() => setShowVideo(false)}>×</button>
        </div>
      </div>
    )}
    </div>
          
            
           
  )
}

export default Home

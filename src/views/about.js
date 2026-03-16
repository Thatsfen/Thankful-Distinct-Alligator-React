import React from 'react'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './about.css'

const About = () => {
  return (
    <div className="about-page">
      <Navigation />
      <main className="about-content">
        <section className="about-hero">
          <h1>About Ataneh Peculiar</h1>
          <p>
            A media personality and social entrepreneur focused on building
            bridges between storytelling and sustainable impact.
          </p>
        </section>
        <section className="about-details">
          <h2>Mission</h2>
          <p>
            Crafting narratives that elevate underserved communities and inspire
            collective action across emerging markets.
          </p>
          <h2>Approach</h2>
          <p>
            Blending journalism, digital strategy, and collaborative partnerships
            to create measurable social change.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default About

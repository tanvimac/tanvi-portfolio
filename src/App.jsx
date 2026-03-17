import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { motion as Motion } from "framer-motion"

import ParticlesBackground from "./components/ParticlesBackground"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Achievements from "./components/Achievements"
import Certificates from "./components/Certificates"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true
    })
  },[])

  const sectionAnimation = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <div style={{
      background:"#0b132b",
      width:"100%",
      minHeight:"100vh",
      overflowX:"hidden",
      position:"relative"
    }}>

      {/* Particle Background */}
      <ParticlesBackground/>

      <Navbar/>

      {/* HERO */}
      <Motion.div
        initial="hidden"
        animate="visible"
        variants={sectionAnimation}
      >
        <Hero/>
      </Motion.div>

      {/* ABOUT */}
      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionAnimation}
      >
        <About/>
      </Motion.div>

      {/* EDUCATION */}
      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionAnimation}
      >
        <Education/>
      </Motion.div>

      {/* SKILLS */}
      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionAnimation}
      >
        <Skills/>
      </Motion.div>

      {/* PROJECTS */}
      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionAnimation}
      >
        <Projects/>
      </Motion.div>

      {/* ACHIEVEMENTS */}
      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionAnimation}
      >
        <Achievements/>
      </Motion.div>

      {/* CERTIFICATES */}
      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionAnimation}
      >
        <Certificates/>
      </Motion.div>

      {/* CONTACT */}
      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionAnimation}
      >
        <Contact/>
      </Motion.div>

      <Footer/>

    </div>
  )
}

export default App

import { useEffect } from 'react'
import Hero from '@/components/Homepage/Hero'
import Projects from '@/components/Homepage/Projects'
import Footer from '@/components/Homepage/Footer'
// import Scrollbar from 'smooth-scrollbar'

const Homepage = () => {
  // useEffect(() => {
  //   Scrollbar.init(document.querySelector('#my-scrollbar'))
  // }, [])

  return (
    <div
      id="my-scrollbar"
      className="bg-gradient-to-r from-background to-secondary"
    >
      <Hero />
      <div id="projects">
        <Projects />
      </div>
      <Footer />
    </div>
  )
}

export default Homepage

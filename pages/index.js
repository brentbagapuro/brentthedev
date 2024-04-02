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
      <div>
        Testing client app
        <iframe
          src="https://stg-viewer.drawpoint.io/m/T7X58LarzrF3yiFK0M6J"
          title="Drawpoint custom map"
          width="100%"
          height="400px"
          frameborder="0"
          scrolling="no"
          allowfullscreen="true"
        ></iframe>
      </div>
      <Footer />
    </div>
  )
}

export default Homepage

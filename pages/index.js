import { useRef, useEffect } from 'react'
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
      {/* <div>
        Testing client stg
        <iframe
          src="https://stg-viewer.drawpoint.io/m/CG7KYQ2hZwFz2dhGT21l"
          title="Drawpoint custom map"
          width="100%"
          height="400px"
          frameborder="0"
          scrolling="no"
          allowfullscreen="true"
        ></iframe>
      </div>
      <div>
        Testing client prod
        <iframe
          src="https://viewer.drawpoint.io/m/CG7KYQ2hZwFz2dhGT21l"
          title="Drawpoint custom map"
          width="100%"
          height="400px"
          frameborder="0"
          scrolling="no"
          allowfullscreen="true"
        ></iframe>
      </div> */}
      <div>
        Testing client localhost
        <iframe
          src="http://localhost:3001/m/HRTnG3CdxYP7WQPdJfLn"
          title="Drawpoint custom map"
          width="100%"
          height="400px"
          frameborder="0"
          scrolling="no"
          allowfullscreen="true"
        ></iframe>
      </div>
      <div id="projects">
        <Projects />
      </div>
      <Footer />
    </div>
  )
}

export default Homepage

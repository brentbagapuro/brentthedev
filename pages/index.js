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
          // style={{
          //   position: 'fixed',
          //   top: '0px',
          //   left: '0px',
          //   bottom: '0px',
          //   right: '0px',
          //   width: '100%',
          //   height: '100%',
          //   border: 'none',
          //   margin: '0',
          //   padding: '0',
          //   overflow: 'hidden',
          //   zIndex: '999999',
          // }}
          src="https://stg-viewer.drawpoint.io/m/T7X58LarzrF3yiFK0M6J"
          title="Drawpoint custom map"
          width="100%"
          height="400px"
          frameborder="0"
          scrolling="no"
          allowfullscreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        ></iframe>
      </div>
      <Footer />
    </div>
  )
}

export default Homepage

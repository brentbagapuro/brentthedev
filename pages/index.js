import Hero from '@/components/Homepage/Hero'
import Projects from '@/components/Homepage/Projects'
import Footer from '@/components/Homepage/Footer'

const Homepage = () => {
  return (
    <div
      id="my-scrollbar"
      className="bg-gradient-to-r from-background to-secondary"
    >
      <Hero />
      {/* <iframe
        src="https://qa-viewer-drawpoint.vercel.app/m/rF1hiCnOLuBZ6euzJoCE"
        title="Drawpoint custom map"
        width="100%"
        height="400px"
        frameborder="0"
        scrolling="no"
        allowfullscreen="true"
      ></iframe> */}
      {/* <div>
        Testing client localhost
        <iframe
          src="https://stg-viewer.drawpoint.io/m/vqJXmykpUEwV2DQbyTQA"
          title="Drawpoint custom map"
          width="100%"
          height="400px"
          frameborder="0"
          scrolling="no"
          allowfullscreen="true"
        ></iframe>
      </div> */}
      <div id="projects">
        <Projects />
      </div>
      <Footer />
    </div>
  )
}

export default Homepage

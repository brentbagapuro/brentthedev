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

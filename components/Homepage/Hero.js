import Link from 'next/link'
import Container from '../Container'
import ThreeSphere from '@/components/ThreeSphere'

const Hero = () => {
  return (
    <div className="w-full">
      <Container>
        <div
          className="flex flex-col justify-center items-center md:h-screen lg:flex-row"
          id="home"
        >
          <div className="flex-1 flex justify-center items-start flex-col my-32 lg:mr-[5rem]">
            <h1 className="font-light font-code tracking-tight text-[#c1d4cd] text-[40px] leading-[48px] sm:text-[52px] sm:leading-[60px] md:text-[66px] md:leading-[75px]">
              Welcome!
            </h1>
            <p className="font-light text-[15px] mt-[1.5rem] leading-7 tracking-wide">
              My name is <span className="font-semibold">Brent Bagapuro</span>.
              I&apos;m a Full-Stack Software Engineer with 4 years of
              professional experience. I have worked remotely in the Philippines
              and have contributed to projects for various businesses and teams
              all over the world.
              <br />
              <br />
              My goal is to build a solid career in tech and business. I&apos;m
              passionate of the idea of how technology brings ease to
              peoples&apos; lives. And with that, I love contributing to the
              cool projects of businesses and helping them build their software
              product. And being a part of the journey, working together with
              different people from different cultures.
            </p>

            <div className="w-full border-l-2 border-accent my-[2rem] py-[4px] pl-3 flex flex-row">
              <Link href="#contact">
                <button
                  type="button"
                  className="bg-background border-2 border-secondary px-4 py-2 text-[#c1d4cd] hover:scale-125 hover:text-white hover:border-white ease-in-out duration-300"
                >
                  Get in touch
                </button>
              </Link>
            </div>
          </div>

          <ThreeSphere />
        </div>
      </Container>
    </div>
  )
}

export default Hero

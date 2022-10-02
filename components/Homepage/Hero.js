import Container from '../Container'
import ThreeSphere from '@/components/ThreeSphere'

const Hero = () => {
  return (
    <div className="w-full bg-gradient-to-r from-background to-secondary h-screen">
      <Container>
        <div
          className="flex flex-col justify-center items-center h-screen lg:flex-row"
          id="home"
        >
          <div className="flex-1 flex justify-center items-start flex-col my-[3rem] lg:mr-[5rem]">
            <h1 className="font-extrabold tracking-wider text-[#c1d4cd] text-[40px] leading-[48px] sm:text-[52px] sm:leading-[60px] md:text-[66px] md:leading-[75px]">
              Brent Bagapuro
            </h1>
            <p className="underline underline-offset-8 tracking-wider font-bold text-[#c1d4cd] mt-[1.5rem] text-[18px] leading-[24px] sm:text-[20px] sm:leading-[24px] md:text-[24px] md:leading-7">
              Full-Stack Engineer
            </p>

            <div className="w-full my-[2rem] mr-[1rem] flex flex-row">
              <button
                type="button"
                className="bg-background border-2 border-secondary px-4 py-2 text-[#c1d4cd] hover:scale-125 hover:text-white hover:border-white ease-in-out duration-300"
              >
                Get in touch
              </button>
            </div>
          </div>

          <ThreeSphere />
        </div>
      </Container>
    </div>
  )
}

export default Hero

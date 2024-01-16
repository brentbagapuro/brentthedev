import Link from 'next/link'
import { FaEnvelope, FaGithub, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'

const icons = [
  {
    url: 'https://github.com/brentbagapuro',
    icon: <FaGithub className="w-8 h-8" />,
  },
  {
    url: 'https://www.linkedin.com/in/brent-samuel-bagapuro-a195b9184/',
    icon: <FaLinkedinIn className="w-8 h-8" />,
  },
  {
    url: 'https://www.youtube.com/watch?v=UP9mIY1IJiQ',
    icon: <FaYoutube className="w-8 h-8" />,
  },
]

const Footer = () => {
  return (
    <footer
      className="relative bg-white pt-72 md:pt-40 pb-24 flex flex-col items-center justify-center"
      id="contact"
    >
      <div className="absolute top-[-100px] rounded-lg bg-darkBackground w-full max-w-[1280px] pt-8 pb-12">
        <div className="text-center mb-16 md:mb-12">
          <h4 className="text-lg text-white">
            Interested in working together? We should queue up.
          </h4>
        </div>
        <div className="px-8 text-white flex flex-col md:flex-row md:justify-evenly space-y-16 space-x-0 md:space-y-0 md:space-x-4">
          <span className="flex items-center space-x-3">
            <FaEnvelope className="w-8 h-8 text-white" />
            <a
              href="mailto:brentbagapuro@gmail.com"
              className="text-lg md:text-2xl text-white"
            >
              brentbagapuro@gmail.com
            </a>
          </span>
          <span className="flex items-center space-x-3">
            <IoLogoWhatsapp className="w-8 h-8 text-white" />
            <p className="text-lg md:text-2xl text-white">+63 926 758 6614</p>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-16">
        {icons.map((item, i) => (
          <Link href={item.url} key={i}>
            <a
              target="_blank"
              className="rounded-full p-2 border border-primary bg-transparent cursor-pointer transition-all duration-250 text-primary hover:bg-primary hover:text-white"
            >
              {item.icon}
            </a>
          </Link>
        ))}
      </div>
      <p className="mt-16 text-center text-primary">
        &copy; BrentTheDev {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer

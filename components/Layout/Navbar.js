import { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = ({
  navLinks,
  top,
  middle,
  bottom,
  toggleDrawer,
  burgerToX,
  drawerIsOpen,
}) => {
  const [screenWidth, setScreenWidth] = useState()

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  useEffect(() => {
    if (screenWidth >= 1024 && drawerIsOpen) {
      toggleDrawer()
      burgerToX()
    }
  }, [screenWidth, toggleDrawer, burgerToX, drawerIsOpen])

  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth)
  }

  return (
    <div className="w-full bg-transparent absolute top-0 left-0 z-50">
      <div className="max-w-[1280px] m-auto px-4 md:px-8 py-8 flex justify-between items-center">
        <div className="cursor-pointer">
          <h2 className="font-code font-light text-xl tracking-widest">
            {`<BrentTheDev/>`}
          </h2>
        </div>
        <nav className="flex items-center">
          <ul className="space-x-8 hidden lg:flex">
            {navLinks.map((link, i) => {
              return (
                <li key={i}>
                  <Link href={link.url}>
                    <a className="list-none">{link.label}</a>
                  </Link>
                </li>
              )
            })}
          </ul>

          <div
            className="block cursor-pointer lg:hidden"
            onClick={(e) => {
              e.stopPropagation()
              toggleDrawer()
              burgerToX()
            }}
          >
            <div
              className="h-[2px] w-[20px] bg-white rounded-full mb-1.5 transform transition duration-300 ease-out"
              ref={top}
            />
            <div
              className="h-[2px] w-[20px] bg-white rounded-full transform transition duration-300 ease-out"
              ref={middle}
            />
            <div
              className="h-[2px] w-[20px] bg-white rounded-full mt-1.5 transform transition duration-300 ease-out"
              ref={bottom}
            />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar

import { useRef, useState, useEffect } from 'react'
import { useIsVisible } from 'react-is-visible'
import classNames from 'classnames'
import Project from './Project'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'

const Bar = ({ project }) => {
  const [isInitialized, setIsInitialized] = useState(false)
  const [active, setIsActive] = useState(false)
  const nodeRef = useRef()
  const isVisible = useIsVisible(nodeRef)
  const { title, barColor } = project
  const barClasses = classNames({
    'border-b border-r w-11/12': active,
    'w-11/12 lg:w-8/12': !active,
  })

  const contentClasses = classNames({
    'hover:duration-500 max-h-[10000px]': active,
    'max-h-0': !active,
  })

  useEffect(() => {
    if (isVisible) {
      setIsInitialized(true)
    }
  }, [isVisible])

  const handleClick = (e) => {
    e.preventDefault()
    const target = e.target
    const rect = target.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const y = rect.top + scrollTop
    window.scrollTo({ top: y - 100, behavior: 'smooth' })
    setIsActive(!active)
  }

  return (
    <div
      // @ts-ignore
      ref={nodeRef}
      className="lg:pr-8"
    >
      <button
        className={`relative border-secondary px-6 py-2 text-xl lg:text-2xl text-right font-normal transition-all duration-1000 ease-in-out font-normal rounded-r-md mb-2 bg-gradient-to-r text-white hover:scale-x-105 hover:duration-500 cursor-pointer ${
          isInitialized ? '-left-0' : '-left-[1000px]'
        } ${barClasses} ${barColor}`}
        onClick={handleClick}
      >
        <div className="flex items-center justify-end">
          <h4
            className={`${
              active ? 'opacity-0' : 'opacity-100'
            } transition-all duration-250`}
          >
            {title}
          </h4>
          <span>
            {active ? (
              <ChevronUpIcon className="h-6 w-6 text-[#c1d4cd] ml-4" />
            ) : (
              <ChevronDownIcon className="h-6 w-6 text-[#c1d4cd] ml-4" />
            )}
          </span>
        </div>
      </button>
      <div
        className={`w-full overflow-hidden transition-all duration-500 ${contentClasses}`}
      >
        <div className="py-4">
          <Project
            title={project.title}
            barColor={project.barColor}
            coverImage={project.coverImage}
            url={project.url}
            description={project.description}
            companyName={project.companyName}
            companySiteUrl={project.companySiteUrl}
            techStack={project.techStack}
            contribution={project.contribution}
          />
        </div>
      </div>
    </div>
  )
}

export default Bar

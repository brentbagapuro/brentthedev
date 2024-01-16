import Image from 'next/image'
import Link from 'next/link'
import Container from './Container'
import { PiBuildingsFill } from 'react-icons/pi'
import { FaCode } from 'react-icons/fa'
import { MdEngineering } from 'react-icons/md'

export default function Project({
  title,
  coverImage,
  url,
  description,
  companyName,
  companySiteUrl,
  techStack,
  contribution,
}) {
  return (
    <div className="overflow-hidden py-4 sm:py-4">
      <Container>
        <div className="mx-auto my-8 overflow-hidden lg:overflow-visible grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h4 className="my-2 text-3xl sm:text-4xl">{title}</h4>
              <Link href={url}>
                <a target="_blank">{url}</a>
              </Link>
              <div
                className="text-[#c1d4cd] mt-8 mb-12"
                dangerouslySetInnerHTML={{ __html: description }}
              />

              <div className="space-y-2 mb-12">
                <span className="flex items-center space-x-2">
                  <PiBuildingsFill className="w-4 h-4 text-primary" />
                  <p className="text-accent font-bold">Company / Employer</p>
                </span>
                <div>
                  <Link href={companySiteUrl}>
                    <a className="underline" target="_blank">
                      {companyName}
                    </a>
                  </Link>
                </div>
              </div>

              <div className="space-y-2 mb-12">
                <span className="flex items-center space-x-2">
                  <FaCode className="w-4 h-4 text-primary" />
                  <p className="text-accent font-bold">Tech Srack</p>
                </span>
                <div className="flex flex-wrap">
                  {techStack.map((item, i) => (
                    <span
                      className="text-accent px-2 py-1 bg-secondary rounded-lg text-xs mb-2 mr-2"
                      key={i}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <span className="flex items-center space-x-2">
                  <MdEngineering className="w-4 h-4 text-primary" />
                  <p className="text-accent font-bold">My Contribution</p>
                </span>
                <div
                  className="text-[#c1d4cd]"
                  dangerouslySetInnerHTML={{ __html: contribution }}
                />
              </div>
            </div>
          </div>
          <div>
            <Image
              src={coverImage}
              alt="Product screenshot"
              className="w-full rounded-xl shadow-xl ring-1 ring-white/10 md:-ml-4 lg:-ml-0"
              width={560}
              height={360}
              blurDataURL={coverImage}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

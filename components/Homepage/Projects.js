import { Fragment } from 'react'
import Container from '../Container'
import Bar from '../Bar'

const projectList = [
  {
    id: 'invedent',
    title: 'Invedent',
    barColor: 'from-background to-secondary',
    coverImage: '/projects/invedent.png',
    url: 'https://www.invedent.com/',
    description:
      'Invedent is an Australian-based startup which offers an inventory management and e-commerce marketplace SaaS application that helps dental practices manage and order dental supplies.',
    companyName: 'Invedent',
    companySiteUrl: 'https://www.invedent.com/',
    techStack: [
      'TypeScript',
      'React',
      'Node.js',
      'GraphQL',
      'OpenSearch',
      'Sequelize',
      'MySQL',
      'Tailwind CSS',
      'Jest',
      'Storybook',
      'Docker',
      'AWS',
    ],
    contribution: `I developed key features of the company’s software such as products management, pricing management, shop and inventory functionality, and more.<br/><br/>On top of that, I took ownership of the existing codebase and in less than a year, together with my team, we optimized up to roughly 80% of the codebase by converting all existing JavaScript to TypeScript, wrote unit tests, optimized page load times, and applied engineering design principles and best practices.<br/><br/>From what started off as a barebones app used by a limited number of users, when I first joined the company, now has 80+ dental practices subscribed to the service as of January 2024.`,
  },
  {
    id: 'butter-insurance',
    title: 'Butter Insurance',
    barColor: 'from-background to-secondary/90',
    coverImage: '/projects/butter.png',
    url: 'https://www.butterinsurance.com.au/',
    description: `Butter is an insurance SaaS that's distributed in Australia which aims to cover a number of product categories from tech devices, to jewellry, to collectibles, in just under 2 minutes.<br/><br/>The app has a sleek step-by-step flows for creating product covers and claiming insurance. As well as a comprehensive view of all existing and expired covers and claims.`,
    companyName: 'Butter Insurance',
    companySiteUrl: 'https://www.butterinsurance.com.au/',
    techStack: [
      'TypeScript',
      'React',
      'Next.js',
      'Prisma',
      'PostgreSQL',
      'Tailwind CSS',
      'Stripe API',
      'AWS',
      'Jest',
    ],
    contribution:
      'Together with one other dev engineer, we teamed up to revamp their old app. The old app went through a number of different past engineers which left numerous unknown bugs and a codebase that was difficult to add new features onto. We both decided to create a separate and fresh repository to build a more modern and optimized app using TypeScript, Next.js, Prisma, and AWS, while also doing our best to implement new features onto the old app. In under two months, we were able to fully transition the old app to our more optimized and modern repository, and release to end-users.<br/><br/>We completed 3 full phases of the app within the span of a year. With each phase generating the business and app more revenue and users.',
  },
  {
    id: 'dtcc',
    title: 'DTCC',
    barColor: 'from-background to-secondary/80',
    coverImage: '/projects/dtcc.png',
    url: 'https://www.dtcc.com/',
    description: `DTCC is a leading financial services company in the USA that offers a comprehensive range of post-trade market infrastructures, including clearance, settlement, and information services for equities, fixed-income securities, and derivatives.<br/><br/>DTCC approached us asking for a fresh and modern management system. Our team worked in partnership with DTCC's internal teams to identify their most pressing needs and build a custom prototype that could meet their standards in the future.`,
    companyName: 'Yucaba',
    companySiteUrl: 'https://yucaba.com/',
    techStack: [
      'TypeScript',
      'React',
      'Node.js',
      'Tailwind CSS',
      'Socket.io',
      'Jest',
      'Storybook',
    ],
    contribution:
      'I was given the responsibility to build most of the front end UI. I created various reusable components and followed a Figma design to create a pixel-perfect code translation. I also integrated websockets to continuously fetch real-time data from a decoupled API that was handled by my collegue.',
  },
  {
    id: 'housecall-md',
    title: 'Housecall MD',
    barColor: 'from-background to-secondary/75',
    coverImage: '/projects/housecallmd.png',
    url: 'https://www.housecallmd.org/',
    description:
      'Housecall MD is a CRM SaaS which offers on-demand urgent care services in Washington State, and has branched out in California in mid 2023, to develop a comprehensive telehealth website that caters to both desktop and mobile users.<br/><br/>In addition to online telehealth services, HouseCall MD also offers in-person care and serves the assisted living facilities in the area.',
    companyName: 'Yucaba',
    companySiteUrl: 'https://yucaba.com/',
    techStack: [
      'TypeScript',
      'React',
      'Next.js',
      'Supabase',
      'Contentful',
      'Tailwind CSS',
      'Stripe API',
      'Twilio',
      'Sendgrid',
      'Vercel',
    ],
    contribution:
      'I contributed full-stack development of their platform, creating pages like the admin page, profile page, consultation and appointment flow pages, login page, and more. Reusable components such as Button, Modal, Toast, Blog, Testimonial and more. Backend functionalities such as user management and authentication with Supabase-Auth, sending emails with SendGrid, SMS with Twilio, payment processing with Stripe, and CRUD operations across the app using Next.js and Supabase.<br /><br />Our client, Housecall MD, came to us for the development of their system since day 1 of Yucaba back in 2021. They have expressed their satisfaction for our web services and has significantly grown in user-base. Up to this day, January 2024, they occasionally still asks Yucaba for more feature extensions.',
  },
  {
    id: 'alpha-md',
    title: 'Alpha MD',
    barColor: 'from-background to-secondary/70',
    coverImage: '/projects/alphamd.png',
    url: 'https://www.alphamd.org/',
    description:
      'From the guys of Housecall MD, Alpha MD is a similar CRM SaaS which offers an online medical service based in the US that provides affordable and convenient access to testosterone, ED, and medical weightloss medications.',
    companyName: 'Yucaba',
    companySiteUrl: 'https://yucaba.com/',
    techStack: [
      'TypeScript',
      'React',
      'Next.js',
      'Supabase',
      'Contentful',
      'Tailwind CSS',
      'Stripe API',
      'Vercel',
    ],
    contribution:
      'I also contributed full-stack development of their platform, creating pages like the admin page, profile page, consultation and appointment flow pages, login page, and more. Backend functionalities such as user management and authentication with Supabase-Auth, sending emails with SendGrid, SMS with Twilio, payment processing with Stripe, and CRUD operations across the app using Next.js and Supabase.',
  },
  {
    id: 'melde-construction',
    title: 'Melde Construction',
    barColor: 'from-background to-secondary/60',
    coverImage: '/projects/melde.png',
    url: 'https://www.meldeconstruction.com/',
    description:
      'Melde is a construction company in Austin, Texas that collaborates with like-minded clients, design firms, and trade partners in the construction of unique space.',
    companyName: 'Yucaba',
    companySiteUrl: 'https://yucaba.com/',
    techStack: [
      'React',
      'Next.js',
      'Supabase',
      'Contentful',
      'Tailwind CSS',
      'Vercel',
    ],
    contribution: `I spearheaded and took full responsibility for the development of this client's website from start to finish. Their website includes a step-by-step webflow conversion path that starts when the user clicks “Start Your Journey” and displays tailored information for the right persona. I completed the development of their website singlehandedly which included adding all data to Contentful and displaying the contents to the front end.`,
  },
  {
    id: 'landvisions',
    title: 'Landvisions',
    barColor: 'from-background to-secondary/60',
    coverImage: '/projects/landvisions.png',
    url: 'https://www.landvisions.com/',
    description:
      'Landvisions is a landscape architecture team that aims to merge functionality with beauty as they design and build outdoor spaces for communities and families to enjoy across Texas.',
    companyName: 'Yucaba',
    companySiteUrl: 'https://yucaba.com/',
    techStack: ['React', 'Next.js', 'Supabase', 'Tailwind CSS', 'Vercel'],
    contribution:
      'I contributed to the front end development of their website, with the goal of displaying extensive information about the client’s services in an interactive and engaging manner. I created pixel-perfect reusable components following specs from Adobe XD designs.<br/><br/>The challenging part of this front end build was the intricate UI design that I needed to translate carefully into code. Nonetheless, it was a fun and fulfilling project that I got to work with.',
  },
]

const Projects = () => {
  return (
    <div className="w-full pt-16 pb-56">
      <div className="mb-8">
        <Container>
          <div className="space-y-8">
            <h2 className="font-light tracking-wider text-[40px] leading-[48px] sm:text-[52px] sm:leading-[60px] md:leading-[75px]">
              Projects
            </h2>
            <p className="leading-8 text-gray-300 max-w-3xl">
              These are the projects that I&apos;ve worked on over the years
              that I&apos;m most proud of.
            </p>
          </div>
        </Container>
      </div>
      {projectList.map((proj, i) => (
        <Fragment key={i}>
          <Bar project={proj} />
        </Fragment>
      ))}
    </div>
  )
}

export default Projects

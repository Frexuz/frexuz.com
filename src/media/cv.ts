export type TCVEntry = {
  name: string
  dates: string
  role: string
  texts: string[]
  tags: string[]
  isSideProject?: boolean
}

export const cv: TCVEntry[] = [
  {
    name: 'Currenxie',
    dates: 'Mar 2024 - Present',
    role: 'Principal Engineer',
    texts: [
      'Promoted from Team Lead (see entry below). Roughly the same as before, but with more responsibilities. These include: being in more high-level discussions, driving technical decisions, and making sure team members have and are working on the right things.',
      'Acting as a hybrid Product Owner together with our lead designer.',
      'Driving initiative to automate our new webapp\'s end-to-end tests with <b>Playwright</b>.',
      'Onboarding new team members, including some non-technical staff.',
      'Recognized as a reliable resource for comprehensive product knowledge, encompassing both technical understanding within the codebase and a broader understanding of how things work overall.',
    ],
    tags: ['Java', 'Spring Boot', 'Alpine JS', 'Tailwind', 'React Query'],
  },
  {
    name: 'Prickkoll',
    dates: 'Apr 2023 - Present',
    role: 'Part-time CTO',
    texts: [
      'A Swedish digital platform for assessing medical patient cases regarding worrisome skin spots.',
      'Responsible for building the whole platform which consists of the marketing pages, client portal, doctor portal, and the admin backend.',
      'Taking charge of being the product lead, as the owners come from a medical background and have no technical or product building experience',
      'Working with the latest Rails stack; Rails 7.1, Ruby 3.2, importmaps, <b>Hotwire</b>, Stimulus, Turbo and TurboStreams, solid_cache.',
      'Switching background jobs from Sidekiq to GoodJob.',
      'Automated system testing with RSpec.',
      'Switching active_admin to MotorAdmin.',
      'Payments with a Swedish “mobile QR payments provider” named Swish.',
      'Client authentication with a Swedish “QR authentication provider” named BankID. Additional authentication for non clients, with Devise and 2FA.',
      'Authorization with Pundit.',
      'Integration with <b>Aftership</b> for getting couriers and printing parcel labels.',
      'Photo uploads straight to S3 with signed URLs from ActiveStorage, and served via a dynamic image proxy called ImgProxy, cached via BunnyCDN.',
      'CI/CD with Semaphore.',
      'Live chat with TurboStreams, and live “who’s online” indicators with KRedis.',
    ],
    tags: ['Ruby on Rails', 'Stimulus', 'Tailwind', 'Postgres'],
    isSideProject: true,
  },
  {
    name: 'Currenxie',
    dates: 'Mar 2019 - Mar 2024',
    role: 'Frontend team lead',
    texts: [
      'Taking charge of high level code base decisions, and future roadmap.',
      'A core link between Frontend, Backend, UI/UX teams, and the product owners.      ',
      'Automating and improving our code style and workflow processes.',
      'Code re-usability between our react web and native products.',
      'Building a cross-platform UI library with <b>Storybook</b>, with a tight integration to <b>Figma</b>, from scratch.',
      'Lots of refactoring and upgrading. Trying to minimize our dependence of 3rd party code/libraries.',
      'Automating mobile app releases to AppStore and GooglePlay with <b>CircleCI</b>, including end-to-end tests (with <b>Detox</b>). And the same for the web with <b>Cypress</b>.',
      'Interviewed 30+ frontend developers.',
    ],
    tags: [
      'TypeScript',
      'React / React Native',
      'Webpack',
      'Redux',
      'Redux-saga',
    ],
  },
  {
    name: 'Frexity',
    dates: 'Nov 2016 - Nov 2018',
    role: 'CEO / CTO / Full-stack developer',
    texts: [
      'Startup, building in-house products.',
      'In charge of everything, from hiring people, managing our office, product development, coding, and design.',
      'Learned a lot about how running a company works, and how to teach and manage employees.',
    ],
    tags: [
      'Ruby on Rails',
      'RSpec',
      'React / React Native',
      'Websockets',
      'AWS',
      'Stripe',
      'CI',
    ],
  },
  {
    name: 'Casumo',
    dates: 'Sep 2012 - Oct 2015',
    role: 'Lead frontend developer',
    texts: [
      'First frontend hire. Taking prototypes all the way to product release.',
      'Building a full SPA and everything that includes.',
      'Interviewing candidates, and mentoring new developers.',
      'Highly custom UI with advanced animations.',
    ],
    tags: ['KnockoutJS', 'SCSS', 'GSAP / Animations', 'SPA'],
  },
  {
    name: 'EpisodeCalendar',
    dates: 'August 2008 - Present',
    role: 'Creator / Full-stack web developer',
    texts: [
      'Personal project that I built for myself, that has grown a lot over the years.',
      'Today, over 195,000 registered users. 100% organically.',
      'Database with over 130 million rows.',
      'I&apos;ve done everything; project development, coding, design, and customer support. Basically learned how to build and manage a product.',
    ],
    tags: [
      'Ruby on Rails',
      'RSpec',
      'MySQL',
      'SCSS',
      'jQuery',
      'Redis',
      'Websockets',
    ],
    isSideProject: true,
  },
  {
    name: 'Sony Mobile',
    dates: 'Nov 2009 - Mar 2012',
    role: 'Frontend developer consultant',
    texts: [
      'Consulting on-site, developing the first ever <b>sonymobile.com</b> website after separating from Sony Ericsson.',
      'Building a UI system based on the ability of content managers to create pages with.',
      'Responsive website and UX.',
    ],
    tags: ['SCSS', 'JavaScript', 'Wordpress'],
  },
  {
    name: 'KAN',
    dates: 'Nov 2009 - Aug 2012',
    role: 'Frontend developer',
    texts: [
      'Learned how to manage my time well and meet tight deadlines.',
      'Sometimes had multiple projects on-going at the same time.',
      'Worked with multiple top companies in Sweden, such as; <b>Sony Mobile</b>, <b>Tetra Pak</b>, <b>Nestlè</b>, and <b>IKEA</b>.',
      'KAN later won the Swedish "Best Digital Agency Award" in 2015.',
    ],
    tags: ['SCSS', 'Responsiveness', 'jQuery', 'ASP.NET MVC'],
  },
]

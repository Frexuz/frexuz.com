type TCVEntry = {
  name: string;
  dates: string;
  role: string;
  texts: string[];
  tags: string[];
};

export const cv: TCVEntry[] = [
  {
    name: 'Currenxie',
    dates: 'Mar 2019 - Present',
    role: 'Frontend team lead',
    texts: [
      'Taking charge of high level code base decisions, and future roadmap.',
      'A core link between Frontend, Backend, UI/UX teams, and the product owners.      ',
      'Automating and improving our code style and workflow processes.',
      'Code re-usability between our react web and native products.',
      'Building a cross-platform UI library with <b class="unstyled tag">Storybook</b>, with a tight integration to <b class="unstyled tag">Figma</b>, from scratch.',
      'Lots of refactoring and upgrading. Trying to minimize our dependence of 3rd party code/libraries.',
      'Automating mobile app releases to AppStore and GooglePlay with <b class="unstyled tag">CircleCI</b>, including end-to-end tests (with <b class="unstyled tag">Detox</b>). And the same for the web with <b class="unstyled tag">Cypress</b>.',
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
      'Rspec',
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
      'Rspec',
      'MySQL',
      'SCSS',
      'jQuery',
      'Redis',
      'Websockets',
    ],
  },
  {
    name: 'Sony Mobile',
    dates: 'Nov 2009 - Mar 2012',
    role: 'Frontend developer consultant',
    texts: [
      'Consulting on-site, developing the first ever <b class="unstyled tag">sonymobile.com</b> website after separating from Sony Ericsson.',
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
      'Worked with multiple top companies in Sweden, such as; <b class="unstyled tag">Sony Mobile</b>, <b class="unstyled tag">Tetra Pak</b>, <b class="unstyled tag">Nestlè</b>, and <b class="unstyled tag">IKEA</b>.',
      'KAN later won the Swedish "Best Digital Agency Award" in 2015.',
    ],
    tags: ['SCSS', 'Responsiveness', 'jQuery', 'ASP.NET MVC'],
  },
]

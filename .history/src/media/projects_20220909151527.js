import { images } from '@media'

export default [
  {
    name: 'EpisodeCalendar',
    logo: images.EpisodeCalendar.logo,
    tagLine: 'Track your TV shows.',
    tags: ['Ruby on Rails', 'jQuery', 'MySQL', 'Redis', 'SCSS'],
    buttons: [{ text: 'Website', href: 'https://episodecalendar.com' }],
  },
  {
    name: 'TravClub',
    // logo: images.Flately.logo,
    tagLine: 'Find travel buddies, and general travel platform.',
    tags: [
      'Ruby on Rails',
      'React Native',
      'Postgres',
      'Redis',
      'Websockets',
      'Live-chat',
      'Stripe',
    ],
    // eslint-disable-next-line no-script-url
    buttons: [{ text: 'Website (Beta)', href: 'https://travclub.com' }],
  },
  {
    name: 'Travlr',
    video: 'https://www.youtube.com/embed/mr5cDf0z8c4',
    logo: images.Travlr.logo,
    tagLine: 'Track which countries you have visited and flown to.',
    tags: ['React Native', 'Custom SVG Maps', 'Firebase'],
    // eslint-disable-next-line no-script-url
    buttons: [
      {
        text: 'Website (App not unavailable anymore)',
        href: 'https://travlr.landen.co/',
      },
    ],
  },
]

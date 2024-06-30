import { images } from '@/media'
import { StaticImageData } from "next/image"

export type Project = {
  name: string
  logo: StaticImageData
  tagLine: string
  tags: string[]
  video?: string
  buttons: { text: string; href: string }[]
}

export const projects: Project[] = [
  {
    name: 'EpisodeCalendar',
    logo: images.EpisodeCalendar.logo,
    tagLine: 'Track your TV shows.',
    tags: ['Ruby on Rails', 'jQuery', 'MySQL', 'Redis', 'SCSS'],
    buttons: [{ text: 'Website', href: 'https://episodecalendar.com' }],
  },
  {
    name: 'TravClub',
    logo: images.TravClub.logo,
    tagLine: 'Find travel buddies, and general travel platform.',
    tags: [
      'Ruby on Rails',
      'TypeScript',
      'React',
      'Webpack',
      'Websockets',
      'Postgres',
      'Redis',
    ],
    buttons: [{ text: 'Website (Beta)', href: 'https://travclub.com' }],
  },
  {
    name: 'Travlr',
    video: 'https://www.youtube.com/embed/mr5cDf0z8c4',
    logo: images.Travlr.logo,
    tagLine: 'Track which countries you have visited and flown to.',
    tags: ['React Native', 'Custom SVG Maps', 'Firebase'],
    buttons: [
      {
        text: 'Website (App not unavailable anymore)',
        href: 'https://travlr.landen.co/',
      },
    ],
  },
  {
    name: 'React Select',
    logo: images.React.logo,
    tagLine: 'Open source React Select component alternative.',
    tags: ['React', 'TypeScript', 'Webpack', 'Storybook'],
    buttons: [
      {
        text: 'Github Repo (Beta)',
        href: 'https://github.com/Frexity/frx-react/tree/main/ui/react-select',
      },
    ],
  },
]

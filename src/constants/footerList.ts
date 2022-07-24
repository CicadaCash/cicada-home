import { KCC } from '.'

// footer nanList
export const FOOTER_LIST = [
  {
    title: 'About KCC',
    children: [
      {
        navText: 'Announcement',
        navRoute: KCC.MEDIA_URL,
      },
      {
        navText: 'News',
        navRoute: '/',
      },
    ],
  },
  {
    title: 'Development Tool',
    children: [
      {
        navText: 'Docs',
        navRoute: KCC.DOCS_URL,
      },
      {
        navText: 'Github',
        navRoute: KCC.GITHUB_URL,
      },
    ],
  },
  {
    title: 'Community',
    children: [
      {
        navText: 'Telegram',
        navRoute: KCC.TELEGRAM,
      },
      {
        navText: 'Twitter',
        navRoute: KCC.TWITTER,
      },
      {
        navText: 'Medium',
        navRoute: KCC.MEDIA_URL,
      },
    ],
  },
  {
    title: 'Event',
    children: [
      {
        navText: 'Funding Program',
        navRoute: '/unicorn',
      },
      {
        navText: 'Jobs',
        navRoute: '/jobs',
      },
    ],
  },
]

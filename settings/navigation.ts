import { PageRoutes } from '@/lib/pageroutes'

export const Navigations = [
  {
    title: 'Docs',
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: 'ChurchCMS App',
    href: 'https://churchcms.app/',
    external: true,
  },
]

export const GitHubLink = {
  href: 'https://github.com/church-cms/church-cms-docs',
}

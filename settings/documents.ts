import { Paths } from '@/lib/pageroutes'

export const Documents: Paths[] = [
  {
    heading: 'Introduction',
    title: 'Getting Started',
    href: '/getting-started',
    items: [
      {
        title: 'Web App & API',
        href: '/web-app',
      },
      {
        title: 'Android App',
        href: '/android',
      },
    ],
  },
  {
    heading: 'Modules',
    title: 'User Management',
    href: '/modules/user-management',
    items: [
      {
        title: 'Members',
        href: '/members',
        items: [
          {
            title: 'Add Member',
            href: '/add',
          },
          {
            title: 'Member Detail',
            href: '/detail',
          },
          {
            title: 'Menu Options',
            href: '/menu-options',
          },
          {
            title: 'Edit Member',
            href: '/edit',
          },
          {
            title: 'Delete Member',
            href: '/delete',
          },
          {
            title: 'Export',
            href: '/export',
          },
          {
            title: 'Import',
            href: '/import',
          },
        ],
      },
    ],
  },
]

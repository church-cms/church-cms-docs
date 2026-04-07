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
      {
        title: 'Staff',
        href: '/staff',
        items: [
          {
            title: 'Add Staff',
            href: '/add',
          },
          {
            title: 'Staff Detail',
            href: '/detail',
          },
          {
            title: 'Menu Options',
            href: '/menu-options',
          },
          {
            title: 'Edit Staff',
            href: '/edit',
          },
        ],
      },
      {
        title: 'Sub Admins',
        href: '/sub-admin',
        items: [
          {
            title: 'Add Sub Admin',
            href: '/add',
          },
          {
            title: 'Sub Admin Detail',
            href: '/detail',
          },
          {
            title: 'Menu Options',
            href: '/menu-options',
          },
          {
            title: 'Edit Sub Admin',
            href: '/edit',
          },
        ],
      },
    ],
  },
  {
    title: 'Events & Calendar',
    href: '/modules/events-calendar-management',
    items: [
      {
        title: 'Calendar',
        href: '/calendar',
      },
       {
      title: 'How to Create an Event',
      href: '/create-event',
    },
    {
      title: 'Creating a Private Event',
      href: '/private-event',
    },
    {
      title: 'Creating a Public Event',
      href: '/public-event',
    },
    ],
  },
  {
  title: 'Gallery Management',
  href: '/modules/gallery-management',
  items: [
    {
      title: 'How to Create a New Gallery',
      href: '/create-gallery',
    },
    {
      title: 'How to Edit a Gallery',
      href: '/edit-gallery',
    },
    {
      title: 'How to Delete a Gallery',
      href: '/delete-gallery',
    },
  ],
},
{
  title: 'Groups Management',
  href: '/modules/groups-management',
  items: [
    {
      title: 'How to Access Groups Module',
      href: '/access-groups',
    },
    {
      title: 'How to Create a New Group',
      href: '/create-group',
    },
    {
      title: 'Viewing Group Details',
      href: '/view-group-details',
    },
    {
      title: 'Add Members to a Group',
      href: '/add-members',
    },
    {
      title: 'Send Message to Group Members',
      href: '/send-message',
    },
    {
      title: 'View Message List',
      href: '/view-message-list',
    },
    {
      title: 'Edit Group',
      href: '/edit-group',
    },
    {
      title: 'Delete Group',
      href: '/delete-group',
    },
  ],
},
]

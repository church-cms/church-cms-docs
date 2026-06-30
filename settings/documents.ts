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
      {
        title: 'Guests',
        href: '/guest',
        items: [
          {
            title: 'Guest Detail',
            href: '/detail',
          },
          {
            title: 'Menu Options',
            href: '/menu-options',
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
        title: 'Event List',
        href: '/event-list',
      },
      {
        title: 'Event Details',
        href: '/event-details',
      },
      {
        title: 'How to Edit an Event',
        href: '/edit-event',
      },
      {
        title: 'Search Events by Category',
        href: '/search-event',
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
      title: 'Group Posts',
      href: '/group-posts',
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
{
  title: 'Video Chat Room',
  href: '/modules/video-chat-room',
  items: [
    {
      title: 'How to Create a Video Chat Room',
      href: '/create-room',
    },
    {
      title: 'How to Edit a Video Chat Room',
      href: '/edit-room',
    },
    {
      title: 'How to Delete a Video Chat Room',
      href: '/delete-room',
    },
    {
      title: 'How to Go to a Room',
      href: '/go-to-room',
    },
    {
      title: 'How to Manage Invitees',
      href: '/manage-invitees',
    },
    {
      title: 'Search & Reset',
      href: '/search-reset',
    },
  ],
},
{
  title: 'Media Files',
  href: '/modules/media-files-management',
  items: [
    {
      title: 'Media Library',
      href: '/media-library',
    },
    {
      title: 'How to Add an Image',
      href: '/add-image',
    },
    {
      title: 'How to Add an Audio File',
      href: '/add-audio',
    },
    {
      title: 'How to Add a Video File',
      href: '/add-video',
    },
  ],
},
{
  title: 'Bulletin Management',
  href: '/modules/bulletin-management',
  items: [
    {
      title: 'Bulletin List',
      href: '/list-bulletin',
    },
    {
      title: 'How to Add a Bulletin',
      href: '/add-bulletin',
    },
    {
      title: 'How to Edit a Bulletin',
      href: '/edit-bulletin',
    },

  ],
},
{
  title: 'Sermon Management',
  href: '/modules/sermon-management',
  items: [
    {
      title: 'How to Add a Sermon',
      href: '/add-sermon',
    },
    {
      title: 'Sermon List',
      href: '/list-sermon',
    },
    {
      title: 'How to Edit a Sermon',
      href: '/edit-sermon',
    },
    {
      title: 'How to Delete a Sermon',
      href: '/delete-sermon',
    },
    {
      title: 'Sermon Details & Chapters',
      href: '/sermon-details',
      items: [
        {
          title: 'How to Add a Chapter',
          href: '/add-chapter',
        },
        {
          title: 'How to Edit a Chapter',
          href: '/edit-chapter',
        },
      ],
    },
  ],
},
]

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
  title: 'Settings',
  href: '/modules/settings',
  items: [
    {
      title: 'General Settings',
      href: '/general',
    },
    {
      title: 'Maintenance Settings',
      href: '/maintenance',
    },
    {
      title: 'Contact Settings',
      href: '/contact',
    },
    {
      title: 'HTML / JS Code Settings',
      href: '/html-js',
    },
    {
      title: 'Location Settings',
      href: '/location',
    },
    {
      title: 'Open Graph Settings',
      href: '/open-graph',
    },
    {
      title: 'SEO Settings',
      href: '/seo',
    },
    {
      title: 'Social Media Settings',
      href: '/social-media',
    },
  ],
},
  {
    
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
  title: 'Quotes / Bible Verse',
  href: '/modules/quotes-bibleverse',
  items: [
    {
      title: 'Quotes & Bible Verse List',
      href: '/list',
    },
    {
      title: 'How to Add a Quote / Bible Verse',
      href: '/add',
    },
    {
      title: 'How to Edit a Quote / Bible Verse',
      href: '/edit',
    },
    {
      title: 'How to View a Quote / Bible Verse',
      href: '/view',
    },
    {
      title: 'How to Delete a Quote / Bible Verse',
      href: '/delete',
    },
  ],
},
{
  title: 'Prayer Board',
  href: '/modules/prayerboard-management',
  items: [
    {
      title: 'Prayer Board List',
      href: '/list',
    },
    {
      title: 'Pending Requests',
      href: '/pending',
    },
    {
      title: 'Active Requests',
      href: '/active',
    },
    {
      title: 'Answered Requests',
      href: '/answered',
    },
    {
      title: 'Ended Requests',
      href: '/ended',
    },
    {
      title: 'Rejected Requests',
      href: '/rejected',
    },
    {
      title: 'Prayer Category List',
      href: '/category',
    },
  ],
},
{
  title: 'Help Requests',
  href: '/modules/help-requests',
  items: [
    {
      title: 'How to Add a Help Request',
      href: '/add',
    },
    {
      title: 'Pending Requests',
      href: '/pending',
    },
    {
      title: 'How to Approve or Reject a Help Request',
      href: '/review',
    },
    {
      title: 'Approved Requests',
      href: '/approve',
    },
    {
      title: 'Rejected Requests',
      href: '/reject',
    },
    {
      title: 'Closed Requests',
      href: '/close',
    },
    {
      title: 'Help Request Details',
      href: '/details',
    },
  ],
},
{
  title: 'Email Blaster',
  href: '/modules/email-blaster',
  items: [
    {
      title: 'Campaign List',
      href: '/campaign',
      items: [
        {
          title: 'How to Add a Campaign',
          href: '/add',
        },
        {
          title: 'How to Edit a Campaign',
          href: '/edit',
        },
      ],
    },
    {
      title: 'Subscriber List',
      href: '/subscriber',
      items: [
        {
          title: 'How to Add a Subscriber',
          href: '/add',
        },
        {
          title: 'How to Edit a Subscriber',
          href: '/edit',
        },
      ],
    },
    {
      title: 'Mailing List',
      href: '/mailing-list',
      items: [
        {
          title: 'How to Add a Mailing List',
          href: '/add',
        },
        {
          title: 'How to Edit a Mailing List',
          href: '/edit',
        },
        {
          title: 'Mailing List Details',
          href: '/details',
        },
      ],
    },
    {
      title: 'How to Send a Newsletter',
      href: '/newsletter',
    },
    {
      title: 'Settings',
      href: '/settings',
      items: [
        {
          title: 'Mails Delivered',
          href: '/mail-delivered-list',
        },
        {
          title: 'Mail Queue',
          href: '/mail-queue-list',
        },
        {
          title: 'SMTP List',
          href: '/smtp-list',
          items: [
            {
              title: 'How to Add an SMTP',
              href: '/add',
            },
            {
              title: 'How to Edit an SMTP',
              href: '/edit',
            },
          ],
        },
        {
          title: 'Webhook List',
          href: '/webhook-list',
          items: [
            {
              title: 'How to Add a Webhook',
              href: '/add',
            },
            {
              title: 'Webhook Details',
              href: '/details',
            },
          ],
        },
      ],
    },
  ],
},
{
  title: 'Offerings',
  href: '/modules/offerings',
  items: [
    {
      title: 'Donation List',
      href: '/donation',
      items: [
        {
          title: 'Donation Details',
          href: '/details',
        },
        {
          title: 'Donation Search',
          href: '/search',
        },
      ],
    },
    {
      title: 'Payment Gateway List',
      href: '/paymentgateway',
      items: [
        {
          title: 'How to Edit a Payment Gateway',
          href: '/edit',
        },
      ],
    },
    {
      title: 'Fund List',
      href: '/fund',
      items: [
        {
          title: 'Fund Details',
          href: '/details',
        },
        {
          title: 'How to Edit a Fund',
          href: '/edit',
        },
      ],
    },
    {
      title: 'Pay Account List',
      href: '/payaccount',
      items: [
        {
          title: 'How to Add a Pay Account',
          href: '/add',
        },
        {
          title: 'Pay Account Status',
          href: '/status',
        },
        {
          title: 'How to Delete a Pay Account',
          href: '/delete',
        },
      ],
    },
  ],
},
{
  title: 'Messages',
  href: '/modules/messages',
  items: [
    {
      title: 'Sent Messages List',
      href: '/list',
    },
    {
      title: 'Batch Message List',
      href: '/batch-details',
    },
    {
      title: 'Search Messages by Mode',
      href: '/search',
    },
  ],
},
{
  title: 'Contact Requests',
  href: '/modules/contact-requests',
  items: [
    {
      title: 'Contact Requests List',
      href: '/list',
    },
    {
      title: 'Contact Request Details',
      href: '/details',
    },
    {
      title: 'Search Contact Requests',
      href: '/search',
    },
  ],
},
{
  title: 'Feedbacks',
  href: '/modules/feedbacks',
  items: [
    {
      title: 'Feedbacks List',
      href: '/list',
    },
  ],
},
{
  title: 'Reports',
  href: '/modules/reports',
  items: [
    {
      title: 'Report List',
      href: '/report-list',
    },
    {
      title: 'How to Download a Membership Report',
      href: '/download-membership-report',
    },
    {
      title: 'How to Download an Important Dates Report',
      href: '/download-important-dates-report',
    },
    {
      title: 'How to View a Message History Report',
      href: '/message-history-list',
    },
  ],
},
{
  title: 'Activity Logs',
  href: '/modules/activity-logs',
  items: [
    {
      title: 'Activity Log List',
      href: '/list',
    },
  ],
},
{
  title: 'WebCMS',
  href: '/modules/webcms',
  items: [
    {
      title: 'Pages',
      href: '/page',
      items: [
        {
          title: 'How to Add a Page',
          href: '/add',
        },
        {
          title: 'How to Edit a Page',
          href: '/edit',
        },
        {
          title: 'How to View a Page',
          href: '/view',
        },
        {
          title: 'How to Delete a Page',
          href: '/delete',
        },
      ],
    },
    {
      title: 'Page Categories',
      href: '/page-category',
      items: [
        {
          title: 'How to Add a Page Category',
          href: '/add',
        },
        {
          title: 'How to Edit a Page Category',
          href: '/edit',
        },
      ],
    },
    {
      title: 'Posts',
      href: '/post',
      items: [
        {
          title: 'How to Add a Post',
          href: '/add',
        },
        {
          title: 'How to Edit a Post',
          href: '/edit',
        },
        {
          title: 'How to Delete a Post',
          href: '/delete',
        },
      ],
    },
    {
      title: 'FAQ',
      href: '/faq',
      items: [
        {
          title: 'How to Add a FAQ',
          href: '/add',
        },
        {
          title: 'How to Edit a FAQ',
          href: '/edit',
        },
      ],
    },
    {
      title: 'FAQ Categories',
      href: '/faq-category',
      items: [
        {
          title: 'How to Add a FAQ Category',
          href: '/add',
        },
        {
          title: 'How to Edit a FAQ Category',
          href: '/edit',
        },
      ],
    },
    {
      title: 'Code Snippets',
      href: '/code-snippets',
      items: [
        {
          title: 'How to Add a Widget',
          href: '/add',
        },
        {
          title: 'How to Edit a Widget',
          href: '/edit',
        },
      ],
    },
  
  ],
},

{
  title: 'Master Data',
  href: '/modules/master-data',
  items: [
    {
      title: 'Countries',
      href: '/country',
    },
    {
      title: 'States',
      href: '/state',
    },
    {
      title: 'Cities',
      href: '/city',
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
{
  title: 'Media Files Management',
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
]

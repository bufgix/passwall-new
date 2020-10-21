import * as Icons from 'heroicons-react'

export const THEME = {
  LIGHT: 'theme-light',
  DARK: 'theme-dark'
}

export const PAGES = {
  FeedBack: {
    path: '/',
    name: 'Give Feedback',
    external: false
  },
  Contact: {
    path: '/',
    name: 'Contact',
    external: false
  },
  Community: {
    path: '/',
    name: 'Community',
    external: false
  },
  Twitter: {
    path: '/',
    name: 'Twitter',
    external: false
  }
}

export const DOWLOAD_LINKS = [
  {
    name: 'MacOS',
    link: '#'
  },
  {
    name: 'Linux',
    link: '#'
  },
  {
    name: 'Windows',
    link: '#'
  }
]

export const FREE_TIER = [
  {
    name: 'Logins',
    icon: Icons.Users
  },
  {
    name: 'Easy Import',
    icon: Icons.CloudDownload
  },
  {
    name: 'Some Other Pro',
    icon: Icons.Users
  }
]

export const PAID_TIER = [
  {
    name: 'Everything in free',
    icon: Icons.BadgeCheck
  },
  {
    name: 'Bank Accounts',
    icon: Icons.BadgeCheck
  },
  {
    name: 'Emails',
    icon: Icons.AtSymbol
  },
  {
    name: 'Private Notes',
    icon: Icons.ClipboardCheck
  },
  {
    name: 'Servers',
    icon: Icons.Terminal
  }
]
import { Button, Link } from '@chakra-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaEnvelope, FaGithub, FaPhone, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'
import { fontSizes } from '@/theme/foundations/typography'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Bosone',
    description: '',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'home',
        label: 'Home',
        href: '/',
        sx: {fontFamily:'Roboto', fontWeight:"300", fontSize:'14px'},
      },
      {
        id: 'solutions',
        label: 'Features',
        href: '/solution',
        sx: {fontFamily:'Roboto', fontWeight:"300", fontSize:'14px'},
      },
      {
        id: 'contact-us',
        label: 'Contact Us',
        href: '/contact-us',
        sx: { fontFamily:'Roboto', fontWeight:"300", fontSize:'14px' },
      },
      {
        id: 'faq',
        label: 'FAQ',
        href: '/faqs',
        sx: { fontFamily:'Roboto', fontWeight:"300", fontSize:'14px'},
      },
      {
        label: 'Login',
        href: '/login',
        sx: { fontFamily:'Roboto', fontWeight:"300", fontSize:'14px' },
      },
      {
        label: 'Sign Up',
        href: '/signup',
        variant: 'primary',
        sx: { fontFamily:'Roboto', fontWeight:"300", fontSize:'14px' },
      },
    ],
  },

  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
  
  footer: {
    copyright: (
      <>
        <Link href="/privacy-policy" sx={{ fontFamily: 'Roboto' }}>
          Privacy Policy
        </Link>
      </>
    ),
    links: [
      {
        label: 'Contact:',
        sx: { fontFamily: 'Roboto' },
      },
      {
        href: 'mailto:support@bosonex.com',
        label: <FaEnvelope size="14" />,
        sx: { fontFamily: 'Roboto' },
      },
      // {
      //   href: 'callto:+91 9870983696',
      //   label: <FaPhone size="14" />,
      //   sx: { fontFamily: 'Roboto, sans-serif' },
      // },
      // {
      //   href: 'https://twitter.com/saas_js',
      //   label: <FaTwitter size="14" />,
      //   sx: { fontFamily: 'Roboto, sans-serif' },
      // },
      // {
      //   href: 'https://github.com/saas-js/saas-ui',
      //   label: <FaGithub size="14" />,
      //   sx: { fontFamily: 'Roboto, sans-serif' },
      // },
    ],
  },
}

export default siteConfig

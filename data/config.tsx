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
        id: 'contact-us',
        label: 'Contact Us',
        href: 'contact-us',
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

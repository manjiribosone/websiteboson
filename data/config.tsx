import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaEnvelope, FaGithub, FaMailchimp, FaPhone, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

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
      },
      {
        id: 'id',
        label: 'Contact Us',
           href: 'contact-us',
      },
      {
        id: 'faq',
        label: 'FAQ',
        href:'/faqs',
      },
    
      {
        label: 'Login',
        href: '/login',
      },
      {
        label: 'Sign Up',
        href: '/signup',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        {/* Built by{' '} */}
        <Link href="/privacy-policy">Privacy Policy</Link>
      </>
    ),
    links: [
      {
        label:'Contact Us :',
      },
      {
        href: 'mailto:support@bosonex.com',
        // label: 'Contact',
        label:<FaEnvelope size="14" />
      },
      {
        href: 'callto:+91 9870983696',
        // label: 'Contact',
        label:<FaPhone size="14" />
      },
      {
        // href: 'https://twitter.com/saas_js',
        // label: <FaTwitter size="14" />,
      },
      {
        // href: 'https://github.com/saas-js/saas-ui',
        // label: <FaGithub size="14" />,
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
}

export default siteConfig

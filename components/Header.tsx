'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

// Import the CSS file for custom animations
import '@/css/customStyles.css'

// Function to wrap each letter in a span with a class for animation
const animateHeaderTitle = (title: string) => {
  return title.split('').map((letter, index) => (
    <span key={index} className="letter-animation">
      {letter}
    </span>
  ))
}

const Header = () => {
  return (
    <header className="relative flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">{/* Logo or any additional element */}</div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="gradient-text hidden h-6 text-2xl font-semibold sm:block">
                {animateHeaderTitle(siteMetadata.headerTitle)}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
            >
              {link.title}
            </Link>
          ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header

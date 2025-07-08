import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLenis } from 'lenis/react'
import { useTranslation } from 'react-i18next'

const Navbar = ({ navOpen }) => {
  const { t, i18n } = useTranslation()
  const lastActiveLink = useRef()
  const activeBox = useRef()
  const lenis = useLenis()

  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px'
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px'
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px'
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px'
    }
  }

  useEffect(() => {
    initActiveBox()
    window.addEventListener('resize', initActiveBox)
    return () => window.removeEventListener('resize', initActiveBox)
  }, [])

  const activeCurrentLink = (event, link) => {
    event.preventDefault()
    lastActiveLink.current?.classList.remove('active')
    event.target.classList.add('active')
    lastActiveLink.current = event.target

    activeBox.current.style.top = event.target.offsetTop + 'px'
    activeBox.current.style.left = event.target.offsetLeft + 'px'
    activeBox.current.style.width = event.target.offsetWidth + 'px'
    activeBox.current.style.height = event.target.offsetHeight + 'px'

    const target = document.querySelector(link)
    if (target && lenis) {
      lenis.scrollTo(target, {
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
    }
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const navItems = [
    {
      key: 'home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink,
    },
    {
      key: 'about',
      link: '#about',
      className: 'nav-link',
    },
    {
      key: 'work',
      link: '#work',
      className: 'nav-link',
    },
    {
      key: 'contact',
      link: '#contact',
      className: 'nav-link md:hidden',
    },
  ]

  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')}>
      {navItems.map(({ key, link, className, ref }, index) => (
        <a
          key={index}
          href={link}
          ref={ref}
          className={className}
          onClick={(e) => activeCurrentLink(e, link)}
        >
          {t(`nav.${key}`)}
        </a>
      ))}

      <div className="active-box" ref={activeBox}></div>

  
     
    </nav>
  )
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
}

export default Navbar

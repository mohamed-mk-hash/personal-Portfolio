/**
 * @copyright 2025 AmineMkh
 * @license Apache-2.0
 */
import Navbar from "./Navbar"
import { useState } from "react"
import { useTranslation } from "react-i18next"

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { i18n } = useTranslation()

  const changeLang = (lang) => {
    i18n.changeLanguage(lang)
    setLangOpen(false)
  }

  const getLanguageName = (lang) => {
    switch (lang) {
      case 'en':
        return 'English'
      case 'fr':
        return 'Français'
      case 'ar':
        return 'العربية'
      default:
        return ''
    }
  }

  const getFlagFile = (lang) => {
    switch (lang) {
      case 'en':
        return 'usa.jpg'
      case 'fr':
        return 'france.jpg'
      case 'ar':
        return 'arabia.png'
      default:
        return ''
    }
  }

  return (
    <div>
      <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 
        bg-gradient-to-b from-zinc-900 to-zinc-900/0">
        <div className="max-w-screen-2xl w-full mx-auto px-4
          flex items-center justify-between md:grid md:grid-cols-[1fr_3fr_1fr] md:px-6">

          <h1>
            <a href="/" className="logo">
              <img src="/images/logo.svg" width={40} height={40} alt="Amine-mkh" />
            </a>
          </h1>

      
          <div className="relative md:hidden">
  <button
    className="btn btn-secondary flex items-center gap-2"
    onClick={() => setLangOpen(!langOpen)}
  >
    <img
      src={`/images/${getFlagFile(i18n.language)}`}
      alt={i18n.language}
      className="w-5 h-5 object-cover rounded-full"
    />
    {getLanguageName(i18n.language)}
  </button>
  {langOpen && (
    <ul className="absolute top-full mt-2 right-0 bg-zinc-800 text-white rounded shadow-md z-50 w-33">
      {['en', 'fr'].map((lang) => (
        <li key={lang}>
          <button
            onClick={() => changeLang(lang)}
            className="flex items-center gap-2 px-4 py-2 hover:bg-zinc-700 w-full text-left"
          >
            <img
              src={`/images/${getFlagFile(lang)}`}
              alt={lang}
              className="w-5 h-5 object-cover rounded-full"
            />
            {getLanguageName(lang)}
          </button>
        </li>
      ))}
    </ul>
  )}
</div>

         
          <div className="hidden md:block md:justify-self-center">
            <Navbar navOpen={navOpen} />
          </div>

      
          <div className="hidden md:block md:relative md:justify-self-end">
          <button className="btn btn-secondary flex items-center gap-2" onClick={() => setLangOpen(!langOpen)}>
  <img
    src={`/images/${getFlagFile(i18n.language)}`}
    alt={i18n.language}
    className="w-5 h-5 object-cover rounded-full"
  />
  {getLanguageName(i18n.language)}
</button>
{langOpen && (
  <ul className="absolute top-full mt-2 right-0 bg-zinc-800 text-white rounded shadow-md z-50">
    {['en', 'fr'].map((lang) => (
      <li key={lang}>
        <button
          onClick={() => changeLang(lang)}
          className="flex items-center gap-2 px-4 py-2 hover:bg-zinc-700 w-full text-left"
        >
          <img
            src={`/images/${getFlagFile(lang)}`}
            alt={lang}
            className="w-5 h-5 object-cover rounded-full"
          />
          {getLanguageName(lang)}
        </button>
      </li>
    ))}
  </ul>
)}

          </div>

          
          <div className="relative md:hidden">
          <button className="menu-btn"
             onClick={() => setNavOpen((prev) => !prev)}>
  <span className="material-symbols-rounded">{navOpen ? 'close': 'menu'}</span>
</button>
<Navbar navOpen={navOpen} />
          </div>

        </div>
      </header>
    </div>
  )
}

export default Header
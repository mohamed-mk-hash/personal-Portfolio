/**
 * @copyright 2025 AmineMkh
 * @license Apache-2.0
 */
import { ButtonPrimary } from "./Button"
import { ButtonOutline } from "./Button"
import { useTranslation } from "react-i18next"
const Hero = () => {

  const {t} = useTranslation()

  return (
    <section id="home" className="pt-5 lg:pt-50">
     <div className="hero-container container items-center lg:grid">

        <div>
            <div className="flex items-center gap-3">
                
        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                    <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                     <span className="absolute inset-0 rounded-full bg-emerald-400
                     animate-ping">

                     </span>
                    </span>

                    {t('hero.available')}
                </div>
            </div>
            <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch]
            mt-5 mb-8 lg:mb-10" >
            {t('hero.title')}
            </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
            href="/download/Amine_mkh-CV.docx"
            label={t('hero.download')}
            icon="download"
            /> 

            <ButtonOutline
            href="#about"
            label={t('hero.scroll')}
            icon="arrow_downward"
            />
          </div>

        </div>

     

     </div>
    </section>
  )
}

export default Hero

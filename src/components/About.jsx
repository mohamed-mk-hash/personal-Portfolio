/**
 * @copyright 2025 AmineMkh
 * @license Apache-2.0
 */
import { useTranslation } from 'react-i18next'

const aboutItems = [
  {
    key: 'about.project_done',
    number: 45
  },
  {
    key: 'about.years_experience',
    number: 3
  }
];

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            {t('about.description')}
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ key, number }, index) => (
              <div key={index}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                  <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                </div>
                <p className="text-sm text-zinc-400">{t(key)}</p>
              </div>
            ))}
            <img
              src="/images/logo.svg"
              alt="logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

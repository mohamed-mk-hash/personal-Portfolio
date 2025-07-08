/**
 * @copyright 2025 AmineMkh
 * @license Apache-2.0
 */

import SkillCard from "./SkillCard";
import { useTranslation } from "react-i18next";
const skillItem = [
    {
      imgSrc: '/images/html.svg',
      label: 'html',
      desc: 'Skills.Skill1.title'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'Skills.Skill2.title'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Skills.Skill3.title'
    },
    {
      imgSrc: '/images/php.svg',
      label: 'PHP',
      desc: 'Skills.Skill4.title'
    },
    {
      imgSrc: '/images/wordpress.svg',
      label: 'woordpress',
      desc: 'Skills.Skill5.title'
    },
    {
      imgSrc: '/images/laravel.svg',
      label: 'laravel',
      desc: 'Skills.Skill6.title'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Skills.Skill7.title'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'Skills.Skill8.title'
    },
  ];

const Skill = () => {
  const {t} = useTranslation()
  return (
    <section className="pt-20">
        <div className="container">
            <h2 className="headline-2 reveal-up">
            {t('skill.title')}
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
            {t("skill.description")}
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                skillItem.map(({ imgSrc, label, desc } ,key)=> (
                     <SkillCard
                     key={key}
                     imgSrc={imgSrc}
                     label={label}
                     desc={t(desc)}
                     classes="reveal-up"
                     />
                )
                )
            }
            </div>
        </div>
    </section>
  )
}

export default Skill

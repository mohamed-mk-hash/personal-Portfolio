/**
 * @copyright 2025 AmineMkh
 * @license Apache-2.0
 */

import { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";

const works = [
    {
      imgSrc: '/images/amine-auto.jpg',
      title: 'work.projects.project1.title',
      tags: ['PHP',  'E-commerce'],
      githubLink: 'https://github.com/mohamed-mk-hash/Amine-Auto'
    },
    {
      imgSrc: '/images/houari.jpg',
      title: 'work.projects.project2.title',
      tags: ['Woordpress'],
      projectLink: 'https://houari.me/'
    },
    {
      imgSrc: '/images/edusity.jpg',
      title: 'work.projects.project3.title',
      tags: [ 'React'],
      projectLink: 'https://aminefirstwebsite.netlify.app/',
      githubLink: 'https://github.com/mohamed-mk-hash/edusity-college-website'
    },
    {
      imgSrc: '/images/albaraka.jpg',
      title: 'work.projects.project4.title',
      tags: ['Woordpress'],
      projectLink: 'https://elbaraka.org/'
    },
    {
      imgSrc: '/images/selle-de-sport.jpg',
      title: 'work.projects.project5.title',
      tags: ['React'],
      projectLink: 'https://aminesalle.netlify.app/',
      githubLink: 'https://github.com/mohamed-mk-hash/react-gym-website'
    },
    {
      imgSrc: '/images/phone-store.jpg',
      title: 'work.projects.project6.title',
      tags: ['PHP','E-commerce'],
      githubLink: 'https://github.com/mohamed-mk-hash/phone-store-php'
    },
    {
      imgSrc: '/images/syria-invest.png',
      title: 'work.projects.project7.title',
      tags: ['Woordpress'],
      projectLink: 'https://mofeed.shop/'
    },
    {
      imgSrc: '/images/iphone-preentation.jpg',
      title: 'work.projects.project8.title',
      tags: ['React', 'Gsap'],
      projectLink: 'https://amineiphone.netlify.app/',
      githubLink: 'https://github.com/mohamed-mk-hash/iphone-presentation-react-gsap'
    },
    {
    imgSrc: '/images/mouffid.jpg',
    title: 'work.projects.project9.title',
    tags: ['Woordpress', 'E-commerce'],
    projectLink: 'https://mouffid.com/',
  },
  {
    imgSrc: '/images/admin-dashboard.jpg',
    title: 'work.projects.project10.title',
    tags: ['Laravel', 'React'],
    githubLink: 'https://github.com/mohamed-mk-hash/React-Laravel-Admin-Dashboard',
  },
   {
    imgSrc: '/images/portfolio.png',
    title: 'work.projects.project11.title',
    tags: ['Gsap', 'React'],
    githubLink: 'https://github.com/mohamed-mk-hash/personal-Portfolio',
  },
     {
    imgSrc: '/images/makri_website.jpg',
    title: 'work.projects.project12.title',
    tags: ['Woordpress'],
    projectLink: 'https://mofeed.store/',
  }
];

console.log('work.projects.project11.title');

const Work = () => {


  const {t} = useTranslation()

  const [selectedTag, setSelectedTag] = useState('All');
  const gridRef = useRef(null);

  const allTags = ['All', ...new Set(works.flatMap(work => work.tags))];
  const filteredWorks = selectedTag === 'All'
    ? works
    : works.filter(work => work.tags.includes(selectedTag));

  
    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          gridRef.current.children,
          {
            opacity: 0,
            y: 50,
            scale: 0.8,
            rotate: 8,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
            filter: "blur(0px)",
            duration: 1.5,
            stagger: 0.1,
            ease: "elastic.out(1, 0.5)", // spring effect
          }
        );
      }, gridRef);
    
      return () => ctx.revert();
    }, [filteredWorks]);
    

  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          {t('work.title')}
        </h2>

        {/* Tag Filter */}
        <div className="flex flex-wrap gap-2 mb-6">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTag === tag
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Animated Projects Grid */}
        <div
          ref={gridRef}
          className="grid gap-x-4 gap-y-5"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}
        >
         {filteredWorks.map(({ imgSrc, title, tags, projectLink, githubLink }, key) => (
  <ProjectCard
    key={key}
    imgSrc={imgSrc}
    title={t(title)}
    tags={tags}
    projectLink={projectLink}
    githubLink={githubLink}
  />
))}

        </div>
      </div>
    </section>
  );
};

export default Work;

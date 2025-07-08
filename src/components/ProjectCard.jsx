/**
 * @copyright 2025 AmineMkh
 * @license Apache-2.0
 */
import PropTypes from "prop-types";

const ProjectCard = ({
  imgSrc,
  title,
  tags,
  projectLink,
  githubLink,
  classes
}) => {
  return (
    <div className={`relative p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors ${classes}`}>
      <figure className="img-box aspect-square rounded-md mb-3">
        <img
          src={imgSrc}
          loading="lazy"
          alt={title}
          className="img-cover"
        />
      </figure>

      <div className="flex justify-between gap-3 items-start">
        <div className="flex-1">
          <h3 className="text-base font-semibold text-white mb-2">
            {title}
          </h3>
          <div className="flex flex-wrap items-center gap-1.5">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-7 text-xs text-zinc-400 bg-zinc-50/5 grid items-center px-2 rounded-md"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-md grid place-items-center bg-neutral-100 hover:bg-neutral-200 transition text-black"
              title="View GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.85 10.96.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.19.7-3.86-1.54-3.86-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.45.11-3.03 0 0 .97-.31 3.18 1.19a11.1 11.1 0 0 1 2.9-.39c.99.01 1.99.13 2.9.39 2.2-1.5 3.17-1.19 3.17-1.19.63 1.58.23 2.74.11 3.03.74.81 1.19 1.85 1.19 3.11 0 4.43-2.68 5.4-5.24 5.68.41.35.77 1.03.77 2.08 0 1.5-.01 2.7-.01 3.07 0 .3.21.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5z"/>
              </svg>
            </a>
          )}
          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-md grid place-items-center bg-sky-400 text-zinc-950 hover:bg-sky-300 transition"
              title="Visit Website"
            >
              <span className="material-symbols-rounded" aria-hidden="true">
                arrow_outward
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  projectLink: PropTypes.string,
  githubLink: PropTypes.string,
  classes: PropTypes.string
};

export default ProjectCard;

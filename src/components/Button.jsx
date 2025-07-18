/**
 * @copyright 2025 AmineMkh
 * @license Apache-2.0
 */
import PropTypes from "prop-types"
const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes,
}) => {
    if(href) {
  return (
   <a 
   href={href}
   target={target}
   download
   className={"btn btn-primary " + classes}
   >
   {label}

   {icon ?
   <span className="material-symbols-rounded"
   aria-hidden="true">
   {icon}
   </span>
   : undefined
   }

   </a>
  )
} else {
    return (
        <button className={"btn btn-primary " + classes}>
            {label}

            {icon ?
   <span className="material-symbols-rounded"
   aria-hidden="true">
   {icon}
   </span>
   : undefined
        }
        </button>
    )
}
}

ButtonPrimary.prototypes = {
    label : PropTypes.string.isRequired,
    href : PropTypes.string,
    target : PropTypes.string,
    classes : PropTypes.string
}


/* BUTTON SECONDARY */

const ButtonOutline= ({
    href,
    target = '_self',
    label,
    icon,
    classes,
}) => {
    if(href) {
  return (
   <a 
   href={href}
   target={target}
   className={"btn btn-outline " + classes}
   >
   {label}

   {icon ?
   <span className="material-symbols-rounded"
   aria-hidden="true">
   {icon}
   </span>
   : undefined
   }

   </a>
  )
} else {
    return (
        <button className={"btn btn-outline " + classes}>
            {label}

            {icon ?
   <span className="material-symbols-rounded"
   aria-hidden="true">
   {icon}
   </span>
   : undefined
        }
        </button>
    )
}
}

ButtonOutline.prototypes = {
    label : PropTypes.string.isRequired,
    href : PropTypes.string,
    target : PropTypes.string,
    classes : PropTypes.string
}
export {
    ButtonPrimary,
    ButtonOutline
} 

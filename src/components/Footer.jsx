/**
 * @copyright 2025 AmineMkh
 * @license Apache-2.0
 */
import { ButtonPrimary } from "./Button";
import { useTranslation } from "react-i18next";


export const Footer = () => {
  const { t } = useTranslation();

const sitemap = [
  { label: t("footer.sitemap.home"), href: "#home" },
  { label: t("footer.sitemap.about"), href: "#about" },
  { label: t("footer.sitemap.work"), href: "#work" },
  { label: t("footer.sitemap.contact"), href: "#contact" }
];

  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/mohamed-mk-hash'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mokhtarimohamedlamine/'
    },
  ];

  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              {t("footer.title")}
            </h2>

            <ButtonPrimary
              href="mailto:aminemokhtari028@gmail.com"
              label={t("footer.cta")}
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">{t("footer.sitemap.title")}</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">{t("footer.socials.title")}</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="" className="logo reveal-up">
            <img
              src="/images/logo.svg"
              alt="Logo"
              width={40}
              height={40}
            />
          </a>

          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2025 <span className="text-zinc-200">{t("footer.copyright")}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useLanguage } from "../i18n/language";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { to: "/", label: t("site.nav.home") },
    { to: "/team", label: t("site.nav.team") },
    { to: "/project", label: t("site.nav.project") },
    { to: "/sponsors", label: t("site.nav.sponsors") },
    { to: "/gallery", label: t("site.nav.gallery") },
    { to: "/contact", label: t("site.nav.contact") }
  ] as const;

  return (
    <header className="site-header">
      <div className="site-header-wrap">
        <Link to="/" className="brand-link" onClick={() => setOpen(false)}>
          <img
            src="/assets/logo/Logo_EMUS_V-BL.png"
            alt="EMUS"
            className="logo"
          />
        </Link>

        <div className="header-controls">
          <button
            type="button"
            className="lang-toggle"
            onClick={toggleLanguage}
            aria-label={
              language === "en"
                ? t("site.language.switch_to_fr")
                : t("site.language.switch_to_en")
            }
          >
            {language === "en" ? "FR" : "EN"}
          </button>
          <button
            type="button"
            className="nav-toggle"
            aria-label={t("site.nav.toggle")}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
        </div>

        <nav
          className={`site-nav ${open ? "open" : ""}`}
          aria-label={t("site.nav.aria")}
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to as never}
                  onClick={() => setOpen(false)}
                  className="nav-link"
                  activeProps={{ className: "active" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

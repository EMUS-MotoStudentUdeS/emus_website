import { useLanguage } from "../i18n/language";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <img
        src="/assets/logo/Logo_EMUS_V-BL_titre.png"
        alt="EMUS"
        className="logo-footer"
      />
      <div className="footer-links">
        <a href="/team">{t("site.footer.team")}</a>
        <a href="/project">{t("site.footer.project")}</a>
        <a href="/sponsors">{t("site.footer.sponsors")}</a>
        <a href="/gallery">{t("site.footer.gallery")}</a>
        <a href="/contact">{t("site.footer.contact")}</a>
      </div>
      <div className="footer-meta">
        <p>
          &copy; {year} {t("site.footer.description")}
        </p>
        <p className="footer-note">{t("site.footer.note")}</p>
      </div>
    </footer>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { contact } from "../data/site";
import { useLanguage } from "../i18n/language";

export const Route = createFileRoute("/contact")({
  component: ContactPage
});

function ContactPage() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="page-hero">
        <div className="tag">{t("contact.hero.tag")}</div>
        <h1>{t("contact.hero.title")}</h1>
        <p className="lead">{t("contact.hero.lead")}</p>
      </section>

      <section
        className="section section-tight"
        id="contact-details"
        aria-labelledby="contact-details-title"
      >
        <div className="section-heading">
          <p className="section-kicker">{t("contact.details.kicker")}</p>
          <h2 id="contact-details-title">{t("contact.details.title")}</h2>
          <p>
            <span>{t("contact.details.email_prefix")}</span>{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p>
            <span>{t("contact.details.social_prefix")}</span>{" "}
            <a href={contact.facebook} target="_blank" rel="noreferrer">
              {t("contact.details.facebook")}
            </a>{" "}
            /{" "}
            <a href={contact.instagram} target="_blank" rel="noreferrer">
              {t("contact.details.instagram")}
            </a>
          </p>
        </div>
        <div className="split-2">
          <div className="card card--surface card--padded card--info">
            <h3>{t("contact.details.email_title")}</h3>
            <p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </div>
          <div className="card card--surface card--padded card--info">
            <h3>{t("contact.details.social_title")}</h3>
            <ul className="list-simple">
              <li>
                <a href={contact.facebook} target="_blank" rel="noreferrer">
                  {t("contact.details.facebook")}
                </a>
              </li>
              <li>
                <a href={contact.instagram} target="_blank" rel="noreferrer">
                  {t("contact.details.instagram")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="section section-tight"
        id="location"
        aria-labelledby="location-title"
      >
        <div className="section-heading">
          <p className="section-kicker">{t("contact.location.kicker")}</p>
          <h2 id="location-title">{t("contact.location.title")}</h2>
          <p>{t("contact.location.body")}</p>
        </div>
        <div className="placeholder-media" aria-hidden="true">
          {t("contact.location.map_placeholder")}
        </div>
      </section>
    </main>
  );
}

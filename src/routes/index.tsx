import { createFileRoute } from "@tanstack/react-router";
import { contact } from "../data/site";
import { useLanguage } from "../i18n/language";

export const Route = createFileRoute("/")({
  component: HomePage
});

function HomePage() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="hero" id="top">
        <div className="hero__grid">
          <div className="hero__content">
            <p className="eyebrow">{t("home.hero.eyebrow")}</p>
            <h1>{t("home.hero.title")}</h1>
            <p className="lead">{t("home.hero.lead")}</p>
            <div className="hero__actions">
              <a className="button button-primary" href="#about">
                {t("home.hero.primary_cta")}
              </a>
              <a className="button button-ghost" href="#contact">
                {t("home.hero.secondary_cta")}
              </a>
            </div>
            <div className="hero__fact">
              <span className="fact-label">
                {t("home.hero.next_race_label")}
              </span>
              <span className="fact-value">
                {t("home.hero.next_race_value")}
              </span>
            </div>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__glow" />
            <div className="hero__image">
              <img
                src="/assets/hero/MotoAragon.jpg"
                alt={t("home.hero.image_alt")}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="facts" aria-labelledby="facts-title">
        <div className="split-2 split-2-top">
          <div className="placeholder-media" aria-hidden="true">
            <img
              src="/assets/hero/working.webp"
              alt={t("home.facts.image_alt")}
            />
          </div>
          <div>
            <div className="section-heading">
              <p className="section-kicker">{t("home.facts.kicker")}</p>
              <h2 id="facts-title">{t("home.facts.title")}</h2>
            </div>
            <div className="fact-grid">
              <article className="fact-card">
                <p className="fact-card-label">
                  {t("home.facts.card_1_label")}
                </p>
                <p className="fact-card-value">
                  {t("home.facts.card_1_value")}
                </p>
                <p className="fact-card-note">{t("home.facts.card_1_note")}</p>
              </article>
              <article className="fact-card">
                <p className="fact-card-label">
                  {t("home.facts.card_2_label")}
                </p>
                <p className="fact-card-value">
                  {t("home.facts.card_2_value")}
                </p>
                <p className="fact-card-note">{t("home.facts.card_2_note")}</p>
              </article>
              <article className="fact-card">
                <p className="fact-card-label">
                  {t("home.facts.card_3_label")}
                </p>
                <p className="fact-card-value">
                  {t("home.facts.card_3_value")}
                </p>
                <p className="fact-card-note">{t("home.facts.card_3_note")}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section section-split"
        id="about"
        aria-labelledby="about-title"
      >
        <div className="section-heading">
          <p className="section-kicker">{t("home.about.kicker")}</p>
          <h2 id="about-title">{t("home.about.title")}</h2>
        </div>
        <div className="split-grid">
          <div className="split-text">
            <p>{t("home.about.paragraph_1")}</p>
            <p>{t("home.about.paragraph_2")}</p>
          </div>
          <div className="split-card" aria-hidden="true">
            <div className="split-card-header">
              {t("home.about.timeline_header")}
            </div>
            <ul className="timeline">
              <li>
                <span className="timeline-dot" />
                <div>
                  <p className="timeline-title">
                    {t("home.about.timeline_1_title")}
                  </p>
                  <p className="timeline-note">
                    {t("home.about.timeline_1_note")}
                  </p>
                </div>
              </li>
              <li>
                <span className="timeline-dot" />
                <div>
                  <p className="timeline-title">
                    {t("home.about.timeline_2_title")}
                  </p>
                  <p className="timeline-note">
                    {t("home.about.timeline_2_note")}
                  </p>
                </div>
              </li>
              <li>
                <span className="timeline-dot" />
                <div>
                  <p className="timeline-title">
                    {t("home.about.timeline_3_title")}
                  </p>
                  <p className="timeline-note">
                    {t("home.about.timeline_3_note")}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="section section-highlight"
        id="sponsors"
        aria-labelledby="sponsors-title"
      >
        <div className="section-heading">
          <p className="section-kicker">{t("home.sponsors.kicker")}</p>
          <h2 id="sponsors-title">{t("home.sponsors.title")}</h2>
        </div>
        <div className="highlight-grid">
          <div>
            <p>{t("home.sponsors.paragraph")}</p>
            <div className="highlight-actions">
              <a className="button button-primary" href="/sponsors">
                {t("home.sponsors.primary_cta")}
              </a>
              <a className="button button-ghost" href="#contact">
                {t("home.sponsors.secondary_cta")}
              </a>
            </div>
          </div>
          <div className="highlight-card" aria-hidden="true">
            <p className="card-label">{t("home.sponsors.card_label")}</p>
            <ul className="list-simple">
              <li>{t("home.sponsors.item_1")}</li>
              <li>{t("home.sponsors.item_2")}</li>
              <li>{t("home.sponsors.item_3")}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="contact" aria-labelledby="contact-title">
        <div className="section-heading">
          <p className="section-kicker">{t("home.contact.kicker")}</p>
          <h2 id="contact-title">{t("home.contact.title")}</h2>
        </div>
        <div className="contact-grid">
          <div>
            <p>{t("home.contact.paragraph")}</p>
            <ul className="contact-list">
              <li>
                <span className="contact-label">{t("home.contact.email")}</span>
                <span className="contact-value">
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </span>
              </li>
              <li>
                <span className="contact-label">
                  {t("home.contact.facebook")}
                </span>
                <span className="contact-value">
                  <a href={contact.facebook} target="_blank" rel="noreferrer">
                    {contact.facebook}
                  </a>
                </span>
              </li>
              <li>
                <span className="contact-label">
                  {t("home.contact.instagram")}
                </span>
                <span className="contact-value">
                  <a href={contact.instagram} target="_blank" rel="noreferrer">
                    {contact.instagram}
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className="contact-card" aria-hidden="true">
            <p className="card-label">{t("home.contact.based_in_label")}</p>
            <p className="card-value">{t("home.contact.based_in_value")}</p>
            <p className="card-note">{t("home.contact.based_in_note")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

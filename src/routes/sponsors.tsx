import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "../i18n/language";

export const Route = createFileRoute("/sponsors")({
  component: SponsorsPage
});

function SponsorsPage() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="page-hero">
        <div className="tag">{t("sponsors.hero.tag")}</div>
        <h1>{t("sponsors.hero.title")}</h1>
        <p className="lead">{t("sponsors.hero.lead")}</p>
        <div className="card-grid">
          <div className="stat-block">
            <p className="stat-value">{t("sponsors.hero.stat_1_value")}</p>
            <p className="stat-label">{t("sponsors.hero.stat_1_label")}</p>
          </div>
          <div className="stat-block">
            <p className="stat-value">{t("sponsors.hero.stat_2_value")}</p>
            <p className="stat-label">{t("sponsors.hero.stat_2_label")}</p>
          </div>
        </div>
      </section>

      <section className="section section-highlight" style={{ textAlign: "center" }}>
          <h3>{t("sponsors.offer.title")}</h3>
          <p>{t("sponsors.offer.body")}</p>
          <a className="button button-primary" href="/abatiello">
            {t("sponsors.offer.cta")}
          </a>
      </section>

      <section
        className="section section-tight"
        id="ways-to-help"
        aria-labelledby="ways-title"
      >
        <div className="section-heading">
          <p className="section-kicker">{t("sponsors.ways.kicker")}</p>
          <h2 id="ways-title">{t("sponsors.ways.title")}</h2>
        </div>
        <div className="card-grid wide">
          <article className="info-card">
            <div className="badge-label">{t("sponsors.ways.card_1_badge")}</div>
            <h3>{t("sponsors.ways.card_1_title")}</h3>
            <p>{t("sponsors.ways.card_1_body")}</p>
          </article>
          <article className="info-card">
            <div className="badge-label">{t("sponsors.ways.card_2_badge")}</div>
            <h3>{t("sponsors.ways.card_2_title")}</h3>
            <p>{t("sponsors.ways.card_2_body")}</p>
          </article>
          <article className="info-card">
            <div className="badge-label">{t("sponsors.ways.card_3_badge")}</div>
            <h3>{t("sponsors.ways.card_3_title")}</h3>
            <p>{t("sponsors.ways.card_3_body")}</p>
          </article>
          <article className="info-card">
            <div className="badge-label">{t("sponsors.ways.card_4_badge")}</div>
            <h3>{t("sponsors.ways.card_4_title")}</h3>
            <p>{t("sponsors.ways.card_4_body")}</p>
          </article>
          <article className="info-card">
            <div className="badge-label">{t("sponsors.ways.card_5_badge")}</div>
            <h3>{t("sponsors.ways.card_5_title")}</h3>
            <p>{t("sponsors.ways.card_5_body")}</p>
          </article>
          <article className="info-card">
            <div className="badge-label">{t("sponsors.ways.card_6_badge")}</div>
            <h3>{t("sponsors.ways.card_6_title")}</h3>
            <p>{t("sponsors.ways.card_6_body")}</p>
          </article>
        </div>
      </section>

      <section
        className="section section-tight"
        id="visibility"
        aria-labelledby="visibility-title"
      >
        <div className="section-heading">
          <p className="section-kicker">{t("sponsors.visibility.kicker")}</p>
          <h2 id="visibility-title">{t("sponsors.visibility.title")}</h2>
          <p>{t("sponsors.visibility.body")}</p>
        </div>
        <div className="placeholder-media-wide" aria-hidden="true">
          <img
            src="/assets/hero/MotoAragon.jpg"
            alt={t("sponsors.visibility.image_alt")}
          />
        </div>
      </section>

      <section
        className="section section-tight"
        id="cta"
        aria-labelledby="cta-title"
      >
        <div className="section-heading">
          <p className="section-kicker">{t("sponsors.cta.kicker")}</p>
          <h2 id="cta-title">{t("sponsors.cta.title")}</h2>
          <p>{t("sponsors.cta.body")}</p>
        </div>
        <div className="split-2">
          <div className="info-card">
            <h3>{t("sponsors.cta.next_steps_title")}</h3>
            <ul className="list-simple">
              <li>{t("sponsors.cta.next_steps_1")}</li>
              <li>{t("sponsors.cta.next_steps_2")}</li>
              <li>{t("sponsors.cta.next_steps_3")}</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>{t("sponsors.cta.contact_title")}</h3>
            <p>{t("sponsors.cta.contact_body")}</p>
            <div className="highlight-actions">
              <a className="button button-primary" href="/contact">
                {t("sponsors.cta.primary_cta")}
              </a>
              <a className="button button-ghost" href="/project">
                {t("sponsors.cta.secondary_cta")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

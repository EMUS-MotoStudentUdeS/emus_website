import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "../i18n/language";

export const Route = createFileRoute("/project")({
  component: ProjectPage
});

function ProjectPage() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="page-hero">
        <div className="hero__grid">
          <div className="hero__content">
            <div className="tag">{t("project.hero.tag")}</div>
            <h1>{t("project.hero.title")}</h1>
            <p className="lead">{t("project.hero.lead")}</p>
            <div className="card-grid">
              <div className="card card--alt card--padded card--stat">
                <p className="stat-value">{t("project.hero.stat_1_value")}</p>
                <p className="stat-label">{t("project.hero.stat_1_label")}</p>
              </div>
              <div className="card card--alt card--padded card--stat">
                <p className="stat-value">{t("project.hero.stat_2_value")}</p>
                <p className="stat-label">{t("project.hero.stat_2_label")}</p>
              </div>
            </div>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__glow" />
            <div className="placeholder-media">
              <img
                src="/assets/hero/alex&moto.webp"
                alt={t("project.hero.image_alt")}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="section section-tight"
        id="objectives"
        aria-labelledby="objectives-title"
      >
        <div className="split-2 split-2-top">
          <div className="placeholder-media" aria-hidden="true">
            <img
              src="/assets/hero/CAD_Moto.webp"
              alt={t("project.objectives.image_alt")}
            />
          </div>
          <div>
            <div className="section-heading">
              <p className="section-kicker">{t("project.objectives.kicker")}</p>
              <h2 id="objectives-title">{t("project.objectives.title")}</h2>
            </div>
            <p>{t("project.objectives.paragraph_1")}</p>
            <p>{t("project.objectives.paragraph_2")}</p>
          </div>
        </div>
      </section>

      <section
        className="section section-tight"
        id="focus"
        aria-labelledby="focus-title"
      >
        <div className="section-heading">
          <p className="section-kicker">{t("project.focus.kicker")}</p>
          <h2 id="focus-title">{t("project.focus.title")}</h2>
        </div>
        <div className="focus-grid sideImg-grid">
          <div className="focus-media">
            <img
              src="/assets/hero/moto2.webp"
              alt={t("project.focus.image_alt")}
            />
          </div>
          <div className="card-grid card-grid--single">
            <article className="card card--surface card--padded card--info">
              <div className="badge-label">
                {t("project.focus.card_1_badge")}
              </div>
              <h3>{t("project.focus.card_1_title")}</h3>
              <p>{t("project.focus.card_1_body")}</p>
            </article>
            <article className="card card--surface card--padded card--info">
              <div className="badge-label">
                {t("project.focus.card_2_badge")}
              </div>
              <h3>{t("project.focus.card_2_title")}</h3>
              <p>{t("project.focus.card_2_body")}</p>
            </article>
            <article className="card card--surface card--padded card--info">
              <div className="badge-label">
                {t("project.focus.card_3_badge")}
              </div>
              <h3>{t("project.focus.card_3_title")}</h3>
              <p>{t("project.focus.card_3_body")}</p>
            </article>
            <article className="card card--surface card--padded card--info">
              <div className="badge-label">
                {t("project.focus.card_4_badge")}
              </div>
              <h3>{t("project.focus.card_4_title")}</h3>
              <p>{t("project.focus.card_4_body")}</p>
            </article>
            <article className="card card--surface card--padded card--info">
              <div className="badge-label">
                {t("project.focus.card_5_badge")}
              </div>
              <h3>{t("project.focus.card_5_title")}</h3>
              <p>{t("project.focus.card_5_body")}</p>
            </article>
            <article className="card card--surface card--padded card--info">
              <div className="badge-label">
                {t("project.focus.card_6_badge")}
              </div>
              <h3>{t("project.focus.card_6_title")}</h3>
              <p>{t("project.focus.card_6_body")}</p>
            </article>
            <article className="card card--surface card--padded card--info">
              <div className="badge-label">
                {t("project.focus.card_7_badge")}
              </div>
              <h3>{t("project.focus.card_7_title")}</h3>
              <p>{t("project.focus.card_7_body")}</p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="section section-tight"
        id="timeline"
        aria-labelledby="timeline-title"
      >
        <div className="split-2 split-2-top">
          <div>
            <div className="section-heading">
              <p className="section-kicker">{t("project.timeline.kicker")}</p>
              <h2 id="timeline-title">{t("project.timeline.title")}</h2>
            </div>
            <ul className="timeline-simple">
              <li>
                <p className="title">{t("project.timeline.item_1_title")}</p>
                <p className="meta">{t("project.timeline.item_1_note")}</p>
              </li>
              <li>
                <p className="title">{t("project.timeline.item_2_title")}</p>
                <p className="meta">{t("project.timeline.item_2_note")}</p>
              </li>
              <li>
                <p className="title">{t("project.timeline.item_3_title")}</p>
                <p className="meta">{t("project.timeline.item_3_note")}</p>
              </li>
              <li>
                <p className="title">{t("project.timeline.item_4_title")}</p>
                <p className="meta">{t("project.timeline.item_4_note")}</p>
              </li>
            </ul>
          </div>
          <div className="placeholder-media" aria-hidden="true">
            <img
              src="/assets/hero/MotoAragon.webp"
              alt={t("project.timeline.image_alt")}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

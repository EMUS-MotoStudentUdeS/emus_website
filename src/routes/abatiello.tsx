import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "../i18n/language";

export const Route = createFileRoute("/abatiello")({
  component: AbatielloPage
});

function AbatielloPage() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="page-hero">
        <div className="tag">{t("abatiello.hero.tag")}</div>
        <h1>{t("abatiello.hero.title")}</h1>
        <p className="lead">
          {t("abatiello.hero.prefix")} <strong>EMUS15</strong>{" "}
          {t("abatiello.hero.middle")} <strong>5%</strong>{" "}
          {t("abatiello.hero.suffix")}
        </p>
      </section>

      <section className="section section-tight">
        <div className="card-grid">
          <article className="card card--surface card--padded card--info">
            <h3>{t("abatiello.cards.salvatore.title")}</h3>
            <p>{t("abatiello.cards.salvatore.body")}</p>
          </article>
          <article className="card card--surface card--padded card--info">
            <h3>{t("abatiello.cards.jack.title")}</h3>
            <p>{t("abatiello.cards.jack.body")}</p>
          </article>
          <article className="card card--surface card--padded card--info">
            <h3>{t("abatiello.cards.topla.title")}</h3>
            <p>{t("abatiello.cards.topla.body")}</p>
          </article>
        </div>
      </section>

      <section className="section section-tight">
        <div className="card card--surface card--padded card--info">
          <h3>{t("abatiello.howto.title")}</h3>
          <ol className="list-simple">
            <li>{t("abatiello.howto.step_1")}</li>
            <li>{t("abatiello.howto.step_2")}</li>
            <li>{t("abatiello.howto.step_3")}</li>
          </ol>
          <h3>{t("abatiello.conditions.title")}</h3>
          <ul className="list-simple">
            <li>{t("abatiello.conditions.item_1")}</li>
            <li>{t("abatiello.conditions.item_2")}</li>
            <li>{t("abatiello.conditions.item_3")}</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

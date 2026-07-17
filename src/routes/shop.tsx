import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "../i18n/language";

export const Route = createFileRoute("/shop")({
  component: ShopPage
});

function ShopPage() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="page-hero">
        <div className="tag">{t("shop.hero.tag")}</div>
        <h1>{t("shop.hero.title")}</h1>
        <p className="lead">{t("shop.hero.lead")}</p>
      </section>

      <section className="section section-tight">
        <div className="shop-embed">
          <iframe
            src="https://emus-shop.square.site"
            width="100%"
            height="100%"
            frameBorder="0"
            title="EMUS Shop"
            loading="lazy"
            scrolling="no"
          />
        </div>
      </section>
    </main>
  );
}

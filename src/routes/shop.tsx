import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "../i18n/language";

export const Route = createFileRoute("/shop")({
  component: ShopPage
});

function ShopPage() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText("EMUS15").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  return (
    <main>
      <section className="page-hero">
        <div className="tag">{t("shop.hero.tag")}</div>
        <h1>{t("shop.hero.title")}</h1>
        <p className="lead">{t("shop.hero.lead")}</p>
      </section>

      <section
        className="section section-highlight"
        style={{ textAlign: "center" }}
      >
        <p style={{ margin: 0 }}>{t("shop.promo.text")}</p>
        <p style={{ margin: "0.5rem 0" }}><strong></strong></p>
        <button className="button button-primary" onClick={handleCopy}>
          EMUS15
        </button>
      </section>

      <section className="section section-tight">
        <div className="shop-embed">
          <iframe
            src="https://emus-shop.square.site"
            width="100%"
            height="800"
            frameBorder="0"
            title="EMUS Shop"
          />
        </div>
      </section>

      <section className="section section-tight" style={{ textAlign: "center" }}>
        <p>{t("shop.help.text")}</p>
        <a
          href="https://emus-shop.square.site"
          target="_blank"
          rel="noopener noreferrer"
          className="button button-primary"
        >
          {t("shop.help.button")}
        </a>
      </section>
      {copied && <div className="toast">{t("shop.promo.copied")}</div>}
    </main>
  );
}

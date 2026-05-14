import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "../i18n/language";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage
});

function GalleryPage() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="page-hero">
        <div className="tag">{t("gallery.hero.tag")}</div>
        <h1>{t("gallery.hero.title")}</h1>
        <p className="lead">{t("gallery.hero.lead")}</p>
      </section>

      <section
        className="section section-tight"
        aria-labelledby="gallery-grid-title"
      >
        <div className="section-heading">
          <p className="section-kicker">{t("gallery.coming_soon.kicker")}</p>
          <h2 id="gallery-grid-title">{t("gallery.coming_soon.title")}</h2>
        </div>
      </section>
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { teamMembers } from "../data/team";
import { useLanguage } from "../i18n/language";

export const Route = createFileRoute("/team")({
  component: TeamPage
});

function TeamPage() {
  const { language, t } = useLanguage();

  const grouped = Object.entries(
    teamMembers.reduce<Record<string, typeof teamMembers>>((acc, member) => {
      acc[member.group] = acc[member.group] ?? [];
      acc[member.group].push(member);
      return acc;
    }, {})
  );

  return (
    <main>
      <section className="page-hero">
        <div className="hero__grid">
          <div className="hero__content">
            <div className="tag">{t("team.hero.tag")}</div>
            <h1>{t("team.hero.title")}</h1>
            <p className="lead">{t("team.hero.lead")}</p>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__glow" />
            <div className="placeholder-media">
              <img
                src="/assets/hero/Team2.webp"
                alt={t("team.hero.image_alt")}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="section section-tight"
        id="structure"
        aria-labelledby="team-structure-title"
      >
        <div className="section-heading">
          <p className="section-kicker">{t("team.structure.kicker")}</p>
          <h2 id="team-structure-title">{t("team.structure.title")}</h2>
        </div>

        {grouped.map(([groupName, members]) => (
          <div className="subteam-block" key={`${groupName}-${language}`}>
            <h3 className="subteam-title">
              {language === "fr"
                ? (members[0]?.group_fr ?? groupName)
                : groupName}
            </h3>
            <div className="card-grid wide profile-grid">
              {members.map((member) => (
                <article
                  className="card card--surface card--compact card--profile"
                  key={member.name}
                >
                  <div className="profile-media">
                    <img src={member.image} alt={`${member.name} headshot`} />
                  </div>
                  <div className="profile-body">
                    <div
                      className="badge-list"
                      aria-label={t("team.structure.roles_aria")}
                    >
                      {(language === "fr" ? member.role_fr : member.role).map(
                        (role) => (
                          <span
                            className="badge-label"
                            key={`${member.name}-${role}`}
                          >
                            {role}
                          </span>
                        )
                      )}
                    </div>
                    <h3>{member.name}</h3>
                    <p>
                      {language === "fr"
                        ? member.focus_fr || member.focus
                        : member.focus || member.focus_fr}
                    </p>
                    {member.contact ? (
                      <p className="profile-contact">
                        <a href={`mailto:${member.contact}`}>
                          {member.contact}
                        </a>
                      </p>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

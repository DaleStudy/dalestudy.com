import { Icon } from "daleui";
import { LinkButton } from "../components/LinkButton";
import { getMessages } from "../i18n";
import type { Locale } from "../i18n/types";
import { DISCORD_URL } from "../links";

export function AboutPage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);

  return (
    <>
      <section className="prose-section" style={{ padding: "80px 20px 56px" }}>
        <h1 className="page-title">{t.about.title}</h1>
        <p className="page-intro" style={{ fontSize: 18 }}>
          {t.about.intro}
        </p>
      </section>

      <section className="prose-section" style={{ paddingBottom: 56 }}>
        <h2 className="prose-label">{t.about.missionLabel}</h2>
        <p className="prose-body">{t.about.missionBody}</p>
      </section>

      <section className="band-neutral">
        <div className="prose-section" style={{ padding: "56px 20px" }}>
          <h2 className="prose-label">{t.about.visionLabel}</h2>
          <p className="prose-body">{t.about.visionBody}</p>
        </div>
      </section>

      <section className="container" style={{ padding: "64px 20px" }}>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: 32 }}>
          {t.about.valuesTitle}
        </h2>
        <div className="card-grid" style={{ maxWidth: 960, margin: "0 auto" }}>
          {t.about.values.map((v) => (
            <div key={v.title} className="value-card">
              <Icon name={v.icon} tone="brand" size="lg" />
              <strong>{v.title}</strong>
              <span>{v.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="prose-section" style={{ padding: "16px 20px 64px" }}>
        <h2 className="section-title" style={{ fontSize: 24, marginBottom: 24 }}>
          {t.about.teamTitle}
        </h2>
        <div>
          {t.about.roles.map((r) => (
            <div key={r.title} className="role-row">
              <span className="icon-tile" style={{ width: 40, height: 40 }}>
                <Icon name={r.icon} tone="brand" size="sm" />
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <strong>{r.title}</strong>
                <span className="role-desc">{r.desc}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="team-cta">
          <p>{t.about.teamCtaText}</p>
          <LinkButton href={DISCORD_URL} size="md">
            {t.about.teamCtaBtn}
          </LinkButton>
        </div>
      </section>
    </>
  );
}

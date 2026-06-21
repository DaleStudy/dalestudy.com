import { Icon } from "daleui";
import { LinkButton } from "../components/LinkButton";
import { getMessages } from "../i18n";
import type { Locale } from "../i18n/types";
import { DISCORD_URL } from "../links";

export function CommunityPage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);

  return (
    <>
      <section className="container" style={{ padding: "80px 20px 40px" }}>
        <h1 className="page-title">{t.community.title}</h1>
        <p className="page-intro">{t.community.sub}</p>
      </section>

      {t.community.sections.map((section, index) => (
        <section key={section.title} className={index % 2 === 1 ? "band-neutral" : undefined}>
          <div className="container community-section-inner">
            <div>
              <div className="community-section-head">
                <span className="icon-tile" style={{ width: 44, height: 44 }}>
                  <Icon name={section.icon} tone="brand" size="md" />
                </span>
                <h2>{section.title}</h2>
              </div>
              {section.tagline && <p className="community-tagline">{section.tagline}</p>}
              <p className="community-desc">{section.desc}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {section.points.map((point) => (
                <div key={point} className="point-row">
                  <Icon name="check" tone="success" size="sm" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section
        className="detail-container"
        style={{ padding: "64px 20px 80px", textAlign: "center" }}
      >
        <h2 className="section-title" style={{ fontSize: "clamp(22px, 3.5vw, 30px)" }}>
          {t.community.ctaTitle}
        </h2>
        <p className="section-sub" style={{ margin: "0 auto 24px" }}>
          {t.community.ctaSub}
        </p>
        <LinkButton href={DISCORD_URL} size="lg">
          {t.cta.joinDiscord}
        </LinkButton>
      </section>
    </>
  );
}

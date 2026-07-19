import { SiteIcon } from "../components/SiteIcon";
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

      <section className="container" style={{ padding: "0 20px 64px" }}>
        <div className="mission-vision-grid">
          <div>
            <h2 className="prose-label">{t.about.missionLabel}</h2>
            <p className="prose-main">{t.about.missionMain}</p>
            {t.about.missionSubs.map((paragraph) => (
              <p key={paragraph} className="prose-sub">
                {paragraph}
              </p>
            ))}
          </div>
          <div>
            <h2 className="prose-label">{t.about.visionLabel}</h2>
            <p className="prose-main">{t.about.visionMain}</p>
            {t.about.visionSubs.map((paragraph) => (
              <p key={paragraph} className="prose-sub">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="band-neutral">
        <div
          className="container community-story"
          style={{ padding: "56px 20px", alignItems: "start" }}
        >
          <div>
            <p className="story-eyebrow">{t.about.story.eyebrow}</p>
            <h2 className="story-title">{t.about.story.title}</h2>
            <p className="story-body">{t.about.story.p1}</p>
            <p className="story-body">{t.about.story.p2}</p>
            <div className="story-quotes">
              {t.about.story.quotes.map((quote) => (
                <div key={quote} className="story-quote">
                  {quote}
                </div>
              ))}
            </div>
            <p className="story-body" style={{ marginTop: 20 }}>
              {t.about.story.p3}
            </p>
          </div>
          <figure className="story-figure">
            <img src={t.about.photoSrc} alt={t.about.photoAlt} loading="lazy" />
            <figcaption>{t.about.photoCaption}</figcaption>
          </figure>
        </div>
      </section>

      <section className="container" style={{ padding: "64px 20px" }}>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: 32 }}>
          {t.about.valuesTitle}
        </h2>
        <div className="card-grid" style={{ maxWidth: 960, margin: "0 auto" }}>
          {t.about.values.map((v) => (
            <div key={v.title} className="value-card">
              <SiteIcon name={v.icon} tone="brand" size="lg" />
              <strong>{v.title}</strong>
              <span>{v.summary}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="prose-section" style={{ padding: "16px 20px 64px" }}>
        <h2 className="section-title" style={{ fontSize: 24, marginBottom: 12 }}>
          {t.about.teamTitle}
        </h2>
        <p className="team-intro">{t.about.teamIntro}</p>
        <div className="member-grid">
          {t.about.members.map((m) => (
            <a
              key={m.login}
              className="member-card"
              href={`https://github.com/${m.login}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="member-avatar"
                src={`https://github.com/${m.login}.png?size=112`}
                alt=""
                width={56}
                height={56}
                loading="lazy"
              />
              <strong>{m.name}</strong>
              <span className="member-role">{m.role}</span>
              <span className="member-handle">@{m.login}</span>
            </a>
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

import { Icon } from "daleui";
import { ANCHORS } from "../anchors";
import { LinkButton } from "../components/LinkButton";
import { SectionHeading } from "../components/SectionHeading";
import { getMessages } from "../i18n";
import type { Locale } from "../i18n/types";
import { DISCORD_URL } from "../links";

const anchors = ANCHORS.about;

export function AboutPage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);

  return (
    <>
      <section className="prose-section" style={{ paddingBlock: "80px 56px" }}>
        <h1 className="page-title">{t.about.title}</h1>
        <p className="page-intro" style={{ fontSize: 18 }}>
          {t.about.intro}
        </p>
      </section>

      <section className="container" style={{ paddingBlock: "0 64px" }}>
        <div className="mission-vision-grid">
          <section id={anchors.mission}>
            <SectionHeading
              anchor={anchors.mission}
              title={t.about.missionLabel}
              className="section-title section-title-brand"
            />
            <p className="prose-main">{t.about.missionMain}</p>
            {t.about.missionSubs.map((paragraph) => (
              <p key={paragraph} className="prose-sub">
                {paragraph}
              </p>
            ))}
          </section>
          <section id={anchors.vision}>
            <SectionHeading
              anchor={anchors.vision}
              title={t.about.visionLabel}
              className="section-title section-title-brand"
            />
            <p className="prose-main">{t.about.visionMain}</p>
            {t.about.visionSubs.map((paragraph) => (
              <p key={paragraph} className="prose-sub">
                {paragraph}
              </p>
            ))}
          </section>
        </div>
      </section>

      <section className="band-neutral" id={anchors.story}>
        <div
          className="container community-story"
          style={{ paddingBlock: 56, alignItems: "start" }}
        >
          <div>
            <p className="story-eyebrow">{t.about.story.eyebrow}</p>
            <SectionHeading
              anchor={anchors.story}
              title={t.about.story.title}
              className="section-title"
            />
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

      <section className="container" id={anchors.values} style={{ paddingBlock: 64 }}>
        <SectionHeading
          anchor={anchors.values}
          title={t.about.valuesTitle}
          className="section-title"
          style={{ textAlign: "center", marginBottom: 32 }}
        />
        <div className="card-grid" style={{ maxWidth: 960, margin: "0 auto" }}>
          {t.about.values.map((v) => (
            <div key={v.title} className="value-card">
              <Icon name={v.icon} tone="brand" size="lg" />
              <strong>{v.title}</strong>
              <span>{v.summary}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container" id={anchors.team} style={{ paddingBlock: "16px 64px" }}>
        <SectionHeading
          anchor={anchors.team}
          title={t.about.teamTitle}
          className="section-title"
          style={{ marginBottom: 12 }}
        />
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

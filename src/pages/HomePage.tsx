import { Icon, Tag } from "daleui";
import { SiteIcon } from "../components/SiteIcon";
import { AppLink } from "../components/AppLink";
import { LinkButton } from "../components/LinkButton";
import { getMessages, localePath } from "../i18n";
import type { Locale } from "../i18n/types";
import { DISCORD_URL } from "../links";

export function HomePage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);

  return (
    <>
      <section className="hero-section">
        <div className="hero-wash" aria-hidden="true" />
        <div className="container hero">
          <div className="hero-tag">
            <Tag tone="brand">{t.home.heroTag}</Tag>
          </div>
          <h1>
            {t.home.heroTitle1}
            <br />
            <span className="hero-accent">{t.home.heroTitle2}</span>
          </h1>
          <p className="hero-sub">{t.home.heroSub}</p>
          <div className="hero-actions">
            <LinkButton href={DISCORD_URL} size="lg">
              {t.cta.joinDiscord}
            </LinkButton>
            <LinkButton href={localePath(locale, "/programs")} look="outline-neutral" size="lg">
              {t.cta.browsePrograms}
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="band-brand">
        <div className="mission-band-inner">
          <p>{t.home.missionSummary}</p>
          <div className="more-link-wrap" style={{ marginTop: 20 }}>
            <AppLink className="more-link" to={localePath(locale, "/about")}>
              {t.home.moreAbout} →
            </AppLink>
          </div>
        </div>
      </section>

      <section className="container section">
        <h2 className="section-title">{t.home.programsTitle}</h2>
        <p className="section-sub">{t.home.programsSub}</p>
        <div className="card-grid">
          {t.programs.cards.map((p) => (
            <AppLink
              key={p.slug}
              className="card-link"
              to={localePath(locale, `/programs/${p.slug}`)}
            >
              <div className="program-card">
                <span className="icon-tile" style={{ width: 44, height: 44 }}>
                  <SiteIcon name={p.icon} tone="brand" size="md" />
                </span>
                <strong>{p.title}</strong>
                <span className="card-desc">{p.desc}</span>
                <span className="card-more">{t.cta.learnMore} →</span>
              </div>
            </AppLink>
          ))}
        </div>
      </section>

      <section className="band-neutral">
        <div className="container section">
          <h2 className="section-title">{t.home.communityTitle}</h2>
          <p className="section-sub">{t.home.communitySub}</p>
          <div
            className="card-grid"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
          >
            {t.home.activities.map((a) => (
              <div key={a.title} className="activity-card">
                <div className="activity-card-head">
                  <SiteIcon name={a.icon} tone="brand" size="sm" />
                  <strong>{a.title}</strong>
                </div>
                <span>{a.desc}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24, textAlign: "center" }}>
            <AppLink className="more-link" to={localePath(locale, "/community")}>
              {t.home.moreCommunity} →
            </AppLink>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="stats-grid">
          {t.home.stats.map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="band-neutral">
        <div className="container section">
          <h2 className="section-title" style={{ fontSize: "clamp(24px, 3.5vw, 32px)" }}>
            {t.home.showcaseTitle}
          </h2>
          <p className="section-sub">{t.home.showcaseSub}</p>
          <div className="showcase-grid">
            {t.home.showcase.map((work) => (
              <a
                key={work.url}
                className="card-link showcase-card"
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="showcase-card-head">
                  <strong>{work.title}</strong>
                  <Icon name="externalLink" size="xs" tone="brand" />
                </div>
                <span className="showcase-desc">{work.desc}</span>
                <span className="showcase-host">{work.host}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="prose-section" style={{ padding: "72px 20px 8px" }}>
        <h2 className="section-title" style={{ fontSize: "clamp(24px, 3.5vw, 32px)" }}>
          {t.home.faqTitle}
        </h2>
        <div className="faq-list">
          {t.home.faqs.map((faq) => (
            <details key={faq.q}>
              <summary>
                <span>{faq.q}</span>
                <span className="faq-chevron">
                  <Icon name="chevronDown" size="sm" tone="brand" />
                </span>
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="container" style={{ padding: "64px 20px 72px" }}>
        <div className="sponsor-banner">
          <div style={{ maxWidth: 520 }}>
            <strong>{t.home.sponsorBannerTitle}</strong>
            <span className="banner-sub">{t.home.sponsorBannerSub}</span>
          </div>
          <LinkButton href={localePath(locale, "/sponsor")} look="on-brand" size="md">
            {t.home.sponsorBannerCta}
          </LinkButton>
        </div>
      </section>
    </>
  );
}

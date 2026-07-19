import { Icon, Tag } from "daleui";
import { SiteIcon } from "../components/SiteIcon";
import { AppLink } from "../components/AppLink";
import { LinkButton } from "../components/LinkButton";
import { getMessages, localePath } from "../i18n";
import type { Locale } from "../i18n/types";
import { DISCORD_URL } from "../links";

export function ProgramsPage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);

  return (
    <>
      <section className="container" style={{ padding: "80px 20px 48px" }}>
        <h1 className="page-title">{t.programs.hubTitle}</h1>
        <p className="page-intro">{t.programs.hubSub}</p>
      </section>

      <section className="container" style={{ paddingBottom: 56 }}>
        <div className="card-grid card-grid-wide">
          {t.programs.cards.map((p) => (
            <AppLink
              key={p.slug}
              className="card-link"
              to={localePath(locale, `/programs/${p.slug}`)}
            >
              <div className="program-card-thumbed">
                <img className="program-card-thumb" src={p.thumb} alt="" loading="lazy" />
                <div className="program-card program-card-lg">
                  <div className="program-card-head">
                    <span className="icon-tile" style={{ width: 52, height: 52 }}>
                      <SiteIcon name={p.icon} tone="brand" size="md" />
                    </span>
                    <Tag tone={p.tagTone}>{p.tag}</Tag>
                  </div>
                  <strong>{p.title}</strong>
                  <span className="card-desc">{p.fullDesc}</span>
                  <span className="card-more">{t.cta.learnMore} →</span>
                </div>
              </div>
            </AppLink>
          ))}
        </div>
      </section>

      <section className="container" style={{ padding: "8px 20px 64px" }}>
        <div className="common-steps-box">
          <h2>{t.programs.commonTitle}</h2>
          <p>{t.programs.commonSub}</p>
          <div className="common-steps-grid">
            {t.programs.commonSteps.map((step, index) => (
              <div key={step.title} className="common-step">
                <span className="step-num" style={{ width: 32, height: 32 }}>
                  {index + 1}
                </span>
                <strong>{step.title}</strong>
                <span>{step.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container" id="reviews" style={{ padding: "64px 20px 8px" }}>
        <h2 className="section-title" style={{ fontSize: 28 }}>
          {t.programs.reviewsTitle}
        </h2>
        <p className="section-sub" style={{ marginBottom: 0 }}>
          {t.programs.reviewsSub}
        </p>
      </section>

      <section className="container" style={{ padding: "24px 20px 56px" }}>
        <div className="review-grid">
          {t.programs.reviews.map((review) => (
            <figure key={review.quote} className="testimonial-card">
              <div style={{ display: "flex" }}>
                <Tag tone="brand">{review.program}</Tag>
              </div>
              <blockquote>“{review.quote}”</blockquote>
              <figcaption>
                {review.login ? (
                  <>
                    <img
                      src={`https://github.com/${review.login}.png?size=72`}
                      alt=""
                      width={36}
                      height={36}
                      loading="lazy"
                    />
                    <a
                      href={`https://github.com/${review.login}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {review.author}
                    </a>
                  </>
                ) : (
                  <span className="review-anon">{review.author}</span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="detail-container" style={{ paddingBottom: 72 }}>
        <div className="join-cta">
          <h2>{t.programs.reviewsCtaTitle}</h2>
          <p>{t.programs.reviewsCtaSub}</p>
          <LinkButton href={DISCORD_URL} size="lg">
            {t.programs.reviewsCtaBtn}
          </LinkButton>
        </div>
      </section>

      <section className="band-neutral">
        <div className="container" style={{ padding: "56px 20px 72px" }}>
          <h2 className="section-title" style={{ fontSize: 22, marginBottom: 20 }}>
            {t.programs.otherTitle}
          </h2>
          <div
            className="card-grid"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}
          >
            {t.programs.other.map((p) => (
              <a
                key={p.title}
                className="card-link"
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="mini-card">
                  <div className="mini-card-head">
                    <strong>{p.title}</strong>
                    <Icon name="externalLink" size="xs" tone="neutral" />
                  </div>
                  <span>{p.desc}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

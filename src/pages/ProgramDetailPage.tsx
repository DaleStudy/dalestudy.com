import { Icon, Tag } from "daleui";
import { Fragment } from "react";
import { ANCHORS } from "../anchors";
import { AppLink } from "../components/AppLink";
import { LinkButton } from "../components/LinkButton";
import { SectionHeading } from "../components/SectionHeading";
import { getMessages, localePath } from "../i18n";
import type { Locale, ProgramSlug } from "../i18n/types";

const anchors = ANCHORS.programDetail;

export function ProgramDetailPage({ locale, slug }: { locale: Locale; slug: ProgramSlug }) {
  const t = getMessages(locale);
  const detail = t.programDetail.details[slug];

  return (
    <>
      <section className="detail-container" style={{ paddingTop: 56 }}>
        <AppLink
          className="more-link"
          style={{ fontSize: 14 }}
          to={localePath(locale, "/programs")}
        >
          ← {t.programDetail.backToHub}
        </AppLink>
      </section>

      <section className="detail-container" style={{ paddingBlock: "28px 48px" }}>
        <div className="detail-head">
          <span
            className="icon-tile"
            style={{ width: 64, height: 64, borderRadius: "var(--radii-xl)" }}
          >
            <Icon name={detail.icon} tone="brand" size="lg" />
          </span>
          <div>
            <h1>{detail.title}</h1>
            <span className="detail-subtitle">
              {detail.subtitleLinks.map((link, index) => (
                <Fragment key={link.url}>
                  {index > 0 && <span className="detail-subtitle-sep"> · </span>}
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </Fragment>
              ))}
            </span>
          </div>
        </div>
        <p className="detail-overview">{detail.overview}</p>
        <div className="detail-tags">
          {detail.tags.map((tag) => (
            <Tag key={tag} tone="neutral">
              {tag}
            </Tag>
          ))}
        </div>
      </section>

      {detail.captures.length > 0 && (
        <section className="container capture-grid" style={{ paddingBottom: 48 }}>
          {detail.captures.map((capture) => (
            <figure key={capture.src}>
              <img src={capture.src} alt={capture.alt} loading="lazy" />
              <figcaption>{capture.cap}</figcaption>
            </figure>
          ))}
        </section>
      )}

      <section className="band-neutral" id={anchors.howItWorks}>
        <div className="detail-container" style={{ paddingBlock: 48 }}>
          <SectionHeading
            anchor={anchors.howItWorks}
            title={t.programDetail.howItWorks}
            className="section-title"
            style={{ fontSize: 22, marginBottom: 20 }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {detail.steps.map((step, index) => (
              <div key={step.title} className="step-row">
                <span className="step-num">{index + 1}</span>
                <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <strong>{step.title}</strong>
                  <span className="step-desc">{step.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {detail.testimonials.length > 0 && (
        <section
          className="container"
          id={anchors.testimonials}
          style={{ paddingBlock: "48px 24px" }}
        >
          <SectionHeading
            anchor={anchors.testimonials}
            title={t.programDetail.testimonialsTitle}
            className="section-title"
            style={{ fontSize: 22, textAlign: "center", marginBottom: 20 }}
          />
          <div className="testimonial-grid">
            {detail.testimonials.map((tm) => (
              <figure key={tm.login} className="testimonial-card">
                <blockquote>“{tm.quote}”</blockquote>
                <figcaption>
                  <img
                    src={`https://github.com/${tm.login}.png?size=72`}
                    alt=""
                    width={36}
                    height={36}
                    loading="lazy"
                  />
                  <a
                    href={`https://github.com/${tm.login}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tm.author}
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="testimonial-more">
            <AppLink to={`${localePath(locale, "/programs")}#${ANCHORS.programs.reviews}`}>
              {t.programDetail.testimonialsMore} →
            </AppLink>
          </p>
        </section>
      )}

      <section className="detail-container" id={anchors.join} style={{ paddingBlock: "48px 72px" }}>
        <div className="join-cta">
          <SectionHeading anchor={anchors.join} title={t.programDetail.join} />
          <p>{detail.joinDesc}</p>
          <div className="cta-row">
            <LinkButton href={detail.ctaUrl} size="lg">
              {detail.ctaLabel}
            </LinkButton>
            <LinkButton href={detail.cta2Url} look="outline-neutral" size="lg">
              {detail.cta2Label}
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}

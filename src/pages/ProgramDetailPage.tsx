import { Tag } from "daleui";
import { SiteIcon } from "../components/SiteIcon";
import { Fragment } from "react";
import { AppLink } from "../components/AppLink";
import { LinkButton } from "../components/LinkButton";
import { getMessages, localePath } from "../i18n";
import type { Locale, ProgramSlug } from "../i18n/types";

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

      <section className="detail-container" style={{ padding: "28px 20px 48px" }}>
        <div className="detail-head">
          <span
            className="icon-tile"
            style={{ width: 64, height: 64, borderRadius: "var(--radii-xl)" }}
          >
            <SiteIcon name={detail.icon} tone="brand" size="lg" />
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

      <section className="band-neutral">
        <div className="detail-container" style={{ padding: "48px 20px" }}>
          <h2 className="section-title" style={{ fontSize: 22, marginBottom: 20 }}>
            {t.programDetail.howItWorks}
          </h2>
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

      <section className="detail-container" style={{ padding: "48px 20px 72px" }}>
        <div className="join-cta">
          <h2>{t.programDetail.join}</h2>
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

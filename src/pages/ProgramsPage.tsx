import { Icon, Tag } from "daleui";
import { SiteIcon } from "../components/SiteIcon";
import { AppLink } from "../components/AppLink";
import { getMessages, localePath } from "../i18n";
import type { Locale } from "../i18n/types";

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

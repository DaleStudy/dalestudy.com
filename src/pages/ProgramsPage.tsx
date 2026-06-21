import { Icon, Tag } from "daleui";
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
                    <Icon name={p.icon} tone="brand" size="md" />
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

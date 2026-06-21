import { Icon } from "daleui";
import { LinkButton } from "../components/LinkButton";
import { getMessages } from "../i18n";
import type { Locale } from "../i18n/types";
import { OPENCOLLECTIVE_URL, SPONSORS_SVG_URL, SPONSORS_URL } from "../links";

export function SponsorPage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);

  return (
    <>
      <section className="prose-section" style={{ padding: "80px 20px 40px" }}>
        <h1 className="page-title">{t.sponsor.title}</h1>
        <p className="page-intro" style={{ fontSize: 18 }}>
          {t.sponsor.intro}
        </p>
      </section>

      <section className="container" style={{ padding: "0 20px 56px" }}>
        <h2
          className="section-title"
          style={{ fontSize: 22, textAlign: "center", marginBottom: 24 }}
        >
          {t.sponsor.listTitle}
        </h2>
        <a href={SPONSORS_URL} target="_blank" rel="noopener noreferrer">
          <img
            className="sponsors-embed"
            src={SPONSORS_SVG_URL}
            alt={locale === "ko" ? "달레 스터디 후원자 목록" : "DaleStudy sponsors"}
          />
        </a>
        <p className="sponsor-note">{t.sponsor.listNote}</p>
      </section>

      <section className="container" style={{ paddingBottom: 56 }}>
        <div className="card-grid" style={{ maxWidth: 960 }}>
          {t.sponsor.uses.map((use) => (
            <div
              key={use.title}
              className="info-box"
              style={{ display: "flex", flexDirection: "column", gap: 10 }}
            >
              <Icon name={use.icon} tone="brand" size="md" />
              <strong style={{ margin: 0 }}>{use.title}</strong>
              <p>{use.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="band-brand">
        <div className="sponsor-cta-band-inner">
          <h2>{t.sponsor.ctaTitle}</h2>
          <p>{t.sponsor.ctaSub}</p>
          <div className="cta-row">
            <LinkButton href={SPONSORS_URL} size="lg">
              {t.sponsor.ctaBtn}
            </LinkButton>
            <LinkButton href={OPENCOLLECTIVE_URL} look="outline-neutral" size="lg">
              {t.sponsor.ctaBtn2}
            </LinkButton>
          </div>
        </div>
      </section>

      <section
        className="prose-section"
        style={{ padding: "56px 20px 80px", display: "flex", flexDirection: "column", gap: 16 }}
      >
        <div className="info-box">
          <strong>{t.sponsor.transparencyTitle}</strong>
          <p>{t.sponsor.transparencyDesc}</p>
        </div>
        <div className="info-box">
          <strong>{t.sponsor.corpTitle}</strong>
          <p>{t.sponsor.corpDesc}</p>
        </div>
        <div className="info-box">
          <strong>{t.sponsor.nonMoneyTitle}</strong>
          <p>{t.sponsor.nonMoneyDesc}</p>
        </div>
      </section>
    </>
  );
}

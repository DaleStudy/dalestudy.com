import { LinkButton } from "../components/LinkButton";
import { SiteIcon } from "../components/SiteIcon";
import { getMessages } from "../i18n";
import type { CommunitySection, Locale } from "../i18n/types";
import { DISCORD_URL } from "../links";

function SectionHead({ section }: { section: CommunitySection }) {
  return (
    <div className="community-section-head">
      <span className="icon-tile" style={{ width: 44, height: 44 }}>
        <SiteIcon name={section.icon} tone="brand" size="md" />
      </span>
      <h2>{section.title}</h2>
    </div>
  );
}

function SectionGallery({ section }: { section: CommunitySection }) {
  if (section.images.length === 0) {
    return null;
  }
  return (
    <div className="community-gallery">
      {section.images.map((image) => (
        <figure key={image.src}>
          <img src={image.src} alt={image.cap} loading="lazy" />
          <figcaption>{image.cap}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function CommunityPage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const [meetup] = t.community.sections.slice(2);
  const inlineSections = t.community.sections.slice(0, 2);

  return (
    <>
      <section className="container" style={{ padding: "80px 20px 40px" }}>
        <h1 className="page-title">{t.community.title}</h1>
        <p className="page-intro">{t.community.sub}</p>
      </section>

      <section className="band-neutral">
        <div className="container community-story" style={{ padding: "24px 20px 64px" }}>
          {inlineSections.map((section) => (
            <div key={section.title} className="community-inline">
              <SectionHead section={section} />
              <p className="community-desc">{section.desc}</p>
              <SectionGallery section={section} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="container community-section-inner">
          <div>
            <SectionHead section={meetup} />
            <p className="community-desc">{meetup.desc}</p>
          </div>
          <p className="community-detail" style={{ alignSelf: "center", margin: 0 }}>
            {meetup.detail}
          </p>
        </div>
        <div className="container" style={{ paddingBottom: 56 }}>
          <SectionGallery section={meetup} />
        </div>
      </section>

      <section className="container" style={{ padding: "16px 20px 24px" }}>
        <h2 className="section-title" style={{ fontSize: 24, marginBottom: 8 }}>
          {t.community.normsTitle}
        </h2>
        <p className="community-desc" style={{ marginBottom: 24 }}>
          {t.community.normsIntro}
        </p>
        <div className="norm-grid">
          {t.community.norms.map((norm, index) => (
            <div key={norm.title} className="norm-card">
              <span className="norm-num">{String(index + 1).padStart(2, "0")}</span>
              <strong>{norm.title}</strong>
              <span>{norm.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="detail-container" style={{ padding: "40px 20px 80px" }}>
        <div className="join-cta">
          <h2>{t.community.ctaTitle}</h2>
          <p>{t.community.ctaSub}</p>
          <LinkButton href={DISCORD_URL} size="lg">
            {t.cta.joinDiscord}
          </LinkButton>
        </div>
      </section>
    </>
  );
}

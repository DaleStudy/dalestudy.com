import { Icon } from "daleui";
import { ANCHORS } from "../anchors";
import { LinkButton } from "../components/LinkButton";
import { SectionHeading } from "../components/SectionHeading";
import { getMessages } from "../i18n";
import type { CommunitySection, Locale } from "../i18n/types";
import { DISCORD_URL } from "../links";

function SectionHead({ anchor, section }: { anchor: string; section: CommunitySection }) {
  return (
    <div className="community-section-head">
      <span className="icon-tile" style={{ width: 44, height: 44 }}>
        <Icon name={section.icon} tone="brand" size="md" />
      </span>
      <SectionHeading anchor={anchor} title={section.title} />
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

const anchors = ANCHORS.community;

export function CommunityPage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const [coffeeChat, coWorking, meetup] = t.community.sections;

  return (
    <>
      <section className="container" style={{ paddingBlock: "80px 40px" }}>
        <h1 className="page-title">{t.community.title}</h1>
        <p className="page-intro">{t.community.sub}</p>
      </section>

      <section className="band-neutral">
        <div className="container community-story" style={{ paddingBlock: "24px 64px" }}>
          <section className="community-inline" id={anchors.coffeeChat}>
            <SectionHead anchor={anchors.coffeeChat} section={coffeeChat} />
            <p className="community-desc">{coffeeChat.desc}</p>
            <SectionGallery section={coffeeChat} />
          </section>
          <section className="community-inline" id={anchors.coWorking}>
            <SectionHead anchor={anchors.coWorking} section={coWorking} />
            <p className="community-desc">{coWorking.desc}</p>
            <SectionGallery section={coWorking} />
          </section>
        </div>
      </section>

      <section id={anchors.meetups}>
        <div className="container community-section-inner">
          <div>
            <SectionHead anchor={anchors.meetups} section={meetup} />
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

      <section className="container" id={anchors.norms} style={{ paddingBlock: "16px 24px" }}>
        <SectionHeading
          anchor={anchors.norms}
          title={t.community.normsTitle}
          className="section-title"
          style={{ fontSize: 24, marginBottom: 8 }}
        />
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

      <section className="detail-container" style={{ paddingBlock: "40px 80px" }}>
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

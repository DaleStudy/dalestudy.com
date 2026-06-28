import { getMessages } from "../i18n";
import type { Locale } from "../i18n/types";
import {
  CHAT_SITE_URL,
  DALEUI_SITE_URL,
  DISCORD_URL,
  GITHUB_URL,
  LEADERBOARD_URL,
  LEETCODE_SITE_URL,
  LINKEDIN_URL,
  OPENCOLLECTIVE_URL,
  SCHEDULE_SITE_URL,
  SPONSORS_URL,
} from "../links";

export function Footer({ locale }: { locale: Locale }) {
  const t = getMessages(locale);

  return (
    <footer className="site-footer">
      <div className="container site-footer-grid">
        <div className="footer-col">
          <span className="footer-brand">{t.siteName}</span>
          <span className="footer-slogan">{t.footer.slogan}</span>
        </div>
        <div className="footer-col">
          <strong className="footer-heading">{t.footer.channels}</strong>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
            Discord
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
        <div className="footer-col">
          <strong className="footer-heading">{t.footer.studies}</strong>
          <a href={LEETCODE_SITE_URL} target="_blank" rel="noopener noreferrer">
            leetcode.dalestudy.com
          </a>
        </div>
        <div className="footer-col">
          <strong className="footer-heading">{t.footer.projects}</strong>
          <a href={DALEUI_SITE_URL} target="_blank" rel="noopener noreferrer">
            daleui.com
          </a>
          <a href={LEADERBOARD_URL} target="_blank" rel="noopener noreferrer">
            leaderboard.dalestudy.com
          </a>
          <a href={CHAT_SITE_URL} target="_blank" rel="noopener noreferrer">
            chat.dalestudy.com
          </a>
          <a href={SCHEDULE_SITE_URL} target="_blank" rel="noopener noreferrer">
            schedule.dalestudy.com
          </a>
        </div>
        <div className="footer-col">
          <strong className="footer-heading">{t.footer.support}</strong>
          <a href={SPONSORS_URL} target="_blank" rel="noopener noreferrer">
            GitHub Sponsors
          </a>
          <a href={OPENCOLLECTIVE_URL} target="_blank" rel="noopener noreferrer">
            OpenCollective
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        © 2024-{new Date().getFullYear()} DaleStudy. {t.footer.rights}
      </div>
    </footer>
  );
}

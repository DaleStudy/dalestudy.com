import { Icon } from "daleui";
import { getMessages } from "../i18n";
import type { Locale } from "../i18n/types";
import { SURVEY_URL } from "../links";

/** 모든 페이지 헤더 위에 두는 설문조사 홍보 띠. 설문이 마감(2026-12-06)되면 지운다. */
export function SurveyBanner({ locale }: { locale: Locale }) {
  const t = getMessages(locale).surveyBanner;

  return (
    <a className="survey-banner" href={SURVEY_URL} target="_blank" rel="noopener noreferrer">
      <Icon name="chartBar" size="sm" />
      <strong>{t.title}</strong>
      <span className="survey-banner-detail">{t.detail}</span>
      <span className="survey-banner-cta">{t.cta} →</span>
    </a>
  );
}

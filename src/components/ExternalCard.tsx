import { Icon } from "daleui";

type ExternalCardProps = {
  href: string;
  title: string;
  desc: string;
  /** 카드 하단에 덧붙는 보조 텍스트(예: 호스트 도메인). */
  meta?: string;
};

/**
 * 외부 사이트로 이동하는 링크 카드.
 * 홈의 오픈소스 쇼케이스와 프로그램 페이지의 기타 프로젝트가 함께 쓴다.
 */
export function ExternalCard({ href, title, desc, meta }: ExternalCardProps) {
  return (
    <a className="external-card" href={href} target="_blank" rel="noopener noreferrer">
      <div className="external-card-head">
        <strong>{title}</strong>
        <Icon name="externalLink" size="xs" tone="brand" />
      </div>
      <span className="external-card-desc">{desc}</span>
      {meta && <span className="external-card-meta">{meta}</span>}
    </a>
  );
}

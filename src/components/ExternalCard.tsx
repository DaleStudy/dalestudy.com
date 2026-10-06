import { Icon } from "daleui";

type ExternalCardProps = {
  href: string;
  title: string;
  desc: string;
  /** 카드 하단에 덧붙는 보조 텍스트(예: 호스트 도메인). */
  meta?: string;
  /** 카드 왼쪽에 놓이는 정사각형 썸네일(예: 팟캐스트 에피소드 커버). */
  image?: string;
};

/**
 * 외부 사이트로 이동하는 링크 카드.
 * 홈의 오픈 소스 쇼케이스, 프로그램 페이지의 기타 프로젝트, 프로그램 상세의 미디어가 함께 쓴다.
 */
export function ExternalCard({ href, title, desc, meta, image }: ExternalCardProps) {
  const body = (
    <>
      <div className="external-card-head">
        <strong>{title}</strong>
        <Icon name="externalLink" size="xs" tone="brand" />
      </div>
      <span className="external-card-desc">{desc}</span>
      {meta && <span className="external-card-meta">{meta}</span>}
    </>
  );

  return (
    <a
      className={image ? "external-card external-card-media" : "external-card"}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {image ? (
        <>
          <img className="external-card-thumb" src={image} alt="" loading="lazy" />
          <div className="external-card-body">{body}</div>
        </>
      ) : (
        body
      )}
    </a>
  );
}

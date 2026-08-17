import type { CSSProperties } from "react";
import type { Locale } from "../i18n/types";
import { useLocale } from "../i18n/useLocale";

const ANCHOR_LABEL: Record<Locale, (title: string) => string> = {
  ko: (title) => `${title} 섹션 링크`,
  en: (title) => `Link to ${title}`,
};

interface SectionHeadingProps {
  /** 감싸는 섹션의 id와 같은 값. 외부 링크가 의존하므로 한번 공개하면 바꾸지 않는다. */
  anchor: string;
  title: string;
  className?: string;
  style?: CSSProperties;
}

export function SectionHeading({ anchor, title, className, style }: SectionHeadingProps) {
  const locale = useLocale();

  return (
    <h2 className={className} style={style}>
      <span className="heading-text">
        {/* 제목이 여러 줄일 때 첫 줄 옆에 붙도록 앵커를 제목 앞에 둔다.
            TODO: daleui에 링크 아이콘이 추가되면 Icon으로 교체한다 */}
        <a className="heading-anchor" href={`#${anchor}`} aria-label={ANCHOR_LABEL[locale](title)}>
          #
        </a>
        {title}
      </span>
    </h2>
  );
}

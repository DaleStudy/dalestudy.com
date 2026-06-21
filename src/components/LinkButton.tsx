import type { ReactNode } from "react";
import { AppLink } from "./AppLink";

interface LinkButtonProps {
  /** 이동 대상. 외부 URL(http…)이면 새 탭으로 연다. */
  href: string;
  look?: "solid-brand" | "outline-neutral" | "on-brand";
  size?: "md" | "lg";
  children: ReactNode;
}

/**
 * 버튼 모양의 링크. 내비게이션 성격의 CTA는 크롤러가 따라갈 수 있도록
 * daleui Button(순수 <button>) 대신 daleui 토큰으로 버튼 룩을 재현한 <a>를 쓴다.
 */
export function LinkButton({ href, look = "solid-brand", size = "md", children }: LinkButtonProps) {
  const className = `btn btn-${size} btn-${look}`;

  if (/^https?:\/\//.test(href)) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <AppLink className={className} to={href}>
      {children}
    </AppLink>
  );
}

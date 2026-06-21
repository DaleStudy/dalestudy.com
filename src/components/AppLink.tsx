import { Link, type LinkProps } from "@tanstack/react-router";
import type { ComponentProps } from "react";

type AppLinkProps = Omit<ComponentProps<typeof Link>, "to"> & { to: string };

/**
 * 로케일에 따라 런타임에 계산된 경로 문자열로 이동하는 내부 링크.
 * TanStack Router의 정적 경로 타입 검사와 동적 문자열 경로 사이의 단일 경계 지점이다.
 */
export function AppLink({ to, ...rest }: AppLinkProps) {
  return <Link {...(rest as LinkProps)} to={to as LinkProps["to"]} />;
}

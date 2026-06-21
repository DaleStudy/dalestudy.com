/** 기존 사이트에서 계승한 `</>` 로고 마크 — teal→violet 그라데이션 스트로크. */
export function Logo({ width = 34, height = 15 }: { width?: number; height?: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 46 19"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <defs>
        <linearGradient
          id="dsLogoGrad"
          x1="-1"
          y1="9.5"
          x2="46"
          y2="9.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#24EACA" />
          <stop offset="1" stopColor="#846DE9" />
        </linearGradient>
      </defs>
      <path
        d="M12 2 4 9.5 12 17"
        stroke="url(#dsLogoGrad)"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M26.5 1 19.5 18" stroke="url(#dsLogoGrad)" strokeWidth="3.4" strokeLinecap="round" />
      <path
        d="M34 2 42 9.5 34 17"
        stroke="url(#dsLogoGrad)"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

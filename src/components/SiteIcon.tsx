import { Icon, type IconProps } from "daleui";
import { Brain, Palette, PenLine, Puzzle } from "lucide-react";
import type { SiteIconName } from "../i18n/types";

/** daleui 아이콘 세트에 없는 이름은 동일한 lucide 아이콘을 daleui Icon과 같은 규격으로 그린다 */
const extraIcons = {
  palette: Palette,
  brain: Brain,
  penLine: PenLine,
  puzzle: Puzzle,
} as const;

const sizeRem = { xs: "0.75rem", sm: "1rem", md: "1.25rem", lg: "1.5rem" } as const;

export function SiteIcon({
  name,
  size = "md",
  tone,
}: {
  name: SiteIconName;
  size?: NonNullable<IconProps["size"]>;
  tone?: IconProps["tone"];
}) {
  if (name in extraIcons) {
    const LucideIcon = extraIcons[name as keyof typeof extraIcons];
    return (
      <LucideIcon
        aria-hidden="true"
        style={{
          display: "inline-block",
          width: sizeRem[size],
          height: sizeRem[size],
          color: tone ? `var(--colors-fg-${tone})` : "currentcolor",
        }}
      />
    );
  }
  return <Icon name={name as IconProps["name"]} size={size} tone={tone} />;
}

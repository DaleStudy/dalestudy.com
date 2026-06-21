import { createFileRoute } from "@tanstack/react-router";
import { ko } from "../i18n/ko";
import { SponsorPage } from "../pages/SponsorPage";
import { pageHead } from "../seo";

export const Route = createFileRoute("/sponsor")({
  head: () => pageHead({ locale: "ko", path: "/sponsor", ...ko.seo.sponsor }),
  component: () => <SponsorPage locale="ko" />,
});

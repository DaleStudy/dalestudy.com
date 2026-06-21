import { createFileRoute } from "@tanstack/react-router";
import { ko } from "../i18n/ko";
import { CommunityPage } from "../pages/CommunityPage";
import { pageHead } from "../seo";

export const Route = createFileRoute("/community")({
  head: () => pageHead({ locale: "ko", path: "/community", ...ko.seo.community }),
  component: () => <CommunityPage locale="ko" />,
});

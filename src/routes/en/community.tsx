import { createFileRoute } from "@tanstack/react-router";
import { en } from "../../i18n/en";
import { CommunityPage } from "../../pages/CommunityPage";
import { pageHead } from "../../seo";

export const Route = createFileRoute("/en/community")({
  head: () => pageHead({ locale: "en", path: "/community", ...en.seo.community }),
  component: () => <CommunityPage locale="en" />,
});

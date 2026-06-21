import { createFileRoute } from "@tanstack/react-router";
import { en } from "../../i18n/en";
import { SponsorPage } from "../../pages/SponsorPage";
import { pageHead } from "../../seo";

export const Route = createFileRoute("/en/sponsor")({
  head: () => pageHead({ locale: "en", path: "/sponsor", ...en.seo.sponsor }),
  component: () => <SponsorPage locale="en" />,
});

import { createFileRoute } from "@tanstack/react-router";
import { en } from "../../i18n/en";
import { AboutPage } from "../../pages/AboutPage";
import { pageHead } from "../../seo";

export const Route = createFileRoute("/en/about")({
  head: () => pageHead({ locale: "en", path: "/about", ...en.seo.about }),
  component: () => <AboutPage locale="en" />,
});

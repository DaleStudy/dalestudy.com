import { createFileRoute } from "@tanstack/react-router";
import { ko } from "../i18n/ko";
import { AboutPage } from "../pages/AboutPage";
import { pageHead } from "../seo";

export const Route = createFileRoute("/about")({
  head: () => pageHead({ locale: "ko", path: "/about", ...ko.seo.about }),
  component: () => <AboutPage locale="ko" />,
});

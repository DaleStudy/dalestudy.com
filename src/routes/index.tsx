import { createFileRoute } from "@tanstack/react-router";
import { ko } from "../i18n/ko";
import { HomePage } from "../pages/HomePage";
import { pageHead } from "../seo";

export const Route = createFileRoute("/")({
  head: () => pageHead({ locale: "ko", path: "/", ...ko.seo.home }),
  component: () => <HomePage locale="ko" />,
});

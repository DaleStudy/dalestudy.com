import { createFileRoute } from "@tanstack/react-router";
import { en } from "../../i18n/en";
import { HomePage } from "../../pages/HomePage";
import { pageHead } from "../../seo";

export const Route = createFileRoute("/en/")({
  head: () => pageHead({ locale: "en", path: "/", ...en.seo.home }),
  component: () => <HomePage locale="en" />,
});

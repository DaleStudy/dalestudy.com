import { createFileRoute } from "@tanstack/react-router";
import { ko } from "../../i18n/ko";
import { ProgramsPage } from "../../pages/ProgramsPage";
import { pageHead } from "../../seo";

export const Route = createFileRoute("/programs/")({
  head: () => pageHead({ locale: "ko", path: "/programs", ...ko.seo.programs }),
  component: () => <ProgramsPage locale="ko" />,
});

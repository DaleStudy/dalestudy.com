import { createFileRoute } from "@tanstack/react-router";
import { en } from "../../../i18n/en";
import { ProgramsPage } from "../../../pages/ProgramsPage";
import { pageHead } from "../../../seo";

export const Route = createFileRoute("/en/programs/")({
  head: () => pageHead({ locale: "en", path: "/programs", ...en.seo.programs }),
  component: () => <ProgramsPage locale="en" />,
});

import { createFileRoute, notFound } from "@tanstack/react-router";
import { en } from "../../../i18n/en";
import { isProgramSlug } from "../../../i18n/types";
import { ProgramDetailPage } from "../../../pages/ProgramDetailPage";
import { pageHead } from "../../../seo";

export const Route = createFileRoute("/en/programs/$slug")({
  loader: ({ params }) => {
    if (!isProgramSlug(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    if (!isProgramSlug(params.slug)) return {};
    const detail = en.programDetail.details[params.slug];
    return pageHead({
      locale: "en",
      path: `/programs/${params.slug}`,
      title: `${detail.title} | DaleStudy`,
      description: detail.overview,
    });
  },
  component: ProgramDetailRoute,
});

function ProgramDetailRoute() {
  const { slug } = Route.useParams();
  if (!isProgramSlug(slug)) return null;
  return <ProgramDetailPage locale="en" slug={slug} />;
}

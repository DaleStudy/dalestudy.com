import { createFileRoute, notFound } from "@tanstack/react-router";
import { ko } from "../../i18n/ko";
import { isProgramSlug } from "../../i18n/types";
import { ProgramDetailPage } from "../../pages/ProgramDetailPage";
import { pageHead } from "../../seo";

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    if (!isProgramSlug(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    if (!isProgramSlug(params.slug)) return {};
    const detail = ko.programDetail.details[params.slug];
    return pageHead({
      locale: "ko",
      path: `/programs/${params.slug}`,
      title: `${detail.title} | 달레 스터디`,
      description: detail.overview,
    });
  },
  component: ProgramDetailRoute,
});

function ProgramDetailRoute() {
  const { slug } = Route.useParams();
  if (!isProgramSlug(slug)) return null;
  return <ProgramDetailPage locale="ko" slug={slug} />;
}

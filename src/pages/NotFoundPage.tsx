import { useLocation } from "@tanstack/react-router";
import { LinkButton } from "../components/LinkButton";
import { getMessages, localeFromPath, localePath } from "../i18n";

export function NotFoundPage() {
  const { pathname } = useLocation();
  const locale = localeFromPath(pathname);
  const t = getMessages(locale);

  return (
    <section className="not-found">
      <span className="not-found-code">404</span>
      <h1>{t.notFound.title}</h1>
      <p>{t.notFound.sub}</p>
      <div className="cta-row">
        <LinkButton href={localePath(locale, "/")} size="md">
          {t.notFound.goHome}
        </LinkButton>
        <LinkButton href={localePath(locale, "/programs")} look="outline-neutral" size="md">
          {t.cta.browsePrograms}
        </LinkButton>
      </div>
    </section>
  );
}

import { LinkButton } from "../components/LinkButton";
import { getMessages, localePath } from "../i18n";
import { useLocale } from "../i18n/useLocale";

export function NotFoundPage() {
  const locale = useLocale();
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

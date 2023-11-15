import { Trans } from "react-i18next/TransWithoutContext"
import { useTranslation } from "../i18n"
import { fallbackLng, languages } from "../i18n/settings"

export default async function Home({ params: { lng } }: { params: { lng: string } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)

  return (
    <div>
      <Trans t={t} i18nKey="home" />
    </div>
  )
}

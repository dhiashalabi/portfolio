import { useTranslation } from '../i18n'
import { fallbackLng, languages } from '../i18n/settings'
import Header from './components/Header'
import Skills from './components/Skills'
import ThemeButton from './components/ThemeButton'

export default async function Home({
  params: { lng },
}: {
  params: { lng: string }
}) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = await useTranslation(lng)

  return (
    <div>
      <Header />
      <ThemeButton />
      <Skills />
    </div>
  )
}

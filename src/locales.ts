import en from './locales/en.json'
import es from './locales/es.json'
import pt from './locales/pt.json'
import fr from './locales/fr.json'
import de from './locales/de.json'
import it from './locales/it.json'
import ja from './locales/ja.json'
import zh from './locales/zh.json'

type TranslationMap = Record<string, string>

const LOCALES: Record<string, TranslationMap> = {
  en, es, pt, fr, de, it, ja, zh,
}

const detectLanguage = (): string => {
  let lang = (navigator.language || 'en').split('-')[0]
  return lang in LOCALES ? lang : 'en'
}

const currentLang = detectLanguage()
const strings: TranslationMap = LOCALES[currentLang]

export const getLanguage = (): string => currentLang

export const t = (key: string, ...args: string[]): string => {
  let value = strings[key]
  if (value === undefined) {
    value = (LOCALES['en'] as TranslationMap)[key]
  }
  if (value === undefined) return key
  if (args.length > 0) {
    let i = 0
    value = value.replace(/%s/g, () => args[i++] ?? '')
  }
  return value
}

export const applyTranslations = (): void => {
  document.documentElement.lang = currentLang
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n')!
    if (el.tagName === 'TITLE') {
      document.title = t(key)
    } else {
      el.textContent = t(key)
    }
  })
}

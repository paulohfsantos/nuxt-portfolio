import { MdiIconString } from "nuxt-mdi/dist/runtime/components/MdiIcon";

export function customClassLanguage (language: string): string {
  if (!language) return 'text-base-content'

  return `${language.toLowerCase()}-lang`;
};

export function formatLanguageForMDI(language: string): MdiIconString {
  if (!language) { return 'mdiLanguageTypescript' }

  if (language === 'Vue') { return 'mdiVuejs' }

  if (language === 'SCSS') { return 'mdiSass' }

  return `mdiLanguage${language
    .charAt(0)
    .toUpperCase() + language
    .slice(1)
    .toLowerCase()
  }` as MdiIconString;
}
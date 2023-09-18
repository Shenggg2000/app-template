import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import dayjs from 'dayjs'
import localeEn from 'dayjs/locale/en'
import localeZh from 'dayjs/locale/zh'
import dayjsUTC from 'dayjs/plugin/utc'
import dayjsTimezone from 'dayjs/plugin/timezone'

import enCommon from './en/common.json'
import enOther from './en/other.json'
import zhCommon from './zh/common.json'
import zhOther from './zh/other.json'

dayjs.extend(dayjsUTC)
dayjs.extend(dayjsTimezone)
dayjs.locale(localeEn)

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  ns: ['common', 'other'],
  defaultNS: 'common',
  resources: {
    en: {
      common: enCommon,
      languages: enOther,
    },
    zh: {
      common: zhCommon,
      languages: zhOther,
    },
  },
})

i18next.services.formatter?.add('myDateFormatter', (value) => {
  return dayjs(value).format('MMMDD, YYYY, dddd HH:mm:ss')
})

i18next.on('languageChanged', (lng) => {
  switch (lng) {
    case 'en':
      dayjs.locale(localeEn)
      break
    case 'zh':
      dayjs.locale(localeZh)
      break
    default:
      dayjs.locale(localeEn)
      break
  }
})

export default i18next

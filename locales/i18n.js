import i18n from 'i18n-js'
import _ from 'lodash'
import en from './en'

i18n.translations = {
  en,
}
i18n.locale = 'en'
i18n.fallbacks = true

let Locale = {
    t: function (str, option) {
        if (_.isEmpty(option)) {
            return i18n.t(str)
        } else {
            return i18n.t(str, option)
        }
    },
}

// global variable
window.t = Locale.t

export default Locale

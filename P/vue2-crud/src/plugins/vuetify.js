import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import es from 'vuetify/lib/locale/es'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#fc9e40',
        secondary: '#409efc'
      },
      dark: {
        primary: '#fc9e40',
        secondary: '#409efc'
      }
    }
  },
  lang: {
    locales: { es },
    current: 'es'
  }
})

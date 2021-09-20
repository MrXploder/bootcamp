// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/**
 * Hay un problema con la interfaz VuetifyThemeItem que no admite
 * IndexSignature, por lo que deshabilitamos Typescript para este archivo
 */

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import es from 'vuetify/src/locale/es'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { es },
    current: 'es'
  },
  theme: {
    options: {
      variations: true,
      customProperties: true
    },
    themes: {
      light: {
        primary: '#8A00F3',
        secondary: '#04C7E9',
        'theme-bg': '#f4f7f8',
        'theme-bg2': '#eef2f5',
        'theme-layout': '#fff',
        'theme-color': '#2c3e50'
      },
      dark: {
        primary: '#8A00F3',
        secondary: '#04C7E9',
        'theme-bg': '#18191c',
        'theme-bg2': '#141417',
        'theme-layout': '#1e2023',
        'theme-color': '#fff'
      }
    }
  }
})

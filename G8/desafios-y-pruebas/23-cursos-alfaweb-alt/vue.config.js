module.exports = {
  transpileDependencies: ['vuetify'],

  pages: {
    index: {
      entry: 'src/app.ts'
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}

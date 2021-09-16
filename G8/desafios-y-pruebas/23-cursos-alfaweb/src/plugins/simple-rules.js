import Vue from 'vue'

const SimpleRules = {
  install(vue) {
    vue.prototype.$rules = {
      required(v) {
        return !!v || 'Este campo no puede estar vacío'
      },
      requiredCustom(message) {
        return function (v) {
          return !!v || message
        }
      },
      isEmail(v) {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(v).toLowerCase()) || 'El valor ingresado no es un email'
      },
      isSingleWord(v) {
        return (!!v && v.split(' ').length === 1) || 'Este campo debe contener solo una palabra'
      },
      isHttps(v) {
        return v.startsWith('https://') || 'La url debe contener un formato válido'
      },
      isDeeplink(v) {
        return (
          (v.includes('://') && !v.startsWith('://') && !v.endsWith('://')) ||
          'El deeplink debe contener un formato válido'
        )
      },
      minLength(length) {
        return function (v) {
          return (!!v && v.length >= length) || 'El campo no tiene el mínimo de carácteres'
        }
      },
      maxLength(length) {
        return function (v) {
          return (!!v && v.length <= length) || 'El campo excede el máximo de carácteres'
        }
      },
      isVideoMp4(v) {
        return (
          (v.endsWith('.mp4') && v.startsWith('https://')) ||
          'La url debe contener un formato válido y el formato del vídeo en mp4'
        )
      },
      isURL(v) {
        if (!v) return false
        const pattern = new RegExp(
          '^(https?:\\/\\/)?' +
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
            '((\\d{1,3}\\.){3}\\d{1,3}))|' +
            'localhost' +
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
            '(\\?[;&a-z\\d%_.~+=-]*)?' +
            '(\\#[-a-z\\d_]*)?$',
          'i'
        )
        return pattern.test(v) || 'El campo no es una URL válida'
      },
      atLeastOneLowerCase(v) {
        return (!!v && /.*[a-z].*/g.test(v)) || 'Debe tener al menos una letra minúscula'
      },
      atLeastOneUpperCase(v) {
        return (!!v && /.*[A-Z].*/g.test(v)) || 'Debe tener al menos una letra mayúscula'
      },
      atLeastOneNumber(v) {
        return (!!v && /.*[0-9].*/g.test(v)) || 'Debe tener al menos un número'
      }
    }
  }
}

Vue.use(SimpleRules)

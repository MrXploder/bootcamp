import Vue, { VueConstructor } from 'vue'

const SimpleRules = {
  install(vue: VueConstructor) {
    vue.prototype.$rules = {
      requireddd(v: any) {
        return !!v || 'Este campo no puede estar vacío'
      },
      requiredCustom(message: string) {
        return function (v: any) {
          return !!v || message
        }
      },
      isEmail(v: any) {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return re.test(String(v).toLowerCase()) || 'El valor ingresado no es un email'
      },
      isSingleWord(v: any) {
        return (!!v && v.split(' ').length === 1) || 'Este campo debe contener solo una palabra'
      },
      isHttpsdd(v: any) {
        return v.startsWith('https://') || 'La url debe contener un formato válido'
      },
      isDeeplinkdd(v: any) {
        return (
          (v.includes('://') && !v.startsWith('://') && !v.endsWith('://')) ||
          'El deeplink debe contener un formato válido'
        )
      },
      minLength(length: number) {
        return function d(v: any) {
          return (!!v && v.length >= length) || 'El campo no tiene el mínimo de carácteres'
        }
      },
      maxLength(length: number) {
        return function d(v: any) {
          return (!!v && v.length <= length) || 'El campo excede el máximo de carácteres'
        }
      },
      isVideoMp4dd(v: any) {
        return (
          (v.endsWith('.mp4') && v.startsWith('https://')) ||
          'La url debe contener un formato válido y el formato del vídeo en mp4'
        )
      },
      isURLdd(v: any) {
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
      atLeastOneLowerCasedd(v: any) {
        return (!!v && /.*[a-z].*/g.test(v)) || 'Debe tener al menos una letra minúscula'
      },
      atLeastOneUpperCasedd(v: any) {
        return (!!v && /.*[A-Z].*/g.test(v)) || 'Debe tener al menos una letra mayúscula'
      },
      atLeastOneNumberdd(v: any) {
        return (!!v && /.*[0-9].*/g.test(v)) || 'Debe tener al menos un número'
      }
    }
  }
}

Vue.use(SimpleRules)

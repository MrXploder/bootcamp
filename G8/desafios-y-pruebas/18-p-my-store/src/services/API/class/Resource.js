export default class Resource {
  constructor(uri, data) {
    this.resource_uri = uri
    this.itemsList = data
  }
  all() {
    return new Promise((resolve, reject) => {
      try {
        let response = {
          data: this.itemsList,
          status: 200
        }
        setTimeout(() => { resolve(response) }, 1000)
      } catch (e) {
        reject(e)
      }
    })
  }

  find(id) {
    return new Promise((resolve, reject) => {
      let idx = this.itemsList.map(d => d.id).indexOf(id)
      if (idx >= 0) {
        let response = { data: this.itemsList[idx] }
        setTimeout(() => { resolve(response) }, 200)
      } else {
        setTimeout(() => { reject({ message: "not found", status: 404 }) }, 200)
      }
    })
  }

  create(data) {
    return new Promise((resolve) => {
      let response = {
        data: data,
        status: 201
      }
      setTimeout(() => { resolve(response) }, 200)
    })
  }

  update(id, data) {
    return new Promise((resolve, reject) => {
      let idx = this.itemsList.map(d => d.id).indexOf(id)
      if (idx >= 0) {
        this.itemsList[idx] = data
        let response = { data: this.itemsList[idx] }
        setTimeout(() => { resolve(response) }, 200)
      } else {
        setTimeout(() => { reject({ message: "not found", status: 404 }) }, 200)
      }
    })
  }

  patch(id, data) {
    return this.update(id, data)
  }

  remove(id) {
    return new Promise((resolve, reject) => {
      let idx = this.itemsList.map(d => d.id).indexOf(id)
      if (idx >= 0) {
        let response = { data: this.itemsList[idx] }
        this.itemsList.splice(idx, 1)
        setTimeout(() => { resolve(response) }, 200)
      } else {
        setTimeout(() => { reject({ message: "not found", status: 404 }) }, 200)
      }
    })
  }
}
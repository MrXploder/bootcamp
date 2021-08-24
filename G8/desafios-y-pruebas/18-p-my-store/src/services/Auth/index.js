class AuthAPI {
  constructor(_data) {
    this.data = _data
  }

  login(credentials) {
    return new Promise((resolve, reject) => {
      // reject if credentials are missing email or password
      if(!credentials.email || !credentials.password) {
        setTimeout(() => {
          reject({ message: "email or password missing", status: 401 })
        }, 1000)
      } else {
        // search for user
        let idx = this.data.map(u => u.email).indexOf(credentials.email)
        if (idx >= 0) {
          // let response = { data: this.itemsList[idx] }
          // setTimeout(() => { resolve(response) }, 200)
          if (this.data[idx].password === btoa(credentials.password + this.data[idx].salt)) {
            let u = JSON.parse(JSON.stringify(this.data[idx]))
            u['token'] = btoa((new Date).getTime() + u.salt + u.email)
            setTimeout(() => { resolve({
              data: u,
              status: 200
            }) }, 200)
          } else {
            setTimeout(() => { reject({ message: "wrong email or password", status: 401 }) }, 200)
          }
        } else {
          setTimeout(() => { reject({ message: "wrong email or password", status: 401 }) }, 200)
        }
      }
    })
  }
}

let users = [
  {
    email: 'user1@mystore.com',
    password: 'cGFzc3dvcmRjR0Z6YzNkdmNtUXhNak0w',
    salt: 'cGFzc3dvcmQxMjM0'
  },
  {
    email: 'user2@mystore.com',
    password: 'cGFzc3dvcmRZMGRHZW1NelpIWmpiVkY0VA==',
    salt: 'Y0dGemMzZHZjbVF4T'
  },
  {
    email: 'user3@mystore.com',
    password: 'cGFzc3dvcmRXVEJrUjJWdFRYcGFTRnBxWQ==',
    salt: 'WTBkR2VtTXpaSFpqY'
  },
  {
    email: 'user4@mystore.com',
    password: 'cGFzc3dvcmRWMVJDYTFJeVZuUlVXSEJoVQ==',
    salt: 'V1RCa1IyVnRUWHBhU'
  },
]

export let Auth = new AuthAPI(users)

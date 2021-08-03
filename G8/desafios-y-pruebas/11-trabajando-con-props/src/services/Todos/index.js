import Axios from 'axios'

export class Todo {
  httpClient = Axios.create({ baseURL: this.url })

  constructor(url) {
    this.url = url
  }

  async getAllTodos() {
    try {
      const response = await this.httpClient.get('/', {
        method: 'GET',
        baseURL: this.url,
      })
      console.log({ response })
      return response.data
    } catch (e) {
      console.error(e)
    }
  }
}

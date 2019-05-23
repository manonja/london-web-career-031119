class API {
  static baseUrl = 'http://localhost:3001'
  static signInUrl = API.baseUrl + '/signin'
  static validateUrl = API.baseUrl + '/validate'

  static signin (user) {
    return fetch(this.signInUrl, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }).then(resp => resp.json())
  }

  static validate () {
    const id = localStorage.getItem('token')
    return fetch(this.validateUrl, {
	    headers: { Authorization: id },
    }).then(resp => resp.json())
  }
}

export default API
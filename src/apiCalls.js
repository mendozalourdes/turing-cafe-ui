const baseURL = 'http://localhost:3001/api/v1'

let apiCalls = {







    fetchAPIData(type) {
        return fetch(`${baseURL}${type}`)
        .then(this.checkForErr)
    }


}

export default apiCalls;
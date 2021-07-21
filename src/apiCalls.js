const baseURL = 'http://localhost:3001/api/v1'

let apiCalls = {


    checkForErr(response) {
        if(!response.ok) {
            return "Oops, we are having technical issues at the moment."
        } else {
            return response.json();
        }
    },


    fetchAPIData(type) {
        return fetch(`${baseURL}${type}`)
        .then(this.checkForErr)
    }

    

}

export default apiCalls;

const axios = require('axios')
require('dotenv').config()

const API_KEY = process.env.API_KEY
const API_ENDPOINT = process.env.API_ENDPOINT

const headers = {
    'Ocp-Apim-Subscription-Key': API_KEY,
    'Content-Type': 'application/json'
}

const image_URL = 'http://foot.hiit.fi/jalka.jpg'


var API_URL = API_ENDPOINT + "/vision/v2.1/analyze?visualFeatures=Tags&language=en";




const tagImage = url => {
    return axios.post(API_URL,{"url": url },{  headers: headers    })
}

tagImage(image_URL).then(d => console.log(d.data.tags))
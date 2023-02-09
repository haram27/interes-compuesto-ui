import axios from 'axios'

const baseUrl = 'http://localhost:8080/api/v1/interest/calculate'

const calculate = (input) => {
  return axios.post(baseUrl, input)
}

export default calculate

import axios from 'axios'

const api = axios.create({ baseURL: 'http://128.23.34.54/api' })
//const apiEx = axios.create({ baseURL: 'https://admin-api.org/api' }) 
const apiEx = axios.create({ baseURL: 'http://localhost:54269/api' })  
const efetch = axios.create({ baseURL: 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils' })
const iCite = axios.create({ baseURL: 'https://icite.od.nih.gov/api' })

//export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

 // app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

 // app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
//})

export { axios, api, efetch, apiEx, iCite }

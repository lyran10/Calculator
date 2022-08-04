import axios from "axios"

export const cityKey = (key) => {
  return axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${process.env.REACT_APP_API_KEY}`)
}

export const citySearch = (city) => {
  return axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${process.env.REACT_APP_API_KEY}&q=${city}`)
}

export const forecast = (key) => {
  return axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${process.env.REACT_APP_API_KEY}`)
}

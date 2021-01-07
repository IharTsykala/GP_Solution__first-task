const axios = require("axios")

const apiKey = "VhPpn50ZBCAiZCbJPSV9uHl1q3XXZuAq8PVDmwMH"

export default class ServiceNews {
  static getNews = async (currentDate: string) => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${currentDate}`
      )
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
  static getCatalogNews = async (currentDate: string) => {
    try {
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?start_date=${currentDate}&api_key=${apiKey}`
      )
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
}

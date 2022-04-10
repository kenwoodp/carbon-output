const express = require('express')
const path = require('path')
const env = require('dotenv').config()
const axios = require('axios')

const electricityEstimateFunc = async (energyUsed) => {
    const carbonOutput = await axios({
    method: "post",
    url: "https://www.carboninterface.com/api/v1/estimates",
    headers: { Authorization: `${process.env["CARBON_ESTIMATION_API_KEY"]}` },
    data: {
      type: "electricity",
      electricity_unit: "kwh",
      electricity_value: energyUsed,
      country: "us"
    },
  })
  return carbonOutput.data.data.attributes.carbon_g
}

const vehicleEstimateFunc = async (distance) => {
    const carbonOutput = await axios({
    method: "post",
    url: "https://www.carboninterface.com/api/v1/estimates",
    headers: { Authorization: `${process.env["CARBON_ESTIMATION_API_KEY"]}` },
    data: {
      type: "vehicle",
      distance_unit: "km",
      distance_value: distance,
      country: "us",
      vehicle_model_id: "7268a9b7-17e8-4c8d-acca-57059252afe9"
    },
  })
  return carbonOutput.data.data.attributes.carbon_g
}

const flightEstimateFunc = async (departureAirport, destinationAirport) => {
    const carbonOutput = await axios({
    method: "post",
    url: "https://www.carboninterface.com/api/v1/estimates",
    headers: { Authorization: `${process.env["CARBON_ESTIMATION_API_KEY"]}` },
    data: {
      type: "flight",
      passengers: 1,
      legs: [
          {"departure_airport": departureAirport, "destination_airport": destinationAirport}
      ],
    },
  })
  return carbonOutput.data.data.attributes.carbon_g
}

const app = express()

app.use(express.json())

const port = process.env.PORT || 3001

app.use(express
    .static(path.join(__dirname, './carbon-output/build')))

app.post('/carbon-data', async (req, res) => {
    const carbonOutput = await electricityEstimateFunc(req.body.energyUsed)
    res.json({ carbonOutput: carbonOutput })  
})

app.post('/carbon-distance-data', async (req, res) => {
    const carbonOutput = await vehicleEstimateFunc(req.body.distance)
    res.json({ carbonOutput: carbonOutput })  
})

app.post('/carbon-flight-data', async (req, res) => {
    const carbonOutput = await flightEstimateFunc(req.body.departureAirport, req.body.destinationAirport)
    res.json({ carbonOutput: carbonOutput })  
})

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, './carbon-output/build/index.html'))
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
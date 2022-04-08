const express = require('express')
const path = require('path')
const env = require('dotenv').config()
const axios = require('axios')

// const carbonController = require('./controllers/carbonController')

const carbonOutputFunction = async (energyUsed) => {
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

const app = express()

app.use(express.json())

const port = process.env.PORT || 3001

app.use(express
    .static(path.join(__dirname, './carbon-output/build')))

app.post('/carbon-data', (req, res) => {
    const carbonOutput = carbonOutputFunction(req.body.energyUsed)
    res.json({ carbonOutput })  
})

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, './carbon-output/build/index.html'))
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
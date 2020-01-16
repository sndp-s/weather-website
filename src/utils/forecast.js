const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/0390a6478186a7c4028fa15fd11c2ffb/${latitude},${longitude}?units=si`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('unable to connect to weather services!', undefined)
        } else if (body.error) {
            console.log('unable to find location')
        } else {
            const currTemp = body.currently.temperature
            const precipChance = body.currently.precipProbability
            callback(undefined, `${body.daily.data[0].summary} It is currently ${currTemp} degrees out. The high today is ${body.daily.data[0].temperatureHigh} degrees and the low is ${body.daily.data[0].temperatureLow} degrees. There is ${precipChance}% chance of rain.`)
        }
    })
}


module.exports = forecast
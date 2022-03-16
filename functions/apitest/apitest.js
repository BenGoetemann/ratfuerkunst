const axios = require('axios')

const handler = async (event) => {
  const url = 'https://api.propstack.de/v1/units?with_meta=1&expand=1&status=15503&api_key=' + process.env.API_SECRET
  try {
    const { data } = await axios.get(url)

    return {
      statusCode: 200,
      body: JSON.stringify(data.data)
    }
  } catch (error) {
    const {
      status, statusText, headers, data } = error.response
    return {
      statusCode: status,
      body: JSON.stringify({ status, statusText, headers, data })
    }
  }
}

module.exports = { handler }

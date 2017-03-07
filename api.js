// Dependencies
const express = require('express')
const scrape = require('scrape-it')
const fetch = require('node-fetch')
const app = express()

// API
app.get('/api/problem/:q', (request, response) => {

  let query = {
    title: "h2",
    question: ".problem_content p"
  }

  // Retrieve the problem and serve as JSON
  scrape(`https://projecteuler.net/problem=${request.params.q}`, query, (error, page) => {
    response.send(error || page)
  })

})

app.listen(3000)

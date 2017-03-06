#!/usr/bin/env node

// Dependencies
const fetch = require('node-fetch')
const fs = require('fs')

let problem = process.argv[2]

fetch(`https://project-euler-rqlypwtoez.now.sh/api/problem/${problem}`)
  .then(response => response.json())
  .then(response => createFile(problem, response.question, 'py'))
  .catch(error => console.log(error))


function createFile(question, problem, language) {

  // Create a new file at peX.py
  let stream = fs.createWriteStream(`pe${question}.${language}`);

  // Write out problem content to file
  stream.once('open', () => {

    stream.write('\"\"\"\n')
    
    // Write the problem to the file and the console.
    problem = problem.split(/\.\s?/)

    for (var i = 0; i < problem.length; i++) {
      stream.write(`${problem[i]}\n`)
      console.log(problem[i])
    }

    stream.write('\"\"\"')
    stream.end()

  })

  console.log(`File created at pe${question}.${language}`)

}

#!/usr/bin/env node

// Dependencies
const filesystem = require('fs')
const spawn = require('child_process').spawn

const languages = require('./languages/languages')



// Information from command line arguments
let command = process.argv[2]
let question = process.argv[3]
let language = process.argv[4]



// Generate the file problem 
if (command == 'g' || command == 'generate') {

  let problems = []

  filesystem.readFile(`${__dirname}/data/project_euler.text`, 'utf-8', (error, data) => {

    if (error) console.log(error)
    
    problems = data.match(/Problem(.|\n)*?Answer:\s.+/gm)

    // Create a new file at peX.py
    language = languages[language]
    let problem = problems[question]

    let stream = filesystem.createWriteStream(`pe${question}.${language.extension}`)

    // Write out problem content to file
    stream.once('open', () => {

      stream.write(language.open_multiline_comment)

      stream.write('\n')
      stream.write(problem)
      stream.write('\n\n')
      
      stream.write(language.close_multiline_comment)
      stream.end()

    })

    console.log(`\n${problem}\n`)
    console.log(`File created at pe${question}.${language.extension}`)

  })
}


// Check the solution for the problem
else if (command == 's' || command == 'solution') {

  let solution
  let answer

  // Find the solution in the solutions.text file
  filesystem.readFile(`${__dirname}/data/solutions.text`, 'utf-8', (error, data) => {
  
    if (error) console.log(error)
  
    let solutions = data.split('\n')
    solution = solutions[question-1]
    solution = solution.replace(/\d+\.\s/, '')
    solution = parseInt(solution)

  })

  // Find their answer by executing their solution and retrieving input
  let file = `pe${question}.py`
  let process = spawn('py', [file])

  process.stdout.on('data', chunk => {
    answer = chunk.toString('utf8')

    console.log(`Checking \"${file}\" against solution, your output: ${answer}`)
    console.log(`Your solution is ${answer == solution ? 'correct.' : 'wrong'}`)
  })

}
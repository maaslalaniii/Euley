const filesystem = require('fs')
const languages = require('../languages/languages')
const spawn = require('child_process').spawn

function solution(question, language) {

  // find the solution in the solutions.text file
  let data = filesystem.readFileSync(`${__dirname}/../data/solutions.text`, 'utf-8')

  // array of all solutions where the index (i) is the soltution to question i + 1
  let solutions = data.split('\n')
  let solution = solutions[question - 1]


  // remove the line number from before the answer
  solution = solution.replace(/\d+\.\s/, '')
  solution = parseInt(solution)

  // Find their answer by executing their solution and retrieving input
  let file = `pe${question}.${languages[language].extension}`
  let process = spawn(languages[language].command, [file])

  // listen for output and check solution to answer
  process.stdout.on('data', chunk => {

    answer = chunk.toString('utf8')

    console.log(`Checking \"${file}\" against solution, your output: ${answer}`)
    console.log(`Your solution is ${answer == solution ? 'correct.' : 'wrong'}`)

  })

}

module.exports = solution
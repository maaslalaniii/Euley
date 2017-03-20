const filesystem = require('fs')
const languages = require('../languages/languages')
const { spawn } = require('child_process')

function solution(question, language) {

  // find the solution in the solutions.text file
  let data = filesystem.readFileSync(`${__dirname}/../data/solutions.text`, 'utf-8')

  // array of all solutions where the index (i) is the soltution to question i + 1
  let solutions = data.split('\n')
  let solution = solutions[question - 1]

  // remove the line number from before the answer
  solution = solution.replace(/\d+\.\s/, '')
  solution = parseInt(solution)

  // find their answer by executing their solution and retrieving input
  let file = `pe${question}.${languages[language].extension}`
  let process = spawn(languages[language].command, [file])

  // store current time for determining execution time of the solution
  let start_time = new Date().getTime()

  // listen for output and check solution to answer
  process.stdout.on('data', chunk => {
    end_time = new Date().getTime()

    // subtract fourty-five to account for node process
    // naive method since time may very from system to system
    execution_time = end_time - start_time - (45)
    execution_time = execution_time > 0 ? execution_time : 1 

    answer = chunk.toString('utf8')

    console.log(`Checking \"${file}\" against solution, your output: ${answer}`)
    console.log(`Execution time: ${execution_time}ms`)
    console.log(`Your solution is ${answer == solution ? 'correct.' : 'wrong'}`)

  })

}

module.exports = solution
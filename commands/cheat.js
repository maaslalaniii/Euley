const filesystem = require('fs')

function cheat(question) {
  
  // find the solution in the solutions.text file
  let data = filesystem.readFileSync(`${__dirname}/../data/solutions.text`, 'utf-8')

  // array of all solutions where the index (i) is the soltution to question i + 1
  let solutions = data.split('\n')
  let solution = solutions[question - 1]

  // remove the line number from before the answer
  solution = solution.replace(/\d+\.\s/, '')

  console.log(`The answer to question ${question} is ${solution}`)

}

module.exports = cheat
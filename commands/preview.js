const filesystem = require('fs')

function preview(question) {

  // array of all problems on project euler
  let problems = filesystem
                  .readFileSync(`${__dirname}/../data/project_euler.text`, 'utf-8')
                  .match(/Problem(.|\n)*?Answer:\s.+/gm)

  // specific problem based on question number
  let problem = problems[question - 1]

  console.log(problem)

}

module.exports = preview
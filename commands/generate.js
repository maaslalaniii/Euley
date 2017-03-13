const filesystem = require('fs')
const languages  = require('../languages/languages')

function generate(question, language) {

  // array of all problems on project euler
  let problems = filesystem
                  .readFileSync(`${__dirname}/../data/project_euler.text`, 'utf-8')
                  .match(/Problem(.|\n)*?Answer:\s.+/gm)

  // specific problem based on question number
  let problem = problems[question - 1]

  // extract language components from the language object
  const open_comment = languages[language].open_multiline_comment
  const close_comment = languages[language].close_multiline_comment

  // determine the contents to write and the file in which to write
  let file = `pe${question}.${languages[language].extension}`
  let contents = `${open_comment}\n${problem}\n\n${close_comment}`

  // write the file and handle errors
  filesystem.writeFile(file, contents, error => console.log(error || `file generated at ${file}`))

}

module.exports = generate
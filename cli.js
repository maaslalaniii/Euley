#!/usr/bin/env node

// import all commands from their respective files
let generate = require('./commands/generate')
let solution = require('./commands/solution')
let preview  = require('./commands/preview')
let cheat    = require('./commands/cheat')
let help     = require('./commands/help')

// parse command line arguments
let command  = process.argv[2]
let question = process.argv[3]
let language = process.argv[4]

// execute the proper command based on arguements
switch (command) {

  case 'generate':
  case 'g':
    generate(question, language)
    break

  case 'solution':
  case 's':
    solution(question, language)
    break

  case 'preview':
  case 'p':
    preview(question)
    break

  case 'cheat':
  case 'c':
    cheat(question)
    break

  case 'help':
  case 'h':
    help()
    break

  default:
    console.log('Invalid command syntax. Type \'help\' to see correct syntax.')

}
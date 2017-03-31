# Euley

An offline command line interface for retrieving problems from [projecteuler.net](http://projecteuler.net)

## Command Line Interface

### Installation

To use the command-line interface simply install the npm module globally

```bash
$ npm install -g euley
```

and navigate to your project euler solutions directory or wherever you would like to generate problem files.

```bash
$ cd ~/project-euler
```


### Generate problem files
run `euley generate <problem> <language>` for example let's do the first problem.

```bash
$ euley generate 1 python
File created at pe1.py

$ subl pe1.py
```

This will create the file. Open it in your text editor so you can begin coding. The problem description will also be at the top of the file so you don't have to keep the command line open. 


### Checking solutions
After you've finished coding your solution make sure you ` print() ` the solution.

Now you can check your solution by running ` euley solution <problem> <language> `

```bash
$ euley solution 1 python

Checking "pe1.py" against solution, your output: [spoiler]

Your solution is correct!
```

### Commands
* ` cheat <problem> ` - displays the solution to the specified problem
* ` help ` - displays a list of possible commands
* ` generate <problem> <language> ` - generates a file with the problem description commented out
* ` preview <problem> ` - displays the problem on the console 
* ` solution <problem> <language> ` - checks the answer of your program to the problem's solution

note: all these commands are available offline.

### TODO
Add more language support, currently CLI supports only python and javascript

### Contribute
Additions to the module are always welcome! :raised_hands:


# Euley

An api and command line interface for retrieving problems from [projecteuler.net](http://projecteuler.net)

## API :fire:

Visit [https://project-euler-rqlypwtoez.now.sh/api/problem/1](https://project-euler-rqlypwtoez.now.sh/api/problem/1) for problem number 1 in JSON format.

```json
{
    "title": "Multiples of 3 and 5",
    "question": "If we list all the natural numbers below 10 that
                 are multiples of 3 or 5, we get 3, 5, 6 and 9.
                 The sum of these multiples is 23. Find the sum of
                 all the multiples of 3 or 5 below 1000."
}
```

Note the API works with all 583 problems on the site, however some questions may be unsolvable through the api because of missing images or text files.

## CLI :construction:

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
$ subl pe1.py
```

![Command line](https://camo.githubusercontent.com/9942679eac8cc9441aa91f766b68dc05c731315c/687474703a2f2f696d6167652e70726e747363722e636f6d2f696d6167652f32303566363738306239633634663431386633663632653339336136353135392e706e67)

This will create and open the file in your text editor so you can begin coding.


### Checking solutions
After you've finished coding your solution make sure you print only the solution (should be 1 number).

Now you can check your solution by running `euley solution <problem> <language>`

```bash
$ euley solution 1 python

Checking "pe1.py" against solution, your output: [spoiler]

Your solution is correct!
```



### TODO
Add more language support, currently CLI supports only python

### Contribute
Additions to the module are always welcome! :raised_hands:


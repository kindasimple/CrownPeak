Sr Technical assessment
========

*Option 3: Take Home Code Exercise*

This would be an exercise in which you do on your own time and push to a public repository on GitHub in a language of your choice
The following is a good guideline on what we might look for.

http://willkle.in/posts/submitting-code-samples.html

*Exercise 3*

Write some code that accepts an integer and prints the integers
from 0 to that input integer in a spiral format.
 
For example, if I supplied 24 the output would be:

    20 21 22 23 24
    19  6  7  8  9
    18  5  0  1 10
    17  4  3  2 11
    16 15 14 13 12


## Quickstart

open bash and install the dependencides and transpile the typescript to javascript

```bash
yarn install # OR npm install
yarn build # OR npm build
```

To see the application output, use npm to run the default script with the target value as a parameter

```bash
target_value=8
yarn start $target_value # OR npm start $target_value

$ node index.js 8
 6 7 8
 5 0 1
 4 3 2
```

There are a few unit tests available to validate the application code is working correctly. 

```bash
yarn test # OR npm run test

$ jest
 PASS  __test__/print.test.ts
 PASS  __test__/utils.test.ts
 PASS  __test__/spiral.test.ts

Test Suites: 3 passed, 3 total
Tests:       8 passed, 8 total
Snapshots:   0 total
Time:        3.826s
Ran all test suites.
```

Documentation can be auto-generated with [typedoc](http://typedoc.org/) and viewed in a web browser

```bash
yarn docs # or npm run docs
open ./doc/index.html
```
# Lesson 3 Homework

## Numble Part 1

## Preparations

we can probably get rid of the "\*" and "#" buttons, which would make comparison with our target number easier. To keep the 0 centered, you can just replace the two buttons with empty divs.

## Step by step

Try to do one simple thing at a time. If you can't get it done, ask for help on Slack so that either one of you or me can jump in and help

We're going to focus on _1_ round of playing this time, rest will come later.

1. When user clicks button, add the corresponding numer to the `inputNumber` array. For example by using `inputNumber.push()`. Keep in mind that the contents of the data-num attribute is a string and needs conversion.
2. When the `inputNumber` is 5 digits long, for now, just `console.log()` the number.
3. Instead of that, console.log the numbers that are in the correct position.
   - Of course you could do this with a for-loop and comparing `number[i] === inputNumber[i]` but thinking ahead, you could also first check `inputNumber.indexOf()` (documentation [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)). This will help you in the next step.
4. Also `console.log()` the numbers that are in the `input` array but are in the wrong position.
5. Instead of `console.log()` the numbers, extract the checking into a function that returns an object like `{correctPosition: [], correctDigit: [], wrong: []}` where the three arrays contain the digits that are either in the correct position or at least present in `number`, or simply not being present at all.
   - before iterating over `inputNumber`, create three arrays for the cases, name them `correctPosition`, `correctDigit`, `wrong`.
   - then push to them while checking the numbers.
   - then return them in Object form like `{correctPosition, correctDigit, wrong}`, this is a shortcut to the long form which would be `{correctPosition: correctPosition, correctDigit: correctDigit, wrong: wrong}`
6. Let's mark the buttons in the corresponding colors:
   - A green for correct position
   - a yellow for correct digit
   - a dark grey ('grey' is good enough) for a wrong digit.
   - To get a specific button by number, you can use `querySelector` and a slighty more complex query than the one we've used before: By querying for `[data-num="2"]` you're selecting the button with the 2. So with string interpolation, you should be able to construct a query for a specific button.

# Homework Lesson 4

## More Numble

Thanks for your patience with our "code review" session on a dark and gloomy friday evening, everyone!

I've taken Samuels file we've worked on and I've added a grid that is very similar to what Vassilis had done but is addressed in a slightly different way.

I liked Vassilis' Idea of reducing the numbers, I did that as well but reduced it further to 6. For those who didn't get the reference, the O.G. in the space is the classic board game ["Mastermind"](<https://en.wikipedia.org/wiki/Mastermind_(board_game)>)

## Using the grid

I removed the input element, so instead we should add the numbers the user presses to the grid.

My version to find the correct grid item is a bit different than Vassilis' but that doesn't mean that it's the correct method. It uses only data-attributes.

Every grid item has two data-attributes, `data-row` and `data-column`. By combining these two in a CSS query, we can find the item with `document.querySelector()`:

```JavaScript
const row = 0, column = 0;
const element = document.querySelector(`[data-row="${round}"][data-column="${column}"]`)
```

We can then add the number with `innerText` as we've done before.

## Our `result` Object

On reflection, this object is not very helpful if we want to show the results in the grid: It would be fine if we just wanted to paint our buttons, but for showing the correct result on the grid it misses the positional information: A [2] on the `correctPosition` Array doesn't say where that 2 sits.

So we need a better solution. One would be to have result simply be an array of the status per position. So, for example ['P', 'C', 'W', 'W','W'] would mean that the number in position 1 is in the correct position, the number in the second position is correct but in the wrong position and the other three are just wrong.

**Please try to come up with a solution to this problem by modifying our checking method (To properly name it after we've combined the checks, I renamed it to `checkInput()`) - It should be a bit simpler than what we had**

<details>
    <summary>If you feel lost, I've hidden a ready made solution</summary>
    <a href="https://gist.github.com/halfbyte/d3d86cb54d44b7b73c0d6f97231bd0dc">Go here for solution</a>
</details>

## Vassilis' Problem with too many numbers at "wrong position"

With our new method of tracking the result, removing the false duplicates there is a bit more complex than with our object. It can be done, but my shortest solution is still three functions and about 30 lines of code. You can find it as a gist [here](https://gist.github.com/halfbyte/80aef0d625ad0d99b22440083dc0dc8c).

I'll have a think over the weekend to see if I can find something simpler.

## Painting with color

Of course we could use the style attribute again, but a more simple approach would be to just add a class to a grid item to color it. To do that you can use the `classList` property on the element. Like so:

```JavaScript
const element = document.querySelector("some query")
element.classList.add("correct-position");
```

By iterating through the result array and adding corresponding classes to the grid items (and adding some CSS to the header) you should be able to color the grid items.

## On to the next round

When a round is finished and we have calculated the results we need to move on to the next round. This includes:

- Emptying our inputNumber array
- Incrementing a counter so that we fill the second grid row now
  - We should also check if the user has lost because "there is no next round anymore" after the fith round.

## A win is a win

When the result array only contains "P"'s, we have a winner. Alert the user to their win.

Don't worry about resetting everything - For now we want the user to be able to marvel at their fabulous performance

## Keyboard input?

Do you think you could refactor the code in a way that would allow you to implement simple keyboard input?

# Lesson 5 - Arrows and iterators

## Arrow functions

We recapped functions, anonymous functions and arrow functions. Arrow functions are special in a number of ways:

- They are always anonymous
- They exist in two forms:
  - With curly braces (can be multi line then), mostly acts the same as a normal anonymous function
  - Without curly braces:
    - They can only have one expression
    - The resulting value of the expression is returned without an explicit return

The short form of the arrow function makes it very useful for the array functions we talked about:

```JavaScript
[1,15,7,8,4,2].sort((a,b) => a-b)
// vs.
[1,15,7,8,4,2].sort(function(a,b) { return a-b; })
```

## Array.prototype.\*

There are a lot of interesting methods available on array that help sort, aggregate or filter data from a dataset.

We've learned about:

- [sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

For `sort()` we can supply a function to make sure the correct thing is sorted. The function gets two elements (a and b) from the array that need to be compared and leaves the comparison to us. The function should return a positive value if `a > b`, a negative value if `b > a` and a 0 if both are the same.

For simple numbers, this means that `a-b` is enough. Of course this means that you can simply switch the order from ascendig to descending by using `b-a` instead.

(For the record, since we talked about Sorting Algorithms, V8, the JavaScript engine in Chrome uses [Timsort](https://de.wikipedia.org/wiki/Timsort) - I couldn't find any info on what Spidermonkey, the engine in Firefox uses)

With `map()` we can do transformations to each element in the array. This is useful, for example if you have an array of objects but would like to have an array with only one of the object properties. The provided function is called for each element in the array and the return values are returned from `map()` as a new array.

`filter()` allows you to filter down your array on any condition. The provided function is called for each element of the array and if the function returns true, the element is returned in the resulting array.

`reduce()` is a function to aggregate values. Often it makes sense to write out the code with a simple for loop or a `forEach` to fully understand the problem since reduce's can be a bit hard to read. Here are two equivalent ways of summing up all elements in an array:

```JavaScript
let array =
let sum = 0;
for(let i=0,l=array.length;i<l;i++) {
  sum += array[i];
}

array.reduce((memo, element) => memo + element, 0);
```

Think of `memo` as the equivalent of the `sum` in the for-example. The last argument of the reduce function is the initialisation value of the memo. The value our provided function returns becomes the new `memo` for the next call.

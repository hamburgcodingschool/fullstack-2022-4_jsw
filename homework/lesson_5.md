# Homework for Lession 5

## Preparation

copy [data.json](../code/lesson5/data.json) and [address_book.html](../code/lesson5/address_book.html) to your own folder and start the live preview on address_book.html - It should display a list of names.

## Ignore the fetch

I've briefly explained the fetch but we'll get back to that later. For now, just assume that the data.json file is loaded from the server, then parsed into JavaScript objects and handed in to the `displayPersons` function I put on top of the script.

## Ignore the weird `personsCache` thing

It's going to be important in Exercise 2

## Excercise 1

Just play around with the `displayPersons()` function. Here are a few things to try:

- Display more data with the names
- color the entries in the favourite color of the person
- Sort the entries by name. (I'll add a tip for this at the end, it is not super straight forward.)
- Sort the entries by date

Feel also free to improve upon the non-styling of this page.

## Exercise 2

Did you notice the text input on top of the page? Can you build a search function that searches for the name? It should work with partial input and on every change of the input field (Think `input` event).

There is a slight complication: You probably don't want to reload the data every time, so we should "cache" the data when it's loaded in our code. To not make this too complicated for you I've already implemented a simple cache at the beginning of `displayPersons()`, so you can simply call that function without any arguments in your update function.

To delete all list items, you can simply do `ul.innerHTML = ""` before recreating the list.

To recap what to do:

- On every `input` event on the text input (id='search'), update the list (ignore any flickering).
- When the text input contains characters, filter the list by looking if any of the names start with the characters.
- When the text input is empty, display the whole list.

## Sorting strings

I told you that `sort()` by default sorts by comparing strings, but if you want to sort objects that contain strings, that's not straight forward, as you need to supply a function that does the extraction of the string in the array.

The following code sorts by the name in our person objects. I am the first to admit that this is not beautiful. What happens here is that these are two ternaries nested within each other.

```JavaScript
persons.sort((a,b) => a.name > b.name ? 1 : b.name > a.name ? -1 : 0)

// Slightly more understandable:

persons.sort((a,b) => {
  if (a.name > b.name) {
    return 1;
  } else if (b.name > a.name) {
    return -1;
  } else {
    return 0
  }
}

```

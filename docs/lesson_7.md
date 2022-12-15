# Lesson 7 - Catch them all

## JSON

JSON stands for JavaScript Object Notation and is a way to express JavaScript objects with a limited set of JavScript syntax so that it can easily transferred as plain text over the network.

JSON has a couple of very strict rules that are not true for JavaScript, for example:

- No code/functions
- All keys need to be quoted (`{"name": "Jan"}` instead of `{name: "Jan"}`)
- No comments allowed
- Only Numbers, Strings, Booleans, Arrays, Objects and null are allowed as data types.

JavaScript has two functions to parse and generate JSON:

```JavaScript
// parse
JSON.parse('{"name": "Jan"}')
// generate
JSON.stringify({name: "Jan"})
```

The fact that JavaScript comes with a default way to parse JSON and the browser have optimised the crap out of that makes it very popular to transmit data between the Server and JavaScript in the browser.

## APIs

APIs are a way to access data via HTTP. In our example, the data is everthing there is to know about the world of Pokemon. We've started with a simple example that gave us the first 20 pokemons of a list of all the 1154 known pokemons. This list has a URL: [https://pokeapi.co/api/v2/pokemon](https://pokeapi.co/api/v2/pokemon).

This URL is called a Resource or an Endpoint. For the URL, the server returns JSON that contains the data you've requested. In this case: A list of pokemons.

Where the hypermedia comes in is that the list of pokemons contains a link to each detail resource of each pokemon, so for example the first pokemon (Bulbasaur) has the detail URL of [https://pokeapi.co/api/v2/pokemon/1/](https://pokeapi.co/api/v2/pokemon/1/). The JSON that comes back for that URL has a ton of links to other resources or endpoints as well, such as the moves, the abilities, the forms, and some images, here called "sprites" because it's about a game.

### Pagination

You might wonder why the API only returns 20 of the 1154 pokemon. This is for performance reasons. It might take too long to read 1154 pokemons from the database. But also, in our part of the software, having to render 1154 pokemons at once might take too long.

So we need a way to get to the rest of the pokemon, and our JSON contains another link called "next" which gives you the URL for fetching the next 20 pokemon.

## fetch and promises

Promises are a concept in JavaScript to make asynchronicity a bit easier. (You will later learn a bit of syntactic sugar called async/await that will even make it look a bit nicer as well)

`fetch()` makes a http request and that could take anywhere from a couple of microseconds to up to a couple of minutes, depeding on your connection speed, the amount of data etc. - That's why it works asynchronously. By returning a promise instead of the result of the process, you can do other things in your application while it waits for the result. The promise has a `then()` function that works a little bit like .addEventListener, except that the function you'll give it will only be called once, namely when the request is finished.

The response object that is then passed to your callback has a couple of methods to help with different data formats - one of them being JSON. Since the parsing of the JSON also could take some time depending on the amount of data, `response.json()` also returns a promise. And your callback in that promises' `then()` finally gets the parsed JSON data and you can do things with it.

## What we've used

- [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/fetch)
- [Element.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
- `h()` - Like I mentioned during the lesson, the h() function was loosely inspired by a function that sits at the core of frameworks like React and Vue. You can find an open source implementation of something similar [here](https://github.com/hyperhype/hyperscript) - This implementation is much better and more complete than mine and has additional tricks and benefits - but it's also 160 lines instead of ... 18.
- [pokeapi.co](https://pokeapi.co)
- I've talked a bit more about event delegation in the [last lesson's docs](lesson_6.md)

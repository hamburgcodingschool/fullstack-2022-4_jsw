# Lesson 2

## Events

We use `.addEventListener()` to allow a function to listen to events. That function is called a "callback", because it gets called when an event happens. We also sometimes say the event gets "triggered".

There are a ton of different events and we'll cover a couple more next time. The ones we used so far are:

- click (useful mostly for buttons)
- keypress (useful to implement keyboard shortcuts or game controls, for example)

We've also briefly talked about `load`, which is an event that gets triggered on `document` when the HTML document is fully loaded.

Which brings us to a good point: It is important on what element you add your listener function: If you want to listen for a click, you need to do that on the element the user should click. For keypresses, it might be different, because you want them to work globally, so you can also add them to the body.

There's a bunch of language that is used to describe what the addEventListener method does. You can "bind" a callback to an element. You can "attach" a listener. It all means the same.

## When does our JavaScript get executed

When a script tag with JavaScript inside appears in the HTML, it is directly executed, which is why we then can use `document.write()` to add HTML to that particular place. This is also true when the JavaScript is loaded over the network like in `<script src="my_javascript.js"></script>`. Which has implications: If the network request is slow, and/or the JavaScript is large, this will block the rest of the page from rendering. I've briefly showed you `<script async>` which will not block the rendering from happening - On the flipside, this does mean that you can't do `document.write` in there, and you have next to no control over the moment when your JavaScript will be run. This is why, in real life applications, our JavaScript is probably started on `DOMContentLoaded` which fires earlier than `load` (which we briefly looked at), but late enough so that everything on the page is ready.

## Data and functionality

You may have noticed that in contrast to what happened in learn2code, when coding for the web, your program becomes fragmented into all these small parts that react to user input. The thing that binds these together is no longer a global piece of code that calls a couple of functions, but both the code to add the event listeners and, more importantly, your data. In our counter example, the counter variable. In the color example, an array containing the colors _and_ the counter to cycle through them.

## Things we used

- [addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- If you dare, [here's a list](https://developer.mozilla.org/en-US/docs/Web/Events) of all/most events available: Spoiler alert: It's a long list. I'll ask you about all of them on Wednesday. (I'm just kidding) Here are the ones we looked at and I talked about:
  - [click](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)
  - [keypress](https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event)
  - [keydown](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event)
  - [keyup](https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event)
  - [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event)

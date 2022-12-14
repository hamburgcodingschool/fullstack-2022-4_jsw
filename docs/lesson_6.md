# Lessson 6 - Event delegation and Date()

## Event delegation

Events in JavaScript have a very peculiar property: They are not only triggered on the element where the event happened (for example a "click" event on a button), but also on every element up the DOM tree. Imagine the following HTML:

```html
<body>
  <div>
    <button></button>
  </div>
</body>
```

If you would add an event listener to the `button`, the `div` and the `body`, you would get, on a single click, three events on each of the elements.

This is called "event bubbling" because the events bubble up to the topmost element, the body.

This seems confusing and counter productive at first, but there's good reasons for it and we can use it to our advantage.

As you can see in our example from this lesson, you can simply attach the click listener once on the `ul`, and regardless of how the list changes, clicks are always tracked and using the `event.target` property, we can figure out what element exactly has been clicked. This is called Event delegation, because the event is handled by another instance and not the actual element that was clicked.

In case you want to learn more about this, our trusty [MDN has a lengthy article](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) on how events work, how bubbling works, and some more description on Event delegation.

## Date

In web applications, you often need to handle dates. JavaScript's built in object for date handling isn't super, but it has some basic functionality.

```JavaScript
const date = new Date()
```

When you create a new date without any arguments, it will be initialized to the current date and time.

```JavaScript
const date = new Date(1970,0,1,1,0,0)
console.log(date.getTime())
# 0
```

You can add up to 7 parameters to the constructor to increasingly precisely create a specific date.

Please note that, yes, Months are given with a 0 index. Please don't ask me why?

It is important to note that most of the methods and constructors assume a date and time in your current time zone.

`date.getTime()` is interesting. It returns the milliseconds that have passed since the 1st of January 1970 0:00:00.000 UTC. This makes comparing or sorting dates easy because the time zone is no longer part of it.

The [Documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) is quite long and explains a couple of the underlying concepts.

# A quick word on innerHTML

I realised in today's session that by not letting you use innerHTML for our experiments (especially today), I've done you a certain disservice because creating all these elements by hand can be very tedious. But I do indeed consider innerHTML very dangerous and don't think it should be used even in teaching concepts. I may have to rethink that in the name of efficiency, but I have an alternative at the end of this. To give you an idea of how one could exploit the issues of innerHTML, I created a little dumb demo in [inner_html_demo.html](../code/lesson6/inner_html_demo.html).

I've also created a small but powerful utility function in my implementation of the address book challenge I gave you today - Feel free to take a look and steal it for later. It is inspired by similar functions that are part of modern frameworks (often hidden behind extra magic, like JSX) and is often called "hyperscript". It is not a full implementation, though, but I hope you can see how adding just a little utility like that makes your life so much more easy.

Think about such possibilities when you code. Try to develop a feeling for repetition and when it starts to "hurt". That's probably a good moment to step back and try to think of a way to remove the repetition by building an abstraction. My `h()` function is exactly that.

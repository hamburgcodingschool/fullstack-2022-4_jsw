# Lesson 3 - Scroll events and querySelector

## Scroll events

Scroll events are fun because they allow us to add some fun "delighters" into a page that makes users go "whoah", but don't overdo these effects. Of course there are also serious applications, for example to load more content when a user scrolls towards the bottom of the page (aka "endless scrolling") or to dynamically move things into view that behave a bit more dynamic than `display: static`.

## querySelector/querySelectorAll

`querySelectorAll` allows us to quickly select a group of elements on other criteria than just classes or id's. This is especially helpful when working with data-attributes.

## data-\*

We can use `data-attributes` to attach arbitrary data to HTML elements. This allows us to not having to rely on classes and id's, which can be "brittle" in the sense that they are also used to attach styles in CSS, and so in a project a designer might opt to change classes and id's in the HTML and suddenly our JavaScript breaks. While data-attributes can be targeted in CSS, this should be avoided.

It is important to note that data-attributes, when read from JavaScript (via `getAttribute("data-something")`, always are Strings and need to be converted if you want to read them as numbers.

## What we've used

- [css transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [scroll event](https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event)
- [scrollY](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY)
- [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector), [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [data-\*](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*)
- [getAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute)

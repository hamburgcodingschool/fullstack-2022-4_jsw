# Lesson 1

## Basic concepts

DOM stands for Document Object Model and is JavaScript's view of the HTML document. You can read and modify the HTML of your page with the objects, methods and properties that make up the DOM.

## A tree of objects

An HTML document can be visualised by a tree (Which is a data structure and not a plant) where the outer `html` tag is the root element (There is a subtle difference between "element" and "node" but they are still often used synonymous. We'll get to that.) and the rest of the document branches from there. The root element has a `head` and a `body`. The `body` contains the tags that are then visible in the browser window and since you can nest these tags into each other, they can be expressed as a tree as well.

There are ways to "traverse the tree" (think of it as climbing up and down the branches). An "element" may have `children` and also may have a `parentElement` (Unless it is the document itself)

## What we've used in Lesson 1

- [document.write](https://developer.mozilla.org/en-US/docs/Web/API/Document/write) (Note the disclaimer at the top 😄)
- [document.getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
- [document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [document.createTextNode()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode)
- [prompt()](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt)
- [node.style =](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
- [console.log](https://developer.mozilla.org/en-US/docs/Web/API/console/log)
- [console.dir](https://developer.mozilla.org/en-US/docs/Web/API/console/dir)
- [node.children](https://developer.mozilla.org/en-US/docs/Web/API/Element/children)
- [node.parentElement](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement)

## Asynchronicity

During the learn2code course, your code was mostly executed linearly and it is relatively easy to follow the flow of the program.

This changes on the web (The same is true for App development, btw.) where you need to react to user input, such as button presses, swipes, input fields, etc.

This is solved by using event listeners (More on that in lesson 2). These are functions that are "called back" by the browser (which is why we call them "callbacks") when a user does a certain action.

But this does mean that the flow of the program is inherently more difficult to understand. Unfortunately there is no good way around that. This does make (as we are probably going to discuss at some point) good code organisation really important.

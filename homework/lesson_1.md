# A more colourful todolist

Take the code from [output.html](/code/lesson1/output.html) and make it your own.

## Remember HTML/CSS?

Think about the things you learned in the first course and turn the HTML/CSS into something more beautiful - Without breaking the functionality.

## Color!

Think of how we built colors in the first challenge and add some way of adding colors to the todo list items.

Here's how to color the item directly:

### Background color

```JavaScript
listItem.style.backgroundColor = '#ff00aa';
// or
listItem.style.backgroundColor = 'rgb(255, 00, 200)';
// or
listItem.style.backgroundColor = 'hsl(10deg, 100%, 50%)';
```

### Text color

```JavaScript
listItem.style.color = '#ff00aa';
// or
listItem.style.color = 'rgb(255, 00, 200)';
// or
listItem.style.color = 'hsl(10deg, 100%, 50%)';
```

### Add a class

You could also simply define a couple of classes in CSS and then use them to style the list items.

```JavaScript
listItem.addClass('my-class');
```

### Generate Colors

hsl is great, because you can vary the hue (remember, it's taking a degree on the color wheel from 0-360deg) and you can simply count up, hsl will do the "modulo" for you.

(See [colors.html](/code/lesson1/colors.html) for a way to generate hsl colors)

You can also use `Math.random` to generate rgb values:

```
var red = Math.floor(Math.random()*255)
var green = Math.floor(Math.random()*255)
var blue = Math.floor(Math.random()*255)
var rgb = `rgb(${red}, ${green}, ${blue})`;
```

# Lesson 2 Homework

## Some more keyboard shortcuts

Starting from [Vassilis' double counter example](../code/lesson2/double_counter/keyboard.html), I've added keyboard input for + and -. Vassilis' counter does more than that, though. We need a keyboard shortcut for selecting the counter. You have a choice here: One key for toggling between the two or two keys for selecting the respective one. (Or both). Also, Vassilis added a counter reset, so we might want that as well.

To select A or B programmatically, you can simply set the `.checked` property we used earlier, so `radioButton1.checked = true` should do it.

## Other events

Take a look at the following, relatively simple code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Color Slider Example</title>
    <style>
      .color-box {
        width: 100%;
        height: 100px;
        border: 1px solid black;
      }
      .hue {
        width: 100%;
      }
    </style>
  </head>
  <body>
    <div id="color-box" class="color-box"></div>
    <div>
      <label
        >Hue<input
          value="0"
          type="range"
          min="0"
          max="360"
          step="1"
          class="hue"
          id="hue-slider"
      /></label>
    </div>
    <script>
      const colorBox = document.getElementById("color-box");
      const hueSlider = document.getElementById("hue-slider");

      function updateColor() {
        let hue = Number(hueSlider.value); // read the slider value
        // now set the box background to an hsl value
      }

      hueSlider.addEventListener(
        "click" /* what event should we use instead? */,
        updateColor
      );
    </script>
  </body>
</html>
```

A range slider is a relatively new HTML element for easy adjustment of numerical values. Of course it would be great if we could use that to mix some colors.

Technically, a click event on the slider (`hueSlider` in my JavaScript) would work, but maybe our endless list of events in the browser has something better?

There's a list of Events that fire on `input` elements on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement#input_events) - Play with the events to figure out which one would work best.

You could then try to add two additional sliders for saturation and luminance (both going from 0-100%) and add them as well.

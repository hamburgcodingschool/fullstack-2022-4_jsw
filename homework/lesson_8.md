# Lesson 8 - No Homework

If you wan to you can try to do the following things with the note:

- Add a date to each note when saving so that we can later display it in the list
- Add a way (a button next to each note, for example) to delete a note from your list of notes. Use event delegation for that so that you don't have to bind an event listener to each button.

## Quick tipp: Dates and JSON

When JSON.stringify comes across a date it does what it does to all objects that are not simple objects: It calls toString() on it. This returns a date format that, while it is not directly parsed back into a date when doing JSON.parse(), you can easily turn it back into a date by just passing the string into `new Date()`

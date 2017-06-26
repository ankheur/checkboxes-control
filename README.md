# checkboxes-control

This code allows you to easily control the behavior for multiple checkboxes.
A simple exemple is a workshop program where some workshops overlap each other and thus cannot be checked together

To use the code you can just include the app.js in your project and just enter the ID of your checkboxes in the first array.
Each checkbox should have its own array starting with the ID of this checkbox and then the ID of the checkbox it should disable (the incompatible ones).

If a checkbox should disable all the others, you can just enter 'allCheckbox' as the second entry of the array.

You can see a working exemple on the Fiddle : https://jsfiddle.net/j79efheh/

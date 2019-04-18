# WYSIWYG
A WYSIWYG editor without using any third-party library to create a simple post.

The app uses simple exec command function from DOM properties to use the content-editable space.

In order to pass content from the editable element to the server, generally the innerHTML of the editable element,
is loaded into a textarea, which is posted. The makeup of the HTML generated depends on the browser.

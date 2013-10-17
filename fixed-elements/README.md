### Fixed Element

While learning JavaScript I decided to write a function that adds a class to an Object whenever it has a specific offsetY. 
The syntax is simple:

````
fixedElement(element,classToAdd,offsetY)
````

Usage:
Create an HTML element of your choice.

````
<div class="myclass" id="js-myclass">Lorem Ipsum Dolor</div>
````
Add some CSS

````
/* some basic styling */
.myclass {
	background:blue;
	position:relative;
	width:5em;
	height:2em;
}
/* the class that fixes the element */
.myclass--fixed {
	position:fixed;
	top:30px;
	left:30px;
}
````
Now you only have to call the function
````
fixedElement("js-myclass","myclass--fixed",300);
````

The above snippet will fix the class to `top:30px;` and `left:30px` once the page has been scrolled more than 300px.

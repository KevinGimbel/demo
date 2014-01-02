### Image Switcher

A tiny JavaScript that let's you create photosets with a preview image that gets updated when you hover over a thumbnail or click it.

Usage:

````html
    <div class="preview">
        <img src="http://somesource.it/is.jpg">
    </div>
    <div class="thumbnails">
        <img src="http://somesource.it/is2.jpg">
        <img src="http://somesource.it/is3.jpg">
        <img src="http://somesource.it/is3.jpg">
        <img src="http://somesource.it/is5.jpg">
    </div>
````
````javascript
    imageSwitcher({
        previewImage: ".preview > img",
        allImages: ".thumbnails > img",
        event: "click"
    });
````
This will create a click event for all images inside the thumbnails section and it will switch the source of the image inside preview with whatever image gets clicked. 

That's it.
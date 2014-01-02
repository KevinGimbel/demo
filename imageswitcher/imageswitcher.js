function imageSwitcher(options) {
    var options = {
      previewImage: options.previewImage || "[data-js='firstImage']",
      allImages: options.allImages || "img",
      event: options.event || "click"
    }

  var firstImage,
      images,
      switchImage,
      oldSource,
      newSource,
      oldTitle,
      newTitle,
      oldAlt,
      newAlt;
  
  firstImage = document.querySelector(options.previewImage);
  images = document.querySelectorAll(options.allImages);

    oldSource = firstImage.getAttribute("src");
    oldTitle = firstImage.getAttribute("title");
    oldAlt = firstImage.getAttribute("alt");
  
  switchImage = function() {
     var that = this;
    
    newSource = that.getAttribute("src");
    newTitle = that.getAttribute("title");
    newAlt = that.getAttribute("alt");
    
    // setting all the new attributes to the first, large image
    firstImage.setAttribute("src", newSource);
    firstImage.setAttribute("title", newTitle);
    firstImage.setAttribute("alt", newAlt);
    
    // setting the old attributes to the small, now changed preview
    that.setAttribute("src", oldSource);
    that.setAttribute("title", oldTitle);
    that.setAttribute("alt", oldAlt);
    
    // storing the new Attributes as old ones
    oldSource = newSource;
    oldTitle = newTitle;
    oldAlt = newAlt;
  };
  
    // applying the event to all images
  for(var i = 0; i <= images.length; i++) {
    images[i].addEventListener(options.event, switchImage);
  }
};
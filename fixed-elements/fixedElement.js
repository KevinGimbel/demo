var fixedElement = function(element,classToAdd,offsetY){
  var fixedEl = document.querySelector(element);
  document.addEventListener('scroll', function() {
  window.scrollY >= offsetY ? fixedEl.classList.add(classToAdd) :
                             fixedEl.classList.remove(classToAdd);
});  
}
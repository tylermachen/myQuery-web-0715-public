function Library(elString){
  var selectedEl = this.getElement(elString);
  // we use [0] because we want the selected items to be somewhat
  // difficult to access so that users of our library do not use it against our intentions
  // 0 has no special meaning; it is just a property
  // we could have used anything like selectEl or selectedElephant
  this[0] = selectedEl;
}

/* where your prototypical methods go... */
Library.prototype.getElement = function(str){
  if (str[0] === '.') {
    return document.getElementsByClassName(str.substr(1, str.length - 1));
  }
  else if (str[0] === '#') {
    return document.getElementById(str.substr(1, str.length - 1));
  }
  else {
    return document.getElementsByTagName(str);
  }
}

Library.prototype.css = function(thingToChange, newValue){
    var elems = Array.prototype.slice.call(this[0]);
    elems.forEach(function(elem){
      elem.style[thingToChange] = newValue;
    });
}

Library.prototype.remove = function(){
  var elems = Array.prototype.slice.call(this[0]);
  elems.forEach(function(elem){
    elem.remove();
  });
}

Library.prototype.append = function(thingToAdd){
  var elems = Array.prototype.slice.call(this[0]);
  elems.forEach(function(elem){
    elem.innerHTML += thingToAdd;
  });
}

var myQuery = function(elString) {
  return new Library(elString);
}

// how to use this code (don't include it in your file.)
var myQuerySelectedElements = myQuery('div');
myQuerySelectedElements.remove(); // removes selected divs

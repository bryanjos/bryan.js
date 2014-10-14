"use strict"

function brianize(id){
  var element = document.body;
  if(id){
    var element = document.getElementById(id);
  }

  element.innerHTML = element.innerHTML.replace(/bryan/g, 'brian');
}

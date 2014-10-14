"use strict"

function bryanize(id){
  var element = document.body;
  if(id){
    var element = document.getElementById(id);
  }

  element.innerHTML = element.innerHTML.replace(/brian/g, 'bryan');
}
"use strict";

let quiz_data,
  name,
  score = 0;

$(document).ready(function(){


  Flowtime.gotoPage(document.getElementById('page-1'))

  Flowtime.onNavigation(function(e){
    let img = $(e.page).children('img')[0];
    if(img && img.hasAttribute('data-next')){
      setTimeout(function(){
        img.setAttribute("src", './src/images/questions/'+img.getAttribute('data-next')+'.jpg')
      }, 2000);
    }
  })

})
document.addEventListener("DOMContentLoaded", function(){
  var menu = document.querySelectorAll("nav>ul>li");

  for(var i=0; i<menu.length; i++){
    menu[i].addEventListener("mouseover", function(event){

       var headerMenu = this.children[0];
      headerMenu.style.display = "block";
    });

    menu[i].addEventListener("mouseout", function(event){

       var headerMenu = this.children[0];
       headerMenu.style.display = "none";
    });
  }
  });

var coll = document.getElementsByClassName("collapsible");
var i;
var j;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var starman = document.getElementById("starman");

var minimenu = document.getElementsByClassName("mini-menu")[0];
var mobimenu = document.querySelectorAll("[class*='nav-item']")
    //console.log(mobimenu.length);
if (window.innerWidth <= 600) {
    //console.log("Starting with small screen");
}

function setMiniMenu() {
    //console.log("minimenu working");
    //console.log(window.innerWidth);
        minimenu.style.display = "none";
        for (j = 0; j < mobimenu.length; j++) {
            mobimenu[j].style.display = "block";
        };
        starman.style.marginTop = "230px";
        for (i = 0; i < mobimenu.length; i++) {
          mobimenu[i].addEventListener("click", function somehandler() {
            for (j = 0; j < mobimenu.length; j++) {
                if (mobimenu[j].classList.contains("active")) {
                    mobimenu[j].classList.toggle("active");
                    //console.log(mobimenu[j]);
                };
                if (window.innerWidth <= 600) {
                    //console.log("SMALL screen");
                    mobimenu[j].style.display = "block";
                };
            };
            this.classList.toggle("active");
            if (window.innerWidth <= 600) {
                //console.log("SMALL screen");
                starman.style.marginTop = "100px";
                minimenu.style.display = "block";
                for (j = 0; j < mobimenu.length; j++) {
                    mobimenu[j].style.display = "none";
                };
            };
          });
        }
    //console.log("minimenu ending");
}

function showHideMobiMenu() {
    //console.log("SCREEN RESIZES");
    //console.log(window.innerWidth);

    if (window.innerWidth <= 600) {
        minimenu.style.display = "block";
        for (j = 0; j < mobimenu.length; j++) {
            mobimenu[j].style.display = "none";
        };
        //console.log("SMALL screen");

    } else {
        minimenu.style.display = "none";
        for (j = 0; j < mobimenu.length; j++) {
            mobimenu[j].style.display = "flex";
        };
        //console.log("BIG screen");
        starman.style.marginTop = "100px";

    }
    //console.log("SCREEN RESIZE ending");
}

window.addEventListener('resize', showHideMobiMenu);
minimenu.addEventListener("click", setMiniMenu);

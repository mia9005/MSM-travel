var nextName = document.getElementById("next-btn");
var slideContainter = document.getElementsByClassName("slide-container")[0];

var present = 1;
nextName.addEventListener("click", function(){
    if(present ==1) {
        slideContainter.style.transform="translateX(-40vw)";
        present += 1;
    } else if (present == 2){
        slideContainter.style.transform="translateX(-80vw)";
    }
});

var preName = document.getElementById("pre-btn");

preName.addEventListener("click",function(){
    if(present ==2) {
        slideContainter.style.transform="translateX(-80vw)";
        present -= 1;  
    } else if(present ==1) {
        slideContainter.style.transform="translateX(0vw)"; 
    }
});
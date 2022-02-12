var slide = 1;
showSlide(slide)
showPanel();

function showSlide(n){
    var allSlides = document.getElementsByClassName("mySlide");
    if(n > allSlides.length) slide = 1;
    else if(n < 1) slide = allSlides.length;
    for(var i = 0 ; i<allSlides.length ; i++){
        allSlides[i].style.display = "none";
    }
    allSlides[slide - 1].style.display = "block";
}

function plusSlides(n){
    showSlide(slide += n);
    showPanel();
}

function currentSlide(n){
    showSlide(slide = n);
    showPanel();
}

function showPanel(){
    var str = "";
    str += slide;
    str += " / ";
    str += 3;
    document.getElementById("pan").innerText = str ;
}
// document.getElementById("i1").addEventListener("touchstart" , touchStarted , false);
// document.getElementById("i1").addEventListener("touchmove" , moveTouch , false);

// var initialX = null;

// function touchStarted(e){
//     initialX = e.touches[0].clientX;
// }

// function moveTouch(e){
//     if(initialX == null) return;
//     var finalX = e.touches[0].clientX;
//     var diffX = finalX - initialX;
//     if(diffX > 0) plusSlides(-1);
//     else plusSlides(1);
//     initialX = null;
// }

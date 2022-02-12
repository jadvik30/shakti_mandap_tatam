var slide = [1,1,1,1,1,1,1,1];
// showSlide(1 , slide)
// showPanel();
var total = [1,1,1,1,1,1,1,1];
class item{
    constructor(subTitle , idNumber , imgName , totalImage){
        this.subTitle = subTitle;
        this.idNumber = idNumber;
        this.imgName = imgName;
        this.totalImage = totalImage;
    }
}
var allItems = [new item("Entry Gate - 1" , 0 , "entry-gate" , 3) , new item("Entry Gate - 2" , 1 , "entry-gate" , 3) , new item("Entry Gate - 3" , 2 , "entry-gate" , 3)];

changeInnerHtmlOfSubMain();
function changeInnerHtmlOfSubMain(){
    var temp = "";
    var i=0;
    allItems.forEach(element => {
        total[i] = element.totalImage ;
        i++;

        let subTitle = element.subTitle;
        let idNumber = element.idNumber;
        let imgName = element.imgName;
        imgName +="-1.png";
        var temp_str = ""
        temp_str += slide[idNumber];
        temp_str +=" / ";
        temp_str += total[idNumber];
        temp += `
        <div class="item">
            <p class="subTitle">${subTitle}</p>
            <div class="slide" id="i${idNumber}">
                <div class="mySlide fade">
                    <img id="content${idNumber}" src="${imgName}" height="240px" width="100%" alt="">
                </div>
                <div class="panel">
                    <a class="prev" id = "prev${idNumber}" onclick="minusSlides(${idNumber})">&#10094;</a>
                    <div class="numbertext" id="pan${idNumber}">${temp_str}</div>
                    <a class="next" id = "next${idNumber}" onclick="plusSlides(${idNumber})">&#10095;</a>  
                </div>
            </div>
        </div>
        <br>
        <hr>
        <br>
    `
    });

    document.getElementById("subM").innerHTML = temp;
    console.log(document.getElementById("subM"));
}

function showSlide(srNo){
    var str_src = allItems[srNo].imgName;
    str_src += "-";
    str_src += slide[srNo];
    str_src += ".png";

    var str_id = "content";
    str_id += srNo; 
    console.log(str_id);
    document.getElementById(str_id).src = str_src ;

    var panelId = "pan";
    panelId += srNo;

    var temp_str = ""
    temp_str += slide[srNo];
    temp_str +=" / ";
    temp_str += total[srNo];
    document.getElementById(panelId).innerText = temp_str;
}

function plusSlides(srNo){
    slide[srNo]++;
    if(slide[srNo] > total[srNo]) slide[srNo] = 1;
    console.log(slide);
    showSlide(srNo);
}

function minusSlides(srNo){
    slide[srNo]--;
    if(slide[srNo] < 1) slide[srNo] = total[srNo];
    showSlide(srNo);
}

// function showPanel(){
//     var str = "";
//     str += slide;
//     str += " / ";
//     str += 3;
//     document.getElementById("pan").innerText = str ;
// }





















// // document.getElementById("i1").addEventListener("touchstart" , touchStarted , false);
// // document.getElementById("i1").addEventListener("touchmove" , moveTouch , false);

// // var initialX = null;

// // function touchStarted(e){
// //     initialX = e.touches[0].clientX;
// // }

// // function moveTouch(e){
// //     if(initialX == null) return;
// //     var finalX = e.touches[0].clientX;
// //     var diffX = finalX - initialX;
// //     if(diffX > 0) plusSlides(-1);
// //     else plusSlides(1);
// //     initialX = null;
// // }

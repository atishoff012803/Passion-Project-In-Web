let flag = 0;
function control(x){
    flag = flag + x;
    slideshow(flag);
}
slideshow(flag);
function slideshow(num){
    let sld = document.getElementsByClassName("slide");

    if(num == sld.length){
        flag = 0;
        num = 0;
    }
    if(num < 0){
        flag = sld.length - 1;
        num = sld.length - 1;
    }
    for(let y of sld){
        y.style.display = "none";
    }
    sld[num].style.display = "block";
}

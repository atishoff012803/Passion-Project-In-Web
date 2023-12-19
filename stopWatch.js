let h = 0;
let m = 0;
let s = 0;
let c = 0;
let timer = false;
function start(){
    timer = true;
    stopwatch();
}
function stopp(){
    timer = false;
}
function reset(){
    timer = false;
    h = 0, m = 0, s = 0, c = 0;
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}
function stopwatch(){
    if(timer == true){
        c++;
        if(c == 100){
            s++;
            c = 0;
        }
        if(s == 60){
            m++;
            s = 0;
        }
        if(m == 60){
            h++;
            m = 0;
            s = 0;
        }
        let hrs = h;
        let mins = m;
        let secs = s; 
        let counts = c;
        if(h < 10){
            hrs = "0" + hrs;
        }
        if(m < 10){
            mins = "0" + mins;
        }
        if(s < 10){
            secs = "0" + secs;
        }
        if(c < 10){
            counts = "0" + counts;
        }
        document.getElementById("hr").innerHTML = hrs;
        document.getElementById("min").innerHTML = mins;
        document.getElementById("sec").innerHTML = secs;
        document.getElementById("count").innerHTML = counts;
        setTimeout( "stopwatch()",10);
    }
}
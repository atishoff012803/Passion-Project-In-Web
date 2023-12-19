// WINDOW VS DOCUMENT: 38

// window is the main container or we can say the global object and any operations 
// related to entire browser window can be a part of window object.   all the members
// like objects, methods, or properties if they are the part of window object then 
// we don't refer the window object.(window, window.location, do in browser console)
// window has methods, properties and object. ex: setTimeout()or setInterval() 
// are the methods.

// document is the DOM is the child of window object.  where in the DOM we need to refer
// the document. if we want to use the document object, method or properties. 
// where as document is the object of the window and it also has a screen object with properties
// describing the physical display.
// document is just the object of the global object that is window. which deals with the document
// the html elements themselves.

// DOM VS BOM:

// DOM stands for Document Object Model, which deals with the document. the HTML elements
// themsleves, that is document nd all traversal you would do in it, events, etc.
// example: document.body.style.background = "red";

// DOCUMENT OBJECT MODEL(DOM) is an APPLICATION PROGRAMMING INTERFACE(API) for manipulating 
// HTML and XML documents.(add, remove, and modify parts of the document/HTML). when a web page is loaded the browser creates a "Document Object Model" of the page. In DOM tree the DOCUMENT is the root node or Object.

// BOM stands for Browser Object Model, which deals with browser components aside form the
// document, like history, location, navigator, and screen (as well as some others that vary by browser)
// or in simple meaning all the window operations which comes under BOM are performed using
// BOM.

// MORE ABOUT WINDOWS:
// window has methods, propertiies, and object. ex: ex: setTimeout()or setInterval() 
// are the methods. wheer as document is the object or the window and it also has a screen
// object with properties describing the physical display.

// we have seen the methods and object of the global object that is window. but what about the
// properties of the window objects. innerHeight, innerWidth and many more properties of window object

// NAVIGAET THROUGH THE DOM
// 1. in DOM all HRML elements are defined as objects. so it will have both property and method
// The document object represents your web page.
// 2. if you want to access any elements in an HTML page, you always start 
// with accessing the document object.

// WITH THE OBJECT MODEL JAVASCRIPT GETS ALL THE POWER IT NEEDS TO CREATE DYNAMIC HTML:
// 1. JS CAN CHANGE ALL THE HTML ELEMENTS IN THE PAGE
// 2. JS CAN CHANGE ALL THE HTML ATTRIBUTES IN THE PAGE
// 3. JS CAN CHANGE ALL THE CSS STYLE IN THE PAGE
// 4. JS CAN REMOVE EXISTING HTML ELEMENTS AND ATTRIBUTES
// 5. JS CAN ADD NEW HTML ELEMENTS AND ATTRIBUTES
// 6. JS CAN REACT TO ALL EXITING HTML EVENTS IN THE PAGE
// 7. JS CAN CREATE NEW HTM LEVENTS IN THE PAGE
// */
// /*
// in DOM all HTML elements are defined as objects so it will have both property and methods. the document object represents your web page. if you want to access any element in an HTML page you always start with accessing the document object.
// */

// /*SELECT AN ELEMENT BY ID*/
// let oneel = document.getElementById("one");
// console.log(oneel.innerHTML);
// console.log("INPUT VALUE = "+oneel);

// let twoel = document.getElementById("slt");
// console.log(twoel.innerHTML+"Atish");
// twoel.innerHTML = "<h2>ATISH</h2>";
// console.log("value = "+twoel);

// /*SELECT AN ELEMENT BY CLASS*/
// let cslt = document.getElementsByClassName("slct");
// console.log(cslt);
// console.log(cslt.length);
// for(let i = 0; i < cslt.length; i++)
// {
//     cslt[i].innerHTML="result";
// }

// /*SELECT AN ELEMENT BY TAG NAME*/
// let cng = document.getElementsByTagName("h5");
// for(let i = 0; i < cng.length; i++)
// {
//     cng[i].innerHTML="result";
// }

// /*SELECT AN ELEMENT BY QUERY SELECTOR*/
// let qs = document.querySelectorAll("p.intro");
// console.log(qs);
// for(let i = 0; i < cng.length; i++)
// {
//     qs[i].innerHTML="QUERY SELECTOR";
// }

// /*Test*/
// let test1 = document.getElementById("chk");
// let test2 = test1.getElementsByTagName("p");
// for(let i = 0; i < test2.length; i++)
// {
//     test2[i].innerHTML="DIV TO P SELECTION";
// }

// /*TRAVERSING ELEMENTS IN JS*/
// let lst = document.getElementById("li1");
// console.log(lst);
// let prnt = lst.parentElement;
// console.log(prnt);
// prnt.innerHTML = "hello";

// let ust = document.getElementById("ul1");
// console.log(ust);
// let lli = ust.firstElementChild;
// console.log(lli);
// let lli1 = ust.lastElementChild;
// console.log(lli1);
// let lia = ust.children;
// console.log(lia);

// let test3 = document.getElementById("tst1");
// console.log(test3);
// let  test4 = test3.previousElementSibling;
// console.log(test4);
// let test5 = test3.nextElementSibling;
// console.log(test5);

// /*CHANGE HTML(INNERHTML) IN JS FETCH HTML ELEMENT AND CHANGE HTML ELEMENT*/
// let itr = document.getElementById("intro");
// console.log(itr);
// let itr1 = itr.innerHTML;
// console.log(itr1);

// itr.innerHTML = "<h2>This Is A Heading</h2>";

// /*CREATE AND APPEND ELEMENT IN JS*/
// let apd1 = document.getElementById("apnd");

// let apd2 = document.createElement("h2");
// apd2.className = "clsh2 hi";
// apd2.id= "ABC1"

// let apd3 = document.createTextNode("This is heading2"); //using method
// apd2.appendChild(apd3);

// //apd1.appendChild(apd2);

// document.body.appendChild(apd2);

// apd2.textContent = "ATISH KUMAR SAHU"; //using property

// let para1 = document.getElementById("p1");
// console.log(para1.textContent);

// let uls = document.getElementById("ulsl");
// let item = document.createElement("li");
// item.textContent = "New List5";
// uls.appendChild(item);

// /*INSERT BEFORE IN JS*/

// let ulib = document.getElementById("IB");
// let ulib1 = document.createElement("li");
// ulib1.textContent="NEW ATISH";

// let pos = ulib.firstElementChild;
// ulib.insertBefore(ulib1,pos);

// let ns = pos.nextSibling;
// ulib.insertBefore(ulib1,ns);

// let pr = document.body;
// let elm1 = document.createElement("h2");
// elm1.textContent = "Heading2 ATISH";

// let lst1 = document.getElementById("IB");

// pr.insertBefore(elm1,lst1);

// /*REMOVE CHILD ELEMENT IN JS*/
// let ulmn = document.getElementById("menu");
// let eie = ulmn.firstElementChild;
// ulmn.removeChild(eie);

// let eie1 = ulmn.firstElementChild.nextElementSibling;
// ulmn.removeChild(eie1);

// document.body.removeChild(ulmn);

// /*CLONE ELEMENT*/
// let clo = document.getElementById("cln");
// let clo1 = clo.cloneNode(true);
// clo1.id="cln1";
// console.log(clo1);
// let clo2 = clo.cloneNode();
// console.log(clo2);
// document.body.appendChild(clo1);

// /*REPLACE ELEMENT*/
// let mn1 = document.getElementById("mnu");
// let mn2 = document.createElement("li");
// mn2.textContent = "Services";
// let replace = mn1.firstElementChild.nextElementSibling;
// mn1.replaceChild(mn2,replace);

// /*INSERT ADJACENTHTML*/
// let ia1 = document.getElementById("ia");

// let html1 = "<h1>BEFORE BEGIN</H1>";
// ia1.insertAdjacentHTML('beforebegin',html1);

// let html2 = "<h1>AFTER BEGIN</h1>";
// ia1.insertAdjacentHTML('afterbegin',html2);

// let html3 = "<h1>BEFORE END</h1>"
// ia1.insertAdjacentHTML('beforeend',html3);

// let html4 = "<h1>AFTER END</h1>"
// ia1.insertAdjacentHTML('afterend',html4);

// /*CHANGE ATTRIBUTE IN JAVASCRIPT*/

// let btn1 = document.getElementById("btn");
// btn1.setAttribute("name","form1");

// let nm1 = btn1.getAttribute("name");
// console.log(nm1);

// let rva = btn1.removeAttribute("name");

// let ha = btn1.hasAttribute("name");
// console.log(ha);

// /*INLINE STYLE*/
// btn1.style.cssText = "background-color: red; color: white;";//replace the css
// btn1.setAttribute("style","width: 100px; height: 200px");//replace the css
// btn1.style.color = "blue";

// /*GET COMPUTED CSS */ 
// let cc1 = document.getElementById("btncc");
// let cc2 = getComputedStyle(cc1);
// console.log(cc2);
// console.log(cc2.color);

// /*CHANGE CSS CLASSES*/
// let ccc1 = document.getElementById("box");
// console.log(ccc1.className);
// ccc1.className += " dim";
// console.log(ccc1.classList);

// for(let css of ccc1.classList){

//     console.log(css);
// }
// ccc1.classList.add("dim");
// ccc1.classList.remove("dim");
// ccc1.classList.replace("bg","dim");
// let ccc2 = ccc1.classList.contains("bg");
// console.log(ccc2);
// ccc1.classList.toggle("bg"); //if available then take out or if not available then add it.

// /*WIDTH AND HEIGHT OF AN ELEMENT*/ 

// let wh1 = document.getElementById("box");

// let wh2 = wh1.offsetWidth; //with border
// let wh3 = wh1.offsetHeight; //with border
// console.log(`${wh2+" "+wh3}`);

// let wh4 = wh1.clientWidth; //without border
// let wh5 = wh1.clientHeight; //without border
// console.log(`${wh4+" "+wh5}`);

// /*DOCUMENT OBJECT MODEL(DOM) EVENTS*/
// function btnclk()
// {
//     alert("button was clicked.");
// }
// function btnclk1(){
//     alert("YOU CLICKED");
// }
// let btne = document.getElementById("btne1");
// btne.addEventListener('click',btnclk1);
// btne.addEventListener('click', function(){
//     alert("BUTTON WAS ONCLICKED");
// });
// btne.addEventListener('mouseover',function(){
//     console.log("YOU HOVER MOUSE ON THE BUTTON");
// });
// btne.addEventListener('mouseout',function(){
//     console.log("YOU OUT MOUSE ON THE BUTTON");
// });

// /*REMOVE EVENTLISTENER*/
// let btn = document.getElementById("rebtn");
// function remove(){
//     console.log("remove1 action activated.")
// }
// function remove1(){
//     console.log("remove2 action activated.")
// }
// btn.addEventListener('click', remove);
// btn.addEventListener('click', remove1);
// btn.removeEventListener('click', remove1);

// /*PAGE LOAD EVENTS*/
// /*
// DOMContentLoaded: 
// the browser fully loaded HTML and completed building the DOM tree. However, 
// it hsn't loaded external resources like stylesheets and images. in this even, 
// you can start selecting DOM nodes or initialize the interface.
// LOAD:
// the browser fully loaded the HTML and also external resources like 
// images and stylesheets. when you leave the page, the following events are in sequence
// */
// window.addEventListener('DOMContentLoaded',function(){
//     console.log("DOM TREE CREATED.");
// });
// window.addEventListener('load',function(){
//     console.log("FULLY LOADED.");
// });

// /*MOUSE EVENTS IN JS*/
// function ME(){
//     alert("ON CLICK EVENT");
// }

// function ME1(){
//     alert("YOU RIGHT CLICKED FROM MOUSE");
// }

// function ME2(){
//     alert("YOU DOUBLE CLICKED FROM MOUSE");
// }

// function ME3(){
//     alert("YOU ACTIVATED THE MOUSEDOWN EVENT");
// }

// function ME4(){
//     alert("YOU ACTIVATED THE MOUSEUP EVENT");
// }

// function ME5(){
//     alert("YOU ACTIVATED THE MOUSEOVER EVENT");
// }

// function ME6(){
//     alert("YOU ACTIVATED THE MOUSEOUT EVENT");
// }

// /*KEY DOWN EVENT*/
// window.addEventListener('keydown',checkkey);
// function checkkey(kchk1){ //key down means key press and hold
//     console.log(kchk1.key);
// }

// window.addEventListener('keyup',checkkey1);
// function checkkey1(kchk2){ //keyup means after key press and hold
//     console.log(kchk2.key);
// }

// /*SCROLL EVENTS*/
// window.addEventListener('scroll',function(){
//     console.log("WINDOW SCROLLING");
// });

// window.addEventListener('wheel',function(we){
//     if(we.deltaY < 0)
//     {
//         console.log("SCROLLING UP");
//     }
//     else if(we.deltaY > 0){
//         console.log("SCROLLING DOWN");
//     }
// });

// window.addEventListener('scroll',function(){
//     if(window.pageYOffset > 800){
//         this.document.body.style.background = "blue";
//     }
// });

// /*EVENTS ON FORM IN JS*/
// let ip1 = document.getElementById("I1");
// ip1.addEventListener('focus',mfocus);
// ip1.addEventListener('blur',mblur);
// ip1.addEventListener('change', function(){
//     console.log(this.value);
// });
// ip1.addEventListener('input',function(){
//     console.log(this.value);
// })

// function mfocus()
// {
//     ip1.style.background = "yellow";
// }
// function mblur()
// {
//     ip1.style.background = "white";
// }
// /*Even Bubbling & Event Capturing */
// /*
// in the event bubbling model and event starts at the most specific element and then flows upward toward the least specific element(the document or even window.) when you click button the click the button, the click event occurs in the following order.
// button, div with the id container, body, html, document 

// in the event capturing midel an event satrts at the least specific element and flows downward toward the most specific element. when you click the button, the click event occurs in the following order.
// document, html, body, div with id container, button

// Syntax:
// addEventListener(event, function, useCapture);
// the default value is false, which will use the bubbling propagation. when the value is set to true, the event uses the capturing propagation.
// */
// let d = document.getElementById("EB");
// let b = document.getElementById("bt63");
// //if you did not give true in third parameter it means default value is false.default false means bubbling. true means capturing
// b.addEventListener('click', btnclicked); 
// d.addEventListener('click', divclicked);
// document.body.addEventListener('click', bodyclicked);

// function btnclicked(event){
//     console.log("Button Clicked");
//     event.stopPropagation();
//     /*stopPropagation means it will stop the operation of bubbling and capturing of the particular element.*/
// }
// function divclicked(){
//     console.log("Div Clicked");
// }
// function bodyclicked(){
//     console.log("Body Clicked");
// }
// /*Prevent Default */
// let link = document.getElementById("YT");
// link.addEventListener('click', function(e){
//     console.log("Link Clicked!");
//     e.preventDefault();
// });

// let form = document.getElementById("frm64");
// form.addEventListener('submit', function(e){
//     e.preventDefault();
// })
// /*Browser Object Model(BOM)

// the window object represents a window in browser. an object of window is created automatically by the browser.

// all global javascript objects, functions and variables with the var keyword automatically become members of the window objects. 

// global variables are properties of the window object. global functions are methods of the window object.

// if you use let and const it will show you undefined for this concept.
// */
// var ip_1 = "hello";
// console.log(ip_1);
// console.log(window.ip_1);

// function ip_2(){
//     console.log("Hi I am Atish");
// }
// ip_2();
// window.ip_2();

// /*Window */
// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(window.outerHeight);
// console.log(window.outerWidth);

// let wb1 = document.getElementById("wbtn");
// let url = "https://www.google.com/";
// let naem = 'Atish';
// let win1;
// let features = "height = 500, width = 400";
// wb1.addEventListener('click', function(){
//     win1 = window.open(url, naem, features);
// })

// let wb2 = document.getElementById("wbtn1");
// wb2.addEventListener('click', function(){
//     window.open("https://www.yahoo.com", naem, features);
// })

// let wb3 = document.getElementById("wbtn2");
// wb3.addEventListener('click', function(){
//     win1.close();
// })

// /*Time Out & Time Interval */
// let timeout = setTimeout(myfunction, 5000);
// function myfunction(){
//     alert("please subscribe");
// }
// clearTimeout(timeout);

// let timeinterval = setInterval(myfunction1, 3000);
// function myfunction1(){
//     console.log("I Love You");
// }

// let btt1 = document.getElementById("TOTI");
// btt1.addEventListener('click',function(){
//     clearInterval(timeinterval);
// })

// /*Loations Object */
// console.log(location.href);
// console.log(location.pathname);
// console.log(location.protocol);
// console.log(location.port);

// function lof()
// {
//     // window.location = "https://www.google.com";
//     // location.href = "https://www.youtube.com";
//     location.assign("https://microsoft.com");

//     /*above 3 are same things */

//     //location.replace("https://www.google.com"); //no back button
//     location.reload(); //refresh the page.
// }

// /*Navigator Object */
// console.log(navigator.appName);
// console.log(navigator.appVersion);
// console.log(navigator.appCodeName);
// console.log(navigator.cookieEnabled);
// console.log(navigator.userAgent);
// console.log(navigator.platform);
// console.log(navigator.javaEnabled());

// /*Screen Object */
// console.log(screen.width);
// console.log(screen.height);
// console.log(screen.colorDepth);
// console.log(screen.orientation);

function Func() {
    fetch("PSC.json")
        .then((res) => {
        return res.json();
    })
    .then((data) => console.log(data));
}
const sample = require('./PSC.json');
console.log(sample);
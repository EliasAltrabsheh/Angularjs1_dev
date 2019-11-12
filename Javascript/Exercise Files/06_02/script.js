const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let hrPosition = 20;
let minPosition = 100;
let secPosition = 300;


HOURHAND.style.transform = "rotate(" + hrPosition  + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition  + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition  + "deg)";

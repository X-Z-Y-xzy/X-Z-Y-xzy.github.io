var arr = new Array;

arr[0] = "images/p1.png";

arr[1] = "images/p2.png";

arr[2] = "images/p3.png";

arr[3] = "images/p4.png";

var url = new Array;

url[0] = "https://chat18.aichatos.xyz/";

url[1] = "https://www.remove.bg";

url[2] = "https://listen1.github.io/listen1/?ref=niege.xyz";

url[3] = "https://www.bigjpg.com";

var count=0;

function autoPlayer(){

if(arr.length==count){count=0;}

document.getElementById("banner1").src=arr[count];

document.getElementById("link1").href=url[count];

count++;

}

var Timer = setInterval(autoPlayer,5000);

function clearTimer(){

clearInterval(Timer);

}

//鼠标悬停指定播放图片

function showbannerbyid(num){

clearTimer();

var index = parseInt(num);

document.getElementById("banner1").src=arr[index-1];

document.getElementById("link1").href=url[index-1];

count=index;

}

//鼠标离开恢复自动播放

function btnMouseOut(){

Timer = setInterval(autoPlayer,2000);

}
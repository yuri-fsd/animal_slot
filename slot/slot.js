var timer;
var count = 0;
var img;
var i=1;
var number;


function showSlot() {
    img = document.getElementById("img"+String(i));
    img.src = "animals/animal" + ((count+number) % 5 + 1) + ".png";
    count = count + 1;
    if(count == 5) {
        clearInterval(timer);
        new Audio('sound30.mp3').play();
        if (i<3){
            i= i+1;
            count = 0;
            startSlot();
        }
    }
}

function startSlot() {
    document.getElementById("start_button").style.visibility = "hidden";
    number = Math.floor(Math.random()*5)+1;
    timer = setInterval(showSlot,500);
}

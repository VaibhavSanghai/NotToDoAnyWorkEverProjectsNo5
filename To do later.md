var map, toolbox, fence;
var bg = "images/day.jpeg"; 
var tree, treeImg1, treeImg2, treeImg3;  
var timerPlant, energyBar, energyBarImg; 
var sun, sunImg, moon, moonImg, day, dayImg, night, nightImg; 

function preload() {
    fetchTime(); 

    //Tree
    treeImg1 = loadImage("images/seedling.png"); 
    treeImg2 = loadImage("images/pot3.jpeg"); 
    treeImg3 = loadImage("images/finalTree.png"); 

    //Sun
    sunImg1 = loadImage("images/sun1.jpeg"); 
    sunImg2 = loadImage("images/sun2.jpeg"); 
    sunImg3 = loadImage("images/sun3.png"); 

    //Moon
    moonImg = loadImage("images/moon.jpeg"); 

    //Gardener
    planterImg = loadImage("images/gardener.png"); 

    //Waterer
    watererImg = loadImage("images/watering2.jpg"); 
}

async function fetchTime() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json(); 

    var time = responseJSON.datetime;
    var hour = time.slice(11, 13);

    if (hour > 6 && hour < 18) {
        bg = "images/day.jpeg"; 
    } else {
        bg = "images/night.jpeg"; 
    }

    bgImg = loadImage(bg); 
}

function waterPress() {

}

function fertilizerPress() {

}

if (mousePressedOver(waterSupply)) {
        waterPress();
    }

    if (mouesPressedOver(fertilizer)) {
        fertilizerPress();
    }
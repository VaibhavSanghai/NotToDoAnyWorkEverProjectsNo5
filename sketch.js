var bgImg; 
var water, fertilizers;
var planter, planterImg;
var gameState = "start";

function setup() {
    createCanvas(800, 400); 

    //Gardener
    planter = createSprite(100, 350, 10, 10); 
    //planter.addImage("gardener", planterImg); 

    //Facilities
    energyBar = createSprite(85, 20, 50, 10); 
    //toolBox = createSprite(600, 100, 30, 100); 

    //Tree
    tree = createSprite(); 
    //tree.addImage("treeComplete", treeImg1); 

    //Sun
    sun = createSprite(); 
    //sun.addImage("sunLight", sunImg1); 

    //Moon
    moon = createSprite(); 
    //moon.addImage("moonLight", moonImg); 

    //Water
    waterSupply = createSprite(600, 50, 25, 25); 
}

function draw() {
    background("brown"); 

    //Key Down Functions
    if (keyDown(UP_ARROW)) {
        planter.y = planter.y - 2; 
    }

    if (keyDown(DOWN_ARROW)) {
        planter.y = planter.y + 2; 
    }

    if (keyDown(RIGHT_ARROW)) {
        planter.x = planter.x + 2; 
    }

    if (keyDown(LEFT_ARROW)) {
        planter.x = planter.x - 2; 
    }

    

    //Fence Loops
    for (var f = 10; f <= 400; f = f + 30) {
        fence = createSprite(700, f, 20, 22); 
        fence.shapeColor = "black"; 
    }

    for (var w = 30; w <= 400; w = w + 30) {
        fence2 = createSprite(700, w, 20, 16); 
        fence2.shapeColor = "white"; 
    }

    //Texts
    text(mouseX + "," + mouseY, mouseX, mouseY);
    
    //Health
    fill("red"); 
    textSize(15);
    text("Health", 15, 25); 
    
    //Resources
    fill("blue"); 
    textSize(15); 
    text("Resources", 565, 43); 

    if (gameState === "start") {
        text("Welcome", 400, 200);
        q1();
    }
  
    drawSprites(); 
}

function q1() {
    text("1. What is cutting down trees called?", 400, 200); 

    var op1 = createSprite(350, 250, 40, 40);
    var op2 = createSprite(400, 250, 40, 40);
    var op3 = createSprite(450, 250, 40, 40);

    text("Deforestation", 350, 250);
    text("Afforestation", 400, 250); 
    text("Fertilization", 450, 250); 

    if (mousePressedOver(op1)) {
        text("Correct Answer!", 400, 350); 
        
    } else if (mousePressedOver(op2) || mousePressedOver(op3)) { 
        text("Wrong Answer, try again :(", 400, 350); 
    }
}

function q2() {
    text("2. What is the percent of oxygen in the air?", 400, 200); 

    var op1 = createSprite(350, 250, 40, 40); 
    var op2 = createSprite(400, 250, 40, 40); 
    var op3 = createSprite(450, 250, 40, 40); 

    text("21%", 350, 250); 
    text("15%", 400, 250); 
    text("23%", 450, 250); 

    if (mousePressedOver(op1)) {
        text("Correct Answer!", 400, 350); 
        
    } else if (mousePressedOver(op2) || mousePressedOver(op3)) { 
        text("Wrong Answer, try again :(", 400, 350); 
    }
}

function q3() {
    text("3. Even ___% of carbon dioxide can harm our environment.", 400, 200); 

    var op1 = createSprite(350, 250, 40, 40); 
    var op2 = createSprite(400, 250, 40, 40); 
    var op3 = createSprite(450, 250, 40, 40); 

    text(""); 
    text(""); 
    text(""); 

    if (mousePressedOver(op1)) {
        text("Correct Answer!", 400, 350); 
        
    } else if (mousePressedOver(op2) || mousePressedOver(op3)) { 
        text("Wrong Answer, try again :(", 400, 350); 
    }
}

function q4() {
    text("4. Trees take in ________ and give out ________ ________.", 400, 200);

    var op1 = createSprite(350, 250, 40, 40); 
    var op2 = createSprite(400, 250, 40, 40); 
    var op3 = createSprite(450, 250, 40, 40);

    text(""); 
    text(""); 
    text(""); 

    if (mousePressedOver(op1)) {
        text("Correct Answer!", 400, 350); 
        
    } else if (mousePressedOver(op2) || mousePressedOver(op3)) { 
        text("Wrong Answer, try again :(", 400, 350); 
    }
}

function q5() {
    text("5. A tree can give out enough oxygen, in its entire life, that can help __ people survive lifetime.", 400, 200); 
    
    var op1 = createSprite(350, 250, 40, 40); 
    var op2 = createSprite(400, 250, 40, 40); 
    var op3 = createSprite(450, 250, 40, 40); 

    text(""); 
    text(""); 
    text(""); 

    if (mousePressedOver(op1)) {
        text("Correct Answer!", 400, 350); 
        
    } else if (mousePressedOver(op2) || mousePressedOver(op3)) { 
        text("Wrong Answer, try again :(", 400, 350); 
    }
}

function q6() {
    text("6. Which is the plant that can live for hundreds of years?", 400, 200); 

    var op1 = createSprite(350, 250, 40, 40); 
    var op2 = createSprite(400, 250, 40, 40); 
    var op3 = createSprite(450, 250, 40, 40); 

    text("");  
    text(""); 
    text(""); 

    if (mousePressedOver(op1)) {
        text("Correct Answer!", 400, 350); 
        
    } else if (mousePressedOver(op2) || mousePressedOver(op3)) { 
        text("Wrong Answer, try again :(", 400, 350); 
    }
}

function q7() {
    text("7. Which is the only tree that gives out oxygen 24/7?", 400, 200); 

    var op1 = createSprite(350, 250, 40, 40); 
    var op2 = createSprite(400, 250, 40, 40); 
    var op3 = createSprite(450, 250, 40, 40); 

    text(""); 
    text(""); 
    text(""); 

    if (mousePressedOver(op1)) {
        text("Correct Answer!", 400, 350); 
        
    } else if (mousePressedOver(op2) || mousePressedOver(op3)) { 
        text("Wrong Answer, try again :(", 400, 350); 
    }
}

function q8() {
    text("8. Does sitting under a tree's shadow block the UV rays from the sun?", 400, 200); 

    var op1 = createSprite(350, 250, 40, 40); 
    var op2 = createSprite(400, 250, 40, 40); 
    var op3 = createSprite(450, 250, 40, 40); 

    text(""); 
    text(""); 
    text(""); 

    if (mousePressedOver(op1)) {
        text("Correct Answer!", 400, 350); 
        
    } else if (mousePressedOver(op2) || mousePressedOver(op3)) { 
        text("Wrong Answer, try again :(", 400, 350); 
    }
}

function q9() {
    text("9. What happens when there are floods in regions with a lot of trees?", 400, 200); 

    var op1 = createSprite(350, 250, 40, 40);
    var op2 = createSprite(400, 250, 40, 40);
    var op3 = createSprite(450, 250, 40, 40);

    text(""); 
    text(""); 
    text(""); 

    if (mousePressedOver(op1)) {
        text("Correct Answer!", 400, 350); 
        
    } else if (mousePressedOver(op2) || mousePressedOver(op3)) { 
        text("Wrong Answer, try again :(", 400, 350); 
    }
}

function q10() {
    text("10. Trees can help reduce _______.", 400, 200); 

    var op1 = createSprite(350, 250, 40, 40); 
    var op2 = createSprite(400, 250, 40, 40); 
    var op3 = createSprite(450, 250, 40, 40); 

    text(""); 
    text(""); 
    text(""); 

    if (mousePressedOver(op1)) {
        text("Correct Answer!", 400, 350); 
        
    } else if (mousePressedOver(op2) || mousePressedOver(op3)) { 
        text("Wrong Answer, try again :(", 400, 350); 
    }
}

/*
OPTIONS: 
1. a) Deforestation b) Afforestation c) Fertilization 
2. a) 21% b) 15% c) 23%
3. a) 5 b) 2 c) 1
4. a) oxygen, carbon dioxide b) nitrogen, carbon dioxide c) oxygen, nitrogen
5. a) 18 b) 10 c) 12
6. a) Banyan Tree b) Mango Tree c) Peepal Tree
7. a) Peepal Tree b) Apple Tree c) Orange Tree
8. a) Yes b) No c) Either
9. a) Soil erosion b) soil deposition c) soil accummulation
10. a) stress b) love c) angriness

Answers: 
1. Deforestation
2. 21%
3. 1
4. oxygen, carbon dioxide
5. 10
6. Banyan Tree
7. Peepal Tree
8. Yes
9. Soil deposition
10. Stress
*/
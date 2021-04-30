    // create 4 variables block1,block2,block3,block4;
    // create 2 variables ball, edges;
    // create variable music 

    function preload(){
        // load Sound music.mp3 using loadSound (Same way Garvit as u load Images)
    }


    function setup(){
        createCanvas(800,600);

        block1 = createSprite(0,580,360,30);
        block1.shapeColor = "orange";
        
        // create block2 Sprite with positions 295,580,200,30
        // give shapeColor blue to block2
        
        // create block3 Sprite with positions 515,580,200,30
        // give shapeColor red to block3
        
        
        // create block3 Sprite with positions 740,580,220,30
        // give shapeColor green to block4
        
        
        ball = createSprite(random(20,750),100, 40,40);
        // give shapeColor white to ball
        // give velocityX equal to 4 to ball
        // give velocityY equal to 9 to ball

    }

    function draw() {
        background("lightgray");
        edges=createEdgeSprites();// Garvit these edges are created to make a boundary for the jumping box in all the four sides 
        ball.bounceOff(edges); // And this is to make it bounce from all the boundaries

        if(block1.isTouching(ball) && ball.bounceOff(block1)){
            ball.shapeColor = "orange";
            music.play();
        }

        if(block2.isTouching(ball)){
            // change the ball shapeColor to orange
            // for stopping the ball  give velocityX and velocityY to 0
            music.stop();
        }

       // Add the isTouching and bounceOff condition for block3 also in the same way its added for block1

        // Add the isTouching and bounceOff condition for block4 also in the same way its added for block1

        drawSprites();
    }

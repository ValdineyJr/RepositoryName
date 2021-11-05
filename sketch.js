var starImg,bgImg;
var star, starBody;
var fada, imgFada, vozFada;
var rand

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/starImage.png");
	bgImg = loadImage("images/starryNight.jpg");
    imgFada = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    vozFada = loadSound("sound/JoyMusic.mp3");
}

function setup() {
    createCanvas(800, 750);

    vozFada.play();

    fada=createSprite(100, 550);
    fada.addAnimation("asas", imgFada)
    fada.scale=0.2

    rand = Math.round(random(20,600))

    star = createSprite(rand,30);
	star.addImage(starImg);
	star.scale = 0.04;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(rand, 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	Engine.run(engine);
}

function draw() {
    background(bgImg)

    if(keyDown("A")||keyDown("left_arrow")){
        fada.x=fada.x-5
    }
    if(keyDown("D")||keyDown("right_arrow")){
        fada.x=fada.x+5
    }
    if(star.y > 470 && starBody.position.y > 470){
        Matter.Body.setStatic(starBody,true)
    }


    drawSprites();
}

img="";
nosex=0;
nosey=0;
mariox=325;
marioy=325;
gameStatus="";
world_start="";
function preload() {
	img=loadImage('mario05.png');
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	console.log("the sound");
}

function setup() {
	canvas = createCanvas(650,336); 
	canvas.parent('canvas'); 
	instializeInSetup(mario);
	video = createCapture(VIDEO); 
	video.size(800,400); 
	video.parent('game_console');

	poseNet=ml5.poseNet(video,modelloaded);
	poseNet.on('pose',gotPoses);
}

function draw()
    {
	game();
	background("blue");

	if(nosex <300)
	{
		mariox=mariox -1;
	}
	if(nosex <300)
	{
		mariox=mariox + 1;
	}
	if(nosey < 150)
	{
		marioy=marioy - 1;
	}
	image(img,mariox,marioy,40,70);
}

function modelloaded() 
{
	console.log("modelloaded");
}

function gotPoses(result)
{
	if(result.length >0)
	{
		nosex=results[0].pose.nose.x;
		nosey=results[0].pose.nose.y;
		console.log("nosex = "+nosex+" ,nosey ="+nosey);
	}
}

function world_start()
{
	world_start= loadSound("world_start.wav");
	setSprites();
	marioAnimation();
}
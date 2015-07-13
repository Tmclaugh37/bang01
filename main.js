console.log("here");


  var sound=new Audio("laserheavy.wav");
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener("mouseup", mouseUpHandler, false);
document.addEventListener("mousedown", mouseDownHandler, false);
function keyDownHandler(e) {
    if(e.keyCode == 39||e.keyCode == 68) {
        rightPressed = true;
    }
    else if(e.keyCode == 37||e.keyCode == 65) {
        leftPressed = true;
    }
	else if(e.keyCode == 32) {
        space = true;
    }
	else if(e.keyCode == 226) {
        addenemy = false;add1=true;
    }
	else if(e.keyCode == 38||e.keyCode == 87) {
        upPressed=true; 
    }
	else if(e.keyCode==40||e.keyCode == 83){
		downPressed=true;
	}
}
function keyUpHandler(e) {
    if(e.keyCode == 39||e.keyCode == 68) {
        rightPressed = false;
    }
    else if(e.keyCode == 37||e.keyCode == 65) {
        leftPressed = false;
    } else if(e.keyCode == 32) {
        space = false;
    }
	else if(e.keyCode == 226) {
        addenemy = true;
		
    }
	else if(e.keyCode == 38||e.keyCode == 87) {
        upPressed=false; 
    }
	else if(e.keyCode==40||e.keyCode == 83){
		downPressed=false;
	}
}
function moveplayer(){
	if(rightPressed==true){
	ID[5]+=4;
	}if(leftPressed==true){
	ID[5]-=4;
	}
	if(downPressed==true){
	ID[6]+=4;
	}if(upPressed==true){
	ID[6]-=4;
	}
}
function mouseUpHandler(e) {click0();
	if(click==false){
		
click=true;
	}
}
function mouseDownHandler(e) {
	
click=false;add=true;
}
function mouseMoveHandler(e) {

    var relativeX = e.clientX - canvas.offsetLeft;
	var relativeY = e.clientY ;
    if(relativeX > 0 && relativeX < canvas.width) {
        ID[3] = relativeX - ID[2]/2;
		mx=relativeX;
    }
	if(relativeY > 0 && relativeY< canvas.height) {
        ID[4] = relativeY - ID[2]/2;
		my=relativeY;
    }	if(attacking==false){
	var deltaX =relativeX - ID[0];
var deltaY = relativeY - ID[1];

// The resulting direction
angle= (1.6 + (Math.atan2(deltaY, deltaX))) % 360;
}else{
	
	var deltaX =enemys[attackid].x - ID[0]-ID[5];
var deltaY = enemys[attackid].y  - ID[1]-ID[6];

// The resulting direction
angle= (1.6 + (Math.atan2(deltaY, deltaX))) % 360;
	
	
}

}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
	moveplayer();
    drawBack();drawMap();drawBullets();collision1();
	drawPlayer();drawEnemys();drawPointer();drawGame();
	if(click==true&&add==true){addBullet();add=false;}if(addenemy==true&&add1==true){addEnemy();add1=false;}
	 requestAnimationFrame(draw);
}
function click0(){
	for(c=0;c<20;c++){
var x1=enemys[c].x-ID[5];
var y1=enemys[c].y-ID[6];
if(mx>=x1-15&&mx<=x1+15&&my>=y1-15&&my<=y1+15){
sound.play();attacking=true;attackid=c;
}
}}
function collision1(){
for(c=0;c<20;c++){
var x1=enemys[c].x-ID[5];
var y1=enemys[c].y-ID[6];
for(r=0;r<20;r++){
var x2=bullets[r].x;
var y2=bullets[r].y;
if(x2>=x1-15&&x2<=x1+15&&y2>=y1-15&&y2<=y1+15){
enemys[c].life-=1;
if(enemys[c].life<=0&&enemys[c].status==1){enemys[c].status=0;enemys[c].x=-1000;kills++;}
bullets[r].status=0;
}

}
}




}
function addBullet(){

var length = Math.sqrt((enemys[attackid].x -ID[5]- ID[0])*(enemys[attackid].x-ID[5] - ID[0]) + (enemys[attackid].y - ID[1]-ID[6])*(enemys[attackid].y-ID[6]- ID[1])); //calculates the distance between the two points

var speed_X = (enemys[attackid].x -ID[5]- ID[0]) /length * 20;

var speed_Y = (enemys[attackid].y -ID[6]- ID[1]) /length * 20;
for(c=0;c<20;c++){
if(bullets[c].status==0){
bullets[c]= { x: canvas.width/2, y: canvas.height/2, sx: speed_X, sy: speed_Y,ofx:ID[5],ofy:ID[6], life: 0, status: 1 };
c=20;
}}
}

function drawBack() {
    ctx.beginPath();
    ctx.rect(0 , 0 , width, height);
    ctx.fillStyle = "#E3E3E3";
    ctx.fill();
    ctx.closePath();
}

function drawPointer(){
  ctx.beginPath();//outcircle
    ctx.arc(ID[3]+(ID[2]/2) , ID[4]+(ID[2]/2) , 20,50, 90);
    ctx.strokeStyle = "#262626";
    ctx.stroke();
    ctx.closePath();ctx.beginPath();//centerdot
	ctx.arc(ID[3]+(ID[2]/2) , ID[4]+(ID[2]/2) , 3,0, Math.PI*2);
    ctx.fillStyle = "#262626";
    ctx.fill();ctx.closePath();
}

function drawBullets() {
        for(r=0; r<20; r++) {
            if(bullets[r].status == 1) {
                ctx.beginPath();
				bullets[r].x+=bullets[r].sx;
				bullets[r].y+=bullets[r].sy;
                bullets[r].life++;
				ctx.arc(bullets[r].x-(ID[5]-bullets[r].ofx) , bullets[r].y-(ID[6]-bullets[r].ofy) , 3,0, Math.PI*2);
                ctx.fillStyle = "#ED23DC";
                ctx.fill();
                ctx.closePath();
				if(bullets[r].life>160){bullets[r].status=0;}
            }else{bullets[r].x=-10000;}}}





draw();


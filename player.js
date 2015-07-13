
function drawPlayer() {
	
    ctx.beginPath();
    var img=document.getElementById("ship");
 ctx.translate(ID[0],ID[1]);
	 ctx.rotate(angle);
    ctx.drawImage(img,0-(ID[2]/2),0-(ID[2]/2),ID[2],ID[2]);
	ctx.rotate(-angle );
	ctx.translate(-ID[0],-ID[1]);
    ctx.closePath();
	if(attacking==true){
		attacking0();
	}
}
function attacking0(){
	gtime[0]++;
	if(gtime[0]>=30){gtime[0]=0;gtime[1]++;addBullet();}
	if(gtime[1]>=4){
		attacking=false;gtime[1]=0;
	}
	
	
}
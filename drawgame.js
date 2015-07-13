function drawGame(){ ctx.beginPath();
	  ctx.font = "16px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Kills: "+kills+"  X: "+ID[5]+"  Y: "+ID[6], 8, 20);
	ctx.closePath();ctx.beginPath();
	  ctx.rect(width-250 ,20 ,230 , 120);
ctx.fillStyle = "#C2C2C2";
    ctx.fill();
    ctx.closePath();
	ctx.beginPath();
	  ctx.font = "16px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("Kills: "+kills+"  X: "+mx+"  Y: "+my,width-250 ,20 );
	ctx.closePath();
	//healthbar
	ctx.beginPath();
	  ctx.font = "Bold 16px Arial";
    ctx.fillStyle = "#000000";
    ctx.fillText("HEALTH ",width-250+2 ,20+20 );
	ctx.closePath();
	ctx.beginPath();
	  ctx.rect(width-250+85 ,20+7 ,100 , 10);
ctx.fillStyle = "#00FF0D";
    ctx.fill();
    ctx.closePath();
	ctx.beginPath();
	  ctx.rect(width-250+85 ,20+7 ,100 , 10);
  ctx.strokeStyle = "#000000";
    ctx.stroke(); ctx.closePath();
	//healthbar
	ctx.beginPath();
	  ctx.font = "Bold 16px Arial ";
    ctx.fillStyle = "#000000";
    ctx.fillText("SHEILD ",width-250+2 ,20+40 );
	ctx.closePath();
}//map
function drawMap(){
	 ctx.beginPath();
	 for(i=0;i<10;i++){ctx.beginPath();
		   ctx.rect(-width*2-ID[5] , height*4/10*i-ID[6] ,width*4*2 , 10);
ctx.strokeStyle = "#8F8DBF";
    ctx.stroke();
    ctx.closePath();
	 }
	 for(i=0;i<10;i++){ctx.beginPath();
		   ctx.rect(width*4/10*i-ID[5] , -height*2-ID[6] ,10 , height*4*2);
ctx.strokeStyle = "#8F8DBF";
    ctx.stroke();
    ctx.closePath();
	 }
    ctx.rect(-width*2-ID[5] , -height*2-ID[6] ,width*4 , height*4);
ctx.strokeStyle = "#8F8DBF";
    ctx.stroke();
    ctx.closePath();
}//map
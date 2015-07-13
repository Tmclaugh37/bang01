function drawEnemys() {
        for(r=0; r<20; r++) {
            if(enemys[r].status == 1) {
			ctx.beginPath();
			//healthbar
			ctx.rect(enemys[r].x-enemys[r].size/2-ID[5], enemys[r].y-20 -ID[6], enemys[r].life,4);
                ctx.fillStyle = "#00FF1E";
                ctx.fill();
                ctx.closePath();
				ctx.beginPath();
				ctx.rect(enemys[r].x-enemys[r].size/2-ID[5] , enemys[r].y-20-ID[6] , 26,4);
                ctx.strokeStyle = "#262626";
				ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
				//healthbar
				if(enemys[r].sx==0&&Math.random()*300>=298){
	
				var tx=enemys[r].x+Math.random()*(600-300);
				var ty=enemys[r].y+Math.random()*(600-300);
				var length = Math.sqrt((tx - enemys[r].x)*(tx - enemys[r].x) + (ty - enemys[r].y)*(ty- enemys[r].y)); //calculates the distance between the two points
				enemys[r].sx= (tx - enemys[r].x) /length * 3;
				enemys[r].sy= (ty - enemys[r].y) /length * 3;
				enemys[r].tx=tx;
				enemys[r].ty=ty;
				
				
				}
				enemys[r].x+=enemys[r].sx;
				enemys[r].y+=enemys[r].sy;
				if(enemys[r].x>=enemys[r].tx-5&&enemys[r].x<=enemys[r].tx+5&&enemys[r].y>=enemys[r].ty-5&&enemys[r].y<=enemys[r].ty+5){enemys[r].sx=0;enemys[r].sy=0;}
           
				ctx.arc(enemys[r].x-ID[5] , enemys[r].y-ID[6] , enemys[r].size/2,0, Math.PI*2);
                ctx.fillStyle = "#FFB700";
                ctx.fill();
                ctx.closePath();
				if(enemys[r].life>160){enemys[r].status=0;}
            }else{enemys[r].x=-10000;}}}
			
			
			function addEnemy(){

for(c=0;c<20;c++){
if(enemys[c].status==0){
enemys[c]= { x: Math.random()*canvas.width*4-canvas.width/2, y: Math.random()*canvas.height*4-canvas.height/2, sx: 0, sy: 0,tx: 0,ty:0, life: 20,size:20, status: 1 };
c=20;
}}
}
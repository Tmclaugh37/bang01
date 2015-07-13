var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var width=canvas.width;
var height=canvas.height;
var mx=0;
var my=0;
var add=false;var add1=false;var space=false;click=false;addenemy=false;rightPressed=false;leftPressed=false;upPressed=false;downPressed=false;
//          0        1    2 3 4 5 6  7 
var ID=[width/2,height/2,80,0,0,0,0,100];
//          x        y  size  my offy
//                          mx offx  hp
var bullets=[];var enemy=0;
for (c=0;c<20;c++){
bullets[c]= { x: 0, y: 0,sx:0,sy:0,ofx:0,ofy:0,life: 0, status: 0 };
}
var enemys=[];
for (c=0;c<20;c++){
enemys[c]= { x: 0, y: 0,sx:0,sy:0,tx: 0,ty:0,life: 0,size:20, status: 0 };
}
var kills=0;var angle=0;var attack=[];
var gtime2=[0,0,0,0];var gtime=gtime2;var attacking=true;var attackid=0;
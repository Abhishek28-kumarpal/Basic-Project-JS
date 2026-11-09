
function detail() 
{
var itna,pri,quan, sp,dis,netsp;
itna=prompt("Enter the item Name");
pri=parseFloat(prompt("Enter the Price"));
quan=parseFloat(prompt("Enter the quantity"));
sp=pri*quan;
if(quan>10){
    dis=sp*0.12;
   
}
else{
    dis=0;
}
netsp=sp-dis;
document.getElementById("itt").innerHTML+=itna;
document.getElementById("prr").innerHTML+=pri;
document.getElementById("qqq").innerHTML+=quan;
document.getElementById("sel").innerHTML+=sp;
document.getElementById("diss").innerHTML+=dis;
document.getElementById("net").innerHTML+=netsp;

}

var na, po, sal,hra,da,netsal;

na=prompt("Enter the Name");
po=prompt("Enter Designation");
sal= parseFloat(prompt("Enter your salary"));



if (sal<=25000)
{
    hra=sal/100*12;
    da=sal/100*13;
}
else{

    hra=sal/100*7;
    da=sal/100*8;  
}

netsal=sal+hra+da;
document.getElementById("naa").value=na;
document.getElementById("poo").value=po;
document.getElementById("sall").value=sal;
document.getElementById("net").value=netsal;
// document.getElementById("hraa").innerText=hra;
// document.getElementById("daa").innerText=da;
// document.getElementById("net").innerText=netsal;
// document.getElementById("hraa").value=hra;
// document.getElementById("daa").value=da;



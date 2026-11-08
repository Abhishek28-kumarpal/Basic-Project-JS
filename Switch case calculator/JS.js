function swi(){

var we=parseInt(prompt("Enter the value"));

var re;
switch(we)
{
 case 1: re="MONDAY";
 break;
 case 2: re="TUESDAY";
 break;
 case 3: re="WEDNESDAY";
 break;
 case 4: re="THRUSDAY";
 break;
 case 5: re="FRIDAY";
 break;
 case 6: re="SATURDAY";
 break;
 case 7: re="SUNDAY";
 break;
 default: re="INVAllD NUMBER";
}

document.getElementById("wee").value=re
}

function vo(){
    var al=prompt("Enter any alphabet:");
switch(al)
{
case 'a':
case 'e':
		
case 'i':
	
case 'o':
	
case 'u':document.getElementById("wee").value=al+" is Vowel";
	break;
default:document.getElementById("wee").value=al +" is Consonant ";
}
}
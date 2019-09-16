//JS Variables
var carName="Volvo";
var num=50;
var x=5;
var y=10;
document.getElementById("demo").innerHTML=x+y;
var z=x+y;
alert(z);
var firstName="John",lastName="Doe",age=35;

//JS Operators
alert(10*5);
alert(10/2);
alert(15%9);
x=10;
y=5;
x+=y;
x=10;
y=5;
x*=y;

//JS Data Types
var length=16; //number
var lastName="Johnson"; //string
//object
var x={
	firstName: "John",
	lastName: "Doe"
};					

//JS Functions
function myFunction(){
	alert("Hello World");
}
myFunction();

function newFunction(){
	alert("I created my own function");
}
newFunction();

function anotherFunction(){
	return "Hello";
}
document.getElementById("demo").innerHTML=anotherFunction();

function changeHTML(){
	document.getElementById("demo").innerHTML="Hello";
}

changeHTML();

//JS Objects
var person={
	firstName: "John",
	lastName: "Doe",
	age: 50,
	country: "Norway"
};
alert(person.firstName);
alert(person.firstName +" is "+ person.age);

//JS Events
//Exercises are on HTML Page

//JS Strings
var txt="Hello World";
var x=txt.length;
alert(x);

txt="We are \"Vikings\" ";
alert(txt);

var str1="Hello ";
var str2="World!";
alert(str1+str2);

txt="abcdefghijklm"
var pos=txt.indexOf("h");

//JS String Methods
txt="abcdefghijklm"
var pos=txt.indexOf("h");

txt = "I can eat bananas all day";
x=txt.slice(10,17);

txt="Hello World";
txt=txt.replace("Hello","Welcome");

txt="Hello World";
txt=txt.toUpperCase();
txt=txt.toLowerCase();

//JS Arrays
var cars=["Saab","Volvo","BMW"];
x=cars[1];
cars[0]="Ferrari";
alert(cars.length);

//JS Array Methods
var fruits=["Banana","Orange","Apple"]
fruits.pop();
fruits.push("Kiwi");
fruits.splice(1,2);

//JS Array Sort
fruits=["Banana","Orange","Apple","Kiwi"];
fruits.sort();

//JS Dates
var d=new Date();
alert(d);
var year=d.getFullYear();
var month=d.getMonth();
d.setFullYear(2020);

//JS Math
var r=Math.random();
x=Math.max(10,20);
x=Math.round(5.3);
x=Math.sqrt(9);

//JS Comparisons
x=10;
y=5;
alert(x>y);
alert(x==y);
alert(x!=y);
var age=22;
var voteable=(age<18)?"Too young":"Old enough";
alert(voteable);

//JS Conditions
if(x>y){
	alert("x is greater than y");
}

if(x>y){
	alert("x is greater than y");
}
else{
	alert("x is not greater than y");
}

//JS Switch 
var fruit="Apple";
switch(fruit){
	case "Banana":
		alert(fruit);
		break;
	case "Apple":
		alert(fruit);
		break;
	default: 
		alert("No Fruit");
}

//JS For Loops
var i;
for(i=0;i<10;i++){
	console.log(i);
}
console.log("--");
fruits=["Apple","Orange","Banana"];
for(f in fruits){
	console.log(f);
}
console.log("--");
	
//JS While Loops
i=0;
while(i<10){
	console.log(i);
	i++;
}
console.log("--");
i=0;
while(i<10){
	console.log(i);
	i=i+2;
}
console.log("--");
	
//JS Break Loops
for(var j=0;j<10;j++){
	console.log(j);
	if(j==5){
		break;
	}
}
console.log("--");
for(var j=0;j<10;j++){
	console.log(j);
	if(j==5){
		continue;
	}
}
console.log("--");

//JS HTML DOM
document.getElementById("demo").innerHTML="Hello With ID";

document.getElementsByTagName("p")[0].innerHTML="Hello With Tag";

document.getElementsByClassName("test")[0].innerHTML="Hello With Class";

document.getElementById("myImage").src=" ";

document.getElementById("myText").value="World";

document.getElementById("demo").style.color="red";

document.getElementById("demo").style.fontSize="40px";

document.getElementById("demo").style.display="none";
	
document.getElementById("btnDemo").addEventListener("click",myFunction);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	




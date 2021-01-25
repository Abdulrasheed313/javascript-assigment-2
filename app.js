////////CAHPTER 21 TO 25/////////////
/////////Q1///////........

// var a = prompt("Enter your First Name");
// var b =  prompt("Enter your Last Name");
// var fullName = a + b;
// document.write("<h3>"+"congratulations :" + " " + fullName+"</h3>");


///////////Q2////////////


// var a = prompt("Enter your mobile brand");
// var b = prompt("Enter your Mobile Model");
// var c = +prompt("Mobile display Lenght");
// var d = a + b + c;
// document.write("My Favorite Phone IS" + " " + a + " " + b + "<br> " + "Lenght of String is " + " " + c);

////////////////CHANGING CASE////////////////////

//////////Q1/////////////


// var a = prompt("Enter your Name")
//var b = a.toUpperCase();
//document.write("<h3>" + "YOU OUT IS :" + " " + b + "</h3>")


////////////Q2////////////////////

// var a = prompt("Enter you Name")
// var b = a.toLowerCase();
// document.write("<h3>" + "YOU OUT IS :" + " " + b + "</h3>")


/////Strings: measuring length and extracting parts/////

////////////Q1///////////////////

//  var a = prompt("Enter your mobile brand");
//  var b = prompt("Enter your Mobile Model");
//  var c = +prompt("Mobile display Lenght");
//  var d = a + b + c;
//  document.write("<h3>"+ "My Favorite Phone IS" + " " + a + " " + b + "<br> " + "Lenght of String is " + " " + c + "</h3>");


/////////////Q2\\\\\\\\\\\\\\\\\\\\

// var a = prompt("Enter you value");
// var b = a.charAt(a.length-1);
// document.write("<h3>" +"Your last character is : " + " " + b + "</h3>")


///////////////////Strings: finding segments//////////////

///////////////Q1\\\\\\\\\\\\\\\\

// var a ="pakistani";
// var b = a.indexOf("n");
// document.write("String :" + " " + a + "<br>" + "Index of 'n' is :" + " "  + b );

/////////////////Q2/////////////////////

// var a = prompt("Enter your username");

// for(var i = 0;i < a.length ;i++){
//     if(a.charAt(i )=== "@"){
//         alert("characters not Allowed ");
//         break;
//      }
//      else  if(a.charAt(i) === "#"){
//         alert("characters not Allowed ");
//         break;
//      }
//      else  if(a.charAt(i) === "!"){
//         alert("characters not Allowed ");
//         break;
//      }
     
//      else  if(a.charAt(i) === ","){
//         alert("characters not Allowed ");
//         break;
//      }
//      else  if(a.charAt(i) === "."){
//         alert("characters not Allowed ");
//         break;
//      }
//      else  if(a.charAt(i)=== "+"){
//         alert("characters not Allowed ");
//         break;
//      }
//      else  if(a.charAt(i) === "="){
//         alert("characters not Allowed ");
//         break;
//      }
//      }


////////////////Q3//////////////////////

// var str = '"The quick brown fox jumps over the lazy dog"';
// document.write(str.indexOf("the"));


//////Strings: finding a character at a location/////////

////////////Q1////////////////

//  var a = prompt("Enter you value");
//  var b = a.charAt(3);
//  document.write("<h3>" +"Your 3RD character is : " + " " + b + "</h3>")


/////////////Strings: replacing characters..................

///////////Q1/////////


// var a = "Hydrabad";
// document.write(a)
// document.write("<br>")
// var b = a.replace("Hydr","islam")
// document.write(b)

///////////////Q2/////////////////

// var message = '“Ali and Sami are best friends. They play cricket and football together.”;'
// document.write(message)
// var mess2 = message.replace(/and/g , "&");
// document.write("<br>")
// document.write(mess2)


/////////////////Rounding numbers/////////.........

//////////Q1///////////////

// var num = 3.45214;
// document.write("vaule is" + " " + num + "<br>")
// var a = Math.round(3.45214)
// document.write("Math.round"  + " " + a + "<br>")
// var b = Math.floor(3.45214)
// document.write("Math.floor"  + " " + b + "<br>")
// var c = Math.ceil(3.45214)
// document.write("Math.ceil"  + " " + c + "<br>")


//////////Q2////////


//  var num = -2.678;
//  document.write("vaule is" + " " + num + "<br>")
//  var a = Math.round(-2.678)
//  document.write("Math.round"  + " " + a + "<br>")
//  var b = Math.floor(-2.678)
//  document.write("Math.floor"  + " " + b + "<br>")
//  var c = Math.ceil(-2.678)
//  document.write("Math.ceil"  + " " + c + "<br>")


/////////Generating random numbers/////////

///////////Q1//////////

// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// alert('You rolled a ' + diceRoll);


/////////////Q2///////


// var head = 1;
// var tail = 2;

// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if(floor === 0){
//     document.write("0 <br> Random Coin Value: Head")
// } else if(floor === 1)
// {
//     document.write("1 <br> Random Coin Value: Tails")
// }

/////////Q3////////////

// var a = Math.floor (Math.random() * 10 + 1);

// var guess = 7;

// var b = prompt("Enter your Lucky number")

// if (b == guess){
//    alert("congratulations")
// }else if (b > a){
//    guess++;
//    alert("you near ")
// }else{
//    guess++
//    alert("try next time")
// }


///////Converting strings to integers and decimals/////

////////////Q1/////////

// var a = prompt("enter you weight")
// var b = parseInt(a)
// document.write(b)

//Converting strings to numbers, numbers to strings

//////////////Q1////

// var a = '"427"';
// document.write("string" + " " + a + "<br>");
// var num = Number(a);
// document.write("number" + " " + num);

//  var a = 35.65;
//  document.write("string" + " " + a + "<br>");
//  var num = a.toString();
//  document.write("number" + " " + num);



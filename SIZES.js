/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 18;
var shirtLength = 28;
var shirtSleeve = 8;

// your code goes here

if (shirtWidth <= 18 && shirtLength <= 28 && shirtSleeve <= 8.13) {
    console.log("S");
} else if ((shirtWidth <= 20 && shirtWidth >= 19) && (shirtLength <= 22 && shirtLength >=29) && (shirtSleeve <= 8.38 && shirtSleeve >= 8.14 )) {
        console.log("M");
} 

else if ((shirtWidth <= 22 && shirtWidth >= 21) && shirtLength === 30 && (shirtSleeve <= 8.63 && shirtSleeve >= 8.39 )) { 
        console.log("L");

}
else if ((shirtWidth <= 24 && shirtWidth >= 23) && shirtLength === 31 && (shirtSleeve <= 8.88 && shirtSleeve >= 8.64 )) {
    console.log("XL");

}

else if ((shirtWidth <= 26 && shirtWidth >= 25) && (shirtLength <= 33 && shirtLength >=31) && (shirtSleeve <= 9.63 && shirtSleeve >= 8.89 )) {
    console.log("2XL");

    
}
else if (shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13) {
    console.log("3XL");

}

else {
	console.log("N/A");
}

------

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 18;
var shirtLength = 29;
var shirtSleeve = 8.47;

// your code goes here
if((shirtWidth>=18 && shirtWidth<20)  && (shirtLength>=28 && shirtLength<29) &&
(shirtSleeve>=8.13 && shirtSleeve<8.38))
{
    console.log("S");
}
else if((shirtWidth>=20 && shirtWidth<22)  && (shirtLength>=29 && shirtLength<30) &&
(shirtSleeve>=8.38 && shirtSleeve<8.63))
{
    console.log("M");
}
else if((shirtWidth>=22 && shirtWidth<24)  && (shirtLength>=30 && shirtLength<31) &&
(shirtSleeve>=8.63 && shirtSleeve<8.88))
{
    console.log("L");
}
else if((shirtWidth>=24 && shirtWidth<26)  && (shirtLength>=31 && shirtLength<33) &&
(shirtSleeve>=8.88 && shirtSleeve<9.63))
{
    console.log("XL");
}
else if((shirtWidth>=26 && shirtWidth<28)  && (shirtLength>=33 && shirtLength<34) &&
(shirtSleeve>=9.63 && shirtSleeve<10.13))
{
    console.log("2XL");
}
else if(shirtWidth===28  && shirtLength===34 &&
shirtSleeve===10.13)
{
    console.log("3XL");
}
else{
    console.log("N/A");
}

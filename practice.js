var readlineSync = require('readline-sync');

console.log("Hello!");
var name=readlineSync.question('What is your name? ');
console.log("Welcome "+name+"!");
console.log("Lets see how well you know me...");
console.log("Please write the number of the correct option.");

var colour=readlineSync.question('What is my favourite colour?  (1)Black (2)Pink (3)Purple (4)Blue ');
if(colour==4)
{
    console.log("Bravo! Your answer is correct!");
}
else
{
    console.log("Oops! Your answer is wrong.");
}

var dessert=readlineSync.question('What is my favourite Dessert?  (1)Chocolate (2)Icecream (3)Blueberry Cheesecake (4)Cake ');
if(dessert==3)
{
    console.log("Bravo! Your answer is correct!");
}
else
{
    console.log("Oops! Your answer is wrong.");
}

var food=readlineSync.question('What is my favourite food?  (1)Momos (2)Frankie (3)Sandwich (4)Bhel ');
if(food==1)
{
    console.log("Bravo! Your answer is correct!");
}
else
{
    console.log("Oops! Your answer is wrong.");
}

var series=readlineSync.question('What is my favourite series?  (1)Full House (2)Kyle XY (3)Game of Thrones (4)The Vampire Diaries ');
if(series==4)
{
    console.log("Bravo! Your answer is correct!");
}
else
{
    console.log("Oops! Your answer is wrong.");
}

var sport=readlineSync.question('What is my favourite sport?  (1)Badminton (2)Swimming (3)Cricket (4)Football ');
if(colour==4)
{
    console.log("Bravo! Your answer is correct!");
}
else
{
    console.log("Oops! Your answer is wrong.");
}


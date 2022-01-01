var readlineSync = require('readline-sync');
var age = readlineSync.question('what is your age?');
if(age>=18)
{
    console.log("You can vote") 
}
else
{
    console.log("You cannot vote")
}

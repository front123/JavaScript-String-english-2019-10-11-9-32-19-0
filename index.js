// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
name = name.toUpperCase();
console.log("' '" + name + "' '");

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var strs = sentence.split(' ');
var newStr = "";
for(let i=0; i<strs.length; i++){
   newStr += strs[i][0].toUpperCase()+strs[i].substr(1)+' ';
}
console.log(newStr);

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
console.log(money.substr(1));

document.write("<h1> Task 1</h1>");
var studentInfomation = ["Abdul Ahad", "Web Development", '214770'];

for(let i = 0; i < studentInfomation.length; i++) {
    document.write(studentInfomation[i], '<br  />');
}


document.write("<h1> Task 2</h1>");
var studentInfo = {
    sname : "Abdul Ahad",
    courseName : "Web Dev",
    rollNo : 241770,
}
document.write(studentInfo.sname, '<br  />');
document.write(studentInfo.courseName, '<br  />');
document.write(studentInfo.rollNo, '<br  />');


document.write("<h1> Task 3</h1>");
var arrayString = ['apple', 'banana', 'cherry', 'mango', 'orange', 'coconut'];
document.write("<b>Array Strings</b><br  />")
for(let i = 0; i < arrayString.length; i++) {
    document.write(arrayString[i], '<br  />');
}


document.write("<h1> Task 4</h1>");
var arrayInteger = [1, 3, 5, 7, 9, 11, 13, 17, 19, 21, 29, 31, 37];
document.write("<b>Array Number</b><br  />")
for(let i = 0; i < arrayInteger.length; i++) {
    document.write(arrayInteger[i], '<br  />');
}


document.write("<h1> Task 5</h1>");
var arrayBoolean = [false, true, true, false];
document.write("<b>Array Boolean</b><br  />")
for(let i = 0; i < arrayBoolean.length; i++) {
    document.write(arrayBoolean[i], '<br  />');
}


document.write("<h1> Task 6</h1>");
var mixedArray = ["Apple", 9.8, true, undefined, null];
document.write("<b>Mixed Array</b><br  />")
for(let i = 0; i < mixedArray.length; i++) {
    document.write(mixedArray[i], '<br  />');
}


document.write("<h1> Task 7</h1>");
var qualification = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', "M. Phil.", 'PhD'];
document.write("<b>Qualification</b><br  />")
for(let i = 0; i < qualification.length; i++) {
    document.write(i+1,') ', qualification[i], '<br  />');
}


document.write("<h1> Task 8</h1>");
var info = [
    ['Michael', 320],
    ['Jhon', 230],
    ['Tony', 480],
];
for(let i = 0; i < info.length; i++) {
    document.write(`Score of ${info[i][0]} is ${info[i][1]}. Percentage: ${((info[i][1] / 500) * 100).toFixed(2)}<br  />`);
    
}


document.write("<h1> Task 9</h1>");

var colorNames = ['red', 'yellow', 'green', 'blue', 'white'];
document.write("Color array : <b>",colorNames, '</b><br />');

var userInputAddElemntBeginning = 'black';
colorNames.unshift(userInputAddElemntBeginning);
document.write("After user add the color in the Beginning of the array<br  />Updated array : <b>",colorNames, '</b><br />');

var userInputAddElemntEnd = 'orange';
colorNames.push(userInputAddElemntEnd);
document.write("After user add the color in the End of the array<br  />Updated array : <b>",colorNames, '</b><br />');

var addTwoMore = ['gray', 'brown'];
colorNames.unshift(addTwoMore);
document.write("After user add Two more color in the Beginning of the array<br  />Updated array : <b>",colorNames, '</b><br />');

var deleteFirstColor = colorNames.shift();
document.write("After Delete the first color in the array.<br  />Updated array : <b>",colorNames, '</b><br />');

var deleteLastColor = colorNames.pop();
document.write("After Delete the last color in the array.<br  />Updated array : <b>",colorNames, '</b><br />');

colorNames.splice(2,0,"dark gray");
document.write("After add the color to specific position/index.<br  />Updated array : <b>",colorNames, '</b><br />');
function mrRoboger(num) {
  let numString = num.toString().split('');
  let numberArray = [num.toString().split('')];
  let responseArray = [];
  if (numString.trim() === '0') {
    responseArray.push('"0"');
    return responseArray;
  } else if (numberArray.forEach(function(digit) {
    (digit === '3');
    responseArray.push("Won't you be my neighbor?");
    return responseArray;
  }));
}


$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    let num = parseInt($("input#num").val());
    let numString = num.toString();
    let numberArray = [num.toString().split('')];
    result = mrRoboger(numString); 
    console.log(result);
    console.log(numberArray);
    $("#response").html(result);
  });
});
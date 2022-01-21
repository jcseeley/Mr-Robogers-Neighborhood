function mrRoboger(num) {
  let numberArray = num.split('');
  let responseArray = []
  if (numberArray.forEach(function(digit) {
    if (digit === 0);
    responseArray.push('"0"');
    return responseArray;
  }));
}


$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    let num = parseInt($("input#num").val());
    let result = mrRoboger(num); 
    console.log(num);
    console.log(result);
    $("#response").html(result);
  });
});
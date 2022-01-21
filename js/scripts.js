function mrRoboger(digit) {
  ;
}


$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    let num = parseInt($("input#num").val());
    let numberArray = [num.toString().split('')]
    //let result = mrRoboger(num); 
    console.log(numberArray);
    //console.log(result);
    //$("#response").html(result);
  });
});
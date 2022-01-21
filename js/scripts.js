function mrRoboger(num) {
  if (num === 0) {
    return "0";
  } 
}

$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    let num = $("input#num").val();
    let result = mrRoboger(num); 
    console.log(num);
    console.log(result);
    $("#response").html(result);
  });
});
function mrRoboger(num) {
  let responseArray = [];
  let numArray = num.toString().split('');
  numArray.forEach(function(digit) {
    if (numArray.includes('3')) {
    responseArray.push(('"') + ("Won't you be my neighbor?") + ('"'));
  }
});
  return responseArray;
}


$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    let num = $("input#num").val();
    result = mrRoboger(num);
    console.log(num);
    console.log(result);
    $("#response").html(result);
  });
});
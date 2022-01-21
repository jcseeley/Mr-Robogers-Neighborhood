function mrRoboger(num) {
  if (num === 0) {
    return 0;
  }
}
console.log(result);
$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    var num = $("input#num").val();
    let result = mrRoboger(num);
    console.log(num);
    
    $("#response").text(result);
    
  });
});
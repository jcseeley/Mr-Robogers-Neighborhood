function mrRoboger(num) {
  if (num === 0) {
    return 0;
  }
}

$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.PreventDefault();
    const num = $("input#num").val();
    let result = mrRoboger(num).val();
    $("#response").text(result);
  }
}
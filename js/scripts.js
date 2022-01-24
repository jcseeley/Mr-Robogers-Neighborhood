function numberArray(num) {
  let newNumArray = [];
  if (num >= 0) {
    for (let i = 0; i <= num; i++) {
      if (i <= num) {
      newNumArray.push(i.toString());
      } 
    } return newNumArray;
  }
}

function mrRoboger() {
  let responseArray = [];
  stringArray.forEach(function(strNum) {
    if (strNum.includes('3')) {
      responseArray.push(('"') + ("w0n't y0u b3 mY n31gHb0r, ") + userName + ('?"'));
    } else if (strNum.includes('2')) {
      responseArray.push(('"') + ("B00p!") + ('"'));
    } else if (strNum.includes('1')) {
      responseArray.push(('"') + ("B33p!") + ('"'));
    } else if (strNum === '0') {
      responseArray.push('"0"');
    } else {
      responseArray.push(strNum);
    }
  })
  return responseArray.join(", ");
}

$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    userName = $("input#name").val();
    let num = $("input#num").val();
    stringArray = numberArray(num);
    result = mrRoboger();
    $("#response").text(result);
  });
});
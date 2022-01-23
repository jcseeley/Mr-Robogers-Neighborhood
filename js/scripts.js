function mrRoboger(num) {
  let responseArray = [];
  let numArray = num.toString().split('');
  if (num === '0') {
    return '"0"';
  } else if (numArray.includes('3')) {
    let threeFlag = false;
    for (let i = 0; i < numArray.length; i += 1) {
      if (numArray[i] === '3') {
      threeFlag = true;
      responseArray.push((' "') + ("w0n't y0u b3 mY n31gHb0r?") + ('"'));
      break;
      } 
    } return responseArray;
  } else if (numArray.includes('2')) {
    let twoFlag = false;
    for (let i = 0; i < numArray.length; i += 1) {
      if (numArray[i] === '2') {
      twoFlag = true;
      responseArray.push(('"') + ("B00p!") + ('"'));
      break;
      }
    } return responseArray;
  } else if (numArray.includes('1')) {
    let oneFlag = false;
    for (let i = 0; i < numArray.length; i += 1) {
      if (numArray[i] === '1') {
      oneFlag = true;
      responseArray.push(('"') + ("B33p!") + ('"'));
      break;
      }
    } return responseArray;
  } else (num > 3); {
    for (let i = 4; i <= num; i += 1) {
      if (i <= num) {
        responseArray.push((' ') + (i));
      }
    } responseArray.unshift((' "0",') + (' "B33p!",') + (' "B00p!",') + (' "') + ("w0n't y0u b3 mY n31gHb0r?") + ('"'));
    return responseArray.join();
  }
}

$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    let num = $("input#num").val();
    const name = $("input#name").val();
    result = mrRoboger(num);
    $("#name-response").text("n1c3 t0 m33t y0u, " + name + "!")
    $("#response").text(result);
    $("#result-div").show();
  });
});
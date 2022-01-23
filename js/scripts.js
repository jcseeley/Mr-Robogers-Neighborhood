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
      responseArray.push((' "') + ("Won't you be my neighbor?") + ('"'));
      break;
      } 
    } return responseArray;
  } else if (numArray.includes('2')) {
    let twoFlag = false;
    for (let i = 0; i < numArray.length; i += 1) {
      if (numArray[i] === '2') {
      twoFlag = true;
      responseArray.push(('"') + ("Boop!") + ('"'));
      break;
      }
    } return responseArray;
  } else if (numArray.includes('1')) {
    let oneFlag = false;
    for (let i = 0; i < numArray.length; i += 1) {
      if (numArray[i] === '1') {
      oneFlag = true;
      responseArray.push(('"') + ("Beep!") + ('"'));
      break;
      }
    } return responseArray;
  } else (num > 3); {
    for (let i = 4; i <= num; i += 1) {
      if (i <= num) {
        responseArray.push((' ') + (i));
      }
    } responseArray.unshift((' "0",') + (' "Beep!",') + (' "Boop!",') + (' "') + ("Won't you be my neighbor?") + ('"'));
    return responseArray.join();
  }
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
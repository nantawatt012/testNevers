const validatePin = (pin) => {
  let input = pin;
  if (typeof pin != "string") {
    input = pin.toString();
  }
  console.log(input);

  // Check if input is a string of 6 digits
  if (pin.length < 6) {
    console.log("need to be more than 6 char");
    return false;
  }

  // Check if input has no consecutive repeating digits
  if (/(\d)\1{2}/.test(input)) {
    console.log("digit must be repeat more than 2");
    return false;
  }

  // Check if input has no consecutive sequential digits
  if (/123|234|345|456|567|678|789/.test(input)) {
    console.log("no be consecutice sequential digits of 3 digit");
    return false;
  }

  // check if input has repeate digit set more than 2 set
  let prevDigit = null;
  let repeatCount = 0;

  for (let i = 0; i < input.length; i++) {
    const digit = input.charAt(i);
    prevDigit = input.charAt(i + 1);

    if (digit === prevDigit) {
      repeatCount++;

      if (repeatCount > 2) {
        console.log("must not have repeate digit set more that 2 set");
        return false;
      }
    }
  }
  // If all checks pass, return true
  return true;
};

// test
const testNubber = 325486;
console.log(validatePin(testNubber));

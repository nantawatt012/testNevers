const validatePin = (input) => {
  // Check if input is a string of 6 digits
  if (!/^\d{6}$/.test(input)) {
    return false;
  }

  // Check if input has no consecutive repeating digits
  if (/(\d)\1{2}/.test(input)) {
    return false;
  }

  // Check if input has no consecutive sequential digits
  if (/123|234|345|456|567|678|789/.test(input)) {
    return false;
  }

  // Check if input has no repeating digit sets
  const digitCounts = {};
  for (let i = 0; i < input.length; i++) {
    const digit = input.charAt(i);
    digitCounts[digit] = (digitCounts[digit] || 0) + 1;
    if (digitCounts[digit] > 2) {
      return false;
    }
  }

  // If all checks pass, return true
  return true;
};

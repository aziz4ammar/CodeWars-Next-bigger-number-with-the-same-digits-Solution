function nextBigger(n) {
    // Convert the number to an array of digits
    const digits = n.toString().split('').map(Number);
  
    // Find the index of the first digit that is smaller than the digit to its right
    let i = digits.length - 2;
    while (i >= 0 && digits[i] >= digits[i + 1]) {
      i--;
    }
  
    // If there is no such digit, the number cannot be rearranged
    if (i < 0) {
      return -1;
    }
  
    // Find the smallest digit to the right of the i-th digit that is larger than the i-th digit
    let j = digits.length - 1;
    while (j > i && digits[j] <= digits[i]) {
      j--;
    }
  
    // Swap the i-th and j-th digits
    [digits[i], digits[j]] = [digits[j], digits[i]];
  
    // Reverse the digits to the right of the i-th digit
    digits.splice(i + 1, digits.length - i - 1, ...digits.slice(i + 1).reverse());
  
    // Convert the array of digits back to a number
    const result = parseInt(digits.join(''));
  
    // Return the result if it is larger than the original number, otherwise return -1
    return result > n ? result : -1;
  }
  //by aziz ammar 
const add = (numbers) => {
  if (!numbers) return 0;

  const numArray = [];

  for (let i = 0; i < numbers.length; i++) {
    const charCode = numbers.charCodeAt(i);

    if (charCode >= 48 && charCode <= 57) {
      const isPrevCharNegative = numbers[i-1] === '-';
      
      if (isPrevCharNegative) {
        numArray.push(`-${numbers[i]}`);
      } else {
        numArray.push(numbers[i]);
      }
    }
  }

  const numArrayNumbers = numArray.map(i => Number(i));

  const negatives = numArrayNumbers.filter(num => num < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  const total = numArrayNumbers.reduce((sum, num) => sum + num, 0);

  return total
};

export default add;
function getExpression(target) {
  if (target < 1 || !Number.isInteger(target)) {
    return null;
  }

  function findExpression(n) {
    if (n === 1) {
      return "1";
    }

    if (n > 5) {
      const prev = findExpression(n - 5);
      if (prev !== null) {
        return `(${prev} + 5)`;
      }
    }

    if (n % 3 === 0) {
      const prev = findExpression(n / 3);
      if (prev !== null) {
        return `(${prev} * 3)`;
      }
    }

    return null;
  }

  const result = findExpression(target);
  return result;
}

console.log(getExpression(13));

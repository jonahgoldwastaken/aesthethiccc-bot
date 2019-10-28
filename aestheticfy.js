const aesthetic = text => {
  const textArray = text.split("");
  return textArray.reduce((acc = "", curr, i) => {
    if (i === textArray.length - 1) return (acc += curr.toUpperCase());
    return (acc += `${curr.toUpperCase()} `);
  });
};

module.exports = aesthetic;

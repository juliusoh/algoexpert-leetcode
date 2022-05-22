const array1 = [
  {
    description: "Test",
    identifier: "Test identifier",
    priceCent: 1,
    lengthIn: 10,
    widthIn: 5,
    heightIn: 10,
    weightLbs: 3,
    quantity: 2,
  },
  {
    description: "Test-2",
    identifier: "Test identifier",
    priceCent: 1,
    lengthIn: 10,
    widthIn: 5,
    heightIn: 10,
    weightLbs: 4,
    quantity: 3,
  },
];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((previousValue, currentValue) => {
  return previousValue + (currentValue.quantity || 0) * (currentValue.weightLbs || 0)
}, initialValue);

console.log(sumWithInitial);

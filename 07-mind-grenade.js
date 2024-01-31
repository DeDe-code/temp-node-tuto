// if we cover a module's elements in a function we do not need to export it. the only thing what need to we do that to import in the chosen file. we do not forget that importing a module which contains a function it seam to invoke this function.

const num1 = 5;
const num2 = 10;

function addValues() {
  console.log(`the sum is ${num1 + num2}`);
}
addValues();

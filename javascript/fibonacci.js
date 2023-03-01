function fibonacci(num) {

  //Begin array with starter values
  let newArray=[0,1];

  //Start a loop to add previous two index values and assign the value to the current index
  //The loop starts at the 2 index because the array already has values at 0 and 1
  //The loop continues to run until we've hit our target number
  for (let i=2; i<=num; i++)
  {
    newArray[i]=newArray[i-2]+newArray[i-1];
  }
 
  //Return the value of the array at the given number
  return (newArray[num]);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

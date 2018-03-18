// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Ruby: returns an Array;
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]

function towerBuilder(nFloors) {
  let res = [],
      floor = nFloors*2-1;
  
  for(let i=nFloors; i>0; i--){
    let str = "*".repeat(i*2-1),
        padding = (floor-(i*2-1))/2;
      
    str = " ".repeat(padding) + str + " ".repeat(padding);
    
    res.push(str);
  }
  
  return res.reverse();
}
const switcheroo = str => {
 return str
   .replace(/a/g, 'A')
   .replace(/b/g, 'B')
   .replace(/A/g, 'b')
   .replace(/B/g, 'a')
};

// Alternate Solution
//
// function switcheroo(x){
//   return x.replace(/a/gi, '1').replace(/b/gi, 'a').replace(/1/gi, 'b');
// }

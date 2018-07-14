function likes(names) {

 var len = names.length;
 var count = names.length++

   if (len === 0) {
     return 'no one likes this';
   }
   else if (len === 1){
     return names[0] + ' likes this';
   }
   else if (len === 2) {
     return names[0] + ' and ' + names[1] + ' like this';
   }
   else if (len === 3) {
     return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
   }
   else if (len === 4) {
     return names[0] + ', ' + names[1] + ' and ' + '2 others like this';
   }
   else if (len > 4) {
     return names[0] + ', ' + names[1] + ' and ' + (len-2) + ' others like this'
   }
  console.log(names)
}

likes([])// 'no one likes this';
likes(['Peter'])// 'Peter likes this';
likes(['Jacob', 'Alex'])// 'Jacob and Alex like this');
likes(['Alex', 'Jacob', 'Mark', 'Max'])// 'Alex, Jacob and 2 others like this';

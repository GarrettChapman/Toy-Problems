function remove(s,n){
  var arr = s.split(""),
      counter = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === "!"){
      counter++;
      if(arr[i] === '!' && counter <= n){
        arr.splice(i,1);
        i--;
       }
    }
  }
  return arr.join("");
}
remove("Hi!!!" , 100)

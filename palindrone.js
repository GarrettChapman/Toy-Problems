function palindrone(str) {
  var cleanStr = str.match(/[a-z0-9]+/gi);
  var megaStr = cleanStr.join("").toLowerCase();


return megaStr
}



palindrone("Annie, I vote more cars race Rome-to-Vienna")

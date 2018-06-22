// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {

return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}



function maskify(cc) {
  cc = cc.split("");
  for(var i = 0; i < cc.length - 4; i++){
    cc[i] = "#";
}

cc = cc.join("");
return cc
}

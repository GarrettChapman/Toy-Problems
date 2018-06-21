// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {

return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

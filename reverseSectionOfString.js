function solve(st,a,b){
 var arr = st.split("");
console.log(arr)
 var swit = arr.splice(a, b).reverse("").join("");


 return swit;
}

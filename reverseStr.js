function solve(st,a,b){
 var arr = st.split("");
 var swit = arr.splice(a, b).reverse("").join("");


arr.splice(a, 0, swit).join('');
 return arr.join('');
}

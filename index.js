var hoy = new Date();
console.log('Hoy es' + hoy);


let i;

for(i=0; i<5; i++){
    console.log(i);
}

// la acción del operador 
console.log(3 + "a")  //"3a"
console.log(3 + true) //4
console.log(true + 3) //4
console.log(false + 3) //3
console.log(3 + false) //3
console.log(null + 3) //3
console.log(3 + null) //3
console.log(undefined + 3) //NaN
console.log(3 + undefined) //NaN
console.log(null + "a") //"nulla"
console.log(undefined + "a") //"undefined"

//la acción del operador (||)

console.log(3 || true) //3
console.log(true || 3) //true
console.log(false || 3) //3
console.log(3 || false) //3
console.log(null || 3) //3
console.log(3 || null) //3
console.log(undefined || 3) //3
console.log(3 || undefined) //3
console.log(undefined || 3) //3
console.log(undefined || undefined) //"undefined"


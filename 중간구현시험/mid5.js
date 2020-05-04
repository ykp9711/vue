let arr = [];

function callback(a, b) { 
    console.log(a + ", " + b); 
    return a + b; 
  }  


for(let i=0; i<100; i++) {

    arr[i] = Math.floor(Math.random()*100 + 1);

}

let a2 = arr.filter((e) => e % 2 === 0);

console.log(a2);

let sum = a2.reduce(callback);


  



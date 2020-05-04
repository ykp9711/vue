let arr = [];
let sum = 0;

for(let i=0; i<100; i++) {



    arr[i] = Math.floor(Math.random()*100 + 1);



}

for(let i=1; i<=100; i++) {



    if(arr[i] % 2 == 0) {

        sum=sum+arr[i];

    }

}

console.log(sum);
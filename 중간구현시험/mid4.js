function sum(a) {
    let sum = 0;
    for(let i = 0 ;i< 5;i++)
        sum = sum+a[i];
        return sum;
}
function test_sum() {
      let a =[4];
    for(let i = 0; i < 5; i++) {
     a[i] = Math.floor(Math.random()*11);
    }
    console.log(a);
    console.log(sum(a));
}
for(let i = 0 ; i<5;++i)
    test_sum();
function solve (num ){
    num = num.toString();
    let sum=0;

    for(let i =0; i< num.length; i++){
         sum +=  Number (num[i]) ;
    }
    console.log(sum);
}
solve(245678);
solve(97561);
solve(543);
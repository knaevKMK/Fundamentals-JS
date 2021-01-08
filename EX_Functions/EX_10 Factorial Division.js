function main(x,y){

  function  getfactorialSum( n) {
        let factorialSum = n;
        for (let i = n - 1; i > 0; i--) {
            factorialSum *= i;
        }
        return factorialSum;
    }

 let factX= getfactorialSum(x);
 let factY= getfactorialSum(y);

 console.log(`${(factX/factY).toFixed(2)}`);
}
main(5,2);
main(6,2);
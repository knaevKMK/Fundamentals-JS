function solve(num){
    let divisiors=[];
    for (let index = 1; index <= num/2; index++) {
      if (num%index==0){
          divisiors.push(index);
      }
    }

    let sum = divisiors.reduce((a,b)=>a+b);
   console.log(sum==num ? 'We have a perfect number!': 'It\'s not so perfect.' )
}
solve(28);
solve(8);
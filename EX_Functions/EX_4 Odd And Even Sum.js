function main(input){
    input=input.toString();
var odd=0;
var even=0;
function addEven(num){
    even+=num;
}
function addOdd(num){
    odd+=num;
}

for (let index = 0; index < input.length; index++) {
    let element =parseInt(input[index]);
    if(element%2==0){
       addEven(element);
    }else{
        addOdd(element);
    }
}
console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}

main(1000435);
main(3495892137259234);
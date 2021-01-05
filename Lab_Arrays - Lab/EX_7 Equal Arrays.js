function solve (array1, array2){
    let sum=0;
    let diff=[];
    let index=0;

    for (let i=0 ; i< array2.length ; i++){
    
        if (array1[i]===array2[i] ){
                sum+= Number(array1[i]);
        }else{
            diff[index++]= i;
             break;
        }
    }

    let result= diff.length>0
     ? `Arrays are not identical. Found difference at ${diff.toString()} index`
     : `Arrays are identical. Sum: ${sum}`;

     console.log(result);
}


solve(['10','20','30'], ['10','20','30']);
solve(['1','2','3','4','5'], ['1','2','4','4','5']);
solve(['1'], ['10']);
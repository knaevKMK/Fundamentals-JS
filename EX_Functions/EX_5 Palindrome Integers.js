function main(array){
  function  isPalindrom(num){
        num= num.toString();
        let valid=false;
        let countSame=0;
        for (let i = 0; i < num.length; i++) {
            for (let j = num.length - 1 - i; j >= num.length - 1 - i; j--) {
                if (num[i] == num[j]) {
                    countSame++;
                }
            }
        }
        if (countSame == num.length) {
            valid = true;
        }
        return valid;
    }
    
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(isPalindrom(element));
    }
}

main([123,323,421,121]);
function main(num) {
   
        var rowS='';
        for (let index = 0; index < num; index++) {
            rowS = rowS+ num + ' ';
        }
        
    for (let index = 0; index < num; index++) {
       console.log(rowS);
    }
}

main(7);
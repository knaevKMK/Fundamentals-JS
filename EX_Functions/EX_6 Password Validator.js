function solve(pass) {
   
        let valid = true;
        if (pass.length < 6 || pass > 10) {
            console.log(`Password must be between 6 and 10 characters`);
            valid = false;
        }
        let countDigit = 0;
        let digitOrLetter = true;
        for (let index = 0; index < pass.length; index++) {
            let asc = pass.charAt(index);
            if (asc.match('[0-9]')) {
                countDigit++;
            }
            if (!asc.match('[A-Za-z0-9]')) {
                digitOrLetter = false;
            }
        }
        if (!digitOrLetter) {
            console.log(`Password must consist only of letters and digits`);
        }
        if (countDigit<2) {
            console.log(`Password must have at least 2 digits`);
         }
    
    
    if (valid && digitOrLetter) {
        console.log('Password is valid');
    }
}
solve('logIn');
solve('MyPass123');
solve('Pa$s$s');
function solve(array){
   for (let index = 0; index < array.length; index++) {
       const element = array[index];
       if (element<0) {
           delete array[index];
           array.unshift(element);
       }
   }
   array.forEach(element => {
       console.log(element);
   });
}
solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);
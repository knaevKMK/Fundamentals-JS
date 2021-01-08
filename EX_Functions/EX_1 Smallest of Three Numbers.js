function main (x,y,z){
let array= [x,y,z];
    function getSmallest(array){
        return Math.min.apply(null,array);
    }
  
  console.log(getSmallest(array));
}

main(3,4,5);
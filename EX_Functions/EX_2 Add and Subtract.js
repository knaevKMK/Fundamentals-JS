function main (a,b,c){
    function sum (x,y){
        return x+y;
    }
    function subtract(x,y){
        return x-y;
    }

    console.log(subtract(sum(a,b),c));
}
main(23,6,10);
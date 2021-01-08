function main (first,second){
    function getBigger(a,b){
        return Math.max( a.charCodeAt(0),b.charCodeAt(0));
    }
    function getSmaller(a,b){
        return Math.min(a.charCodeAt(0),b.charCodeAt(0));
    }
    let end = getBigger(first,second);
    let start = getSmaller(first,second);
    let result = '';
    for (let index = start+1; index < end; index++) {
      result += String.fromCharCode(index)+' ';        
    }
    console.log(result);
}
main('a','d');
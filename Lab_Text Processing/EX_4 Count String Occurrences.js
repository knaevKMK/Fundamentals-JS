function solve(text,word) {
    let words= text.split(' ');
    let count=0;

    for (let textElement of words) {
        if (textElement==word){
            count++;
        }
    }
    console.log(count);
}
solve("This is a word and it also is a sentence",
    "is"
);
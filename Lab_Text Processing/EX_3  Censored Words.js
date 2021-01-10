function solve(text, word) {
    let replace = '*';
    replace = replace.repeat(word.length);
    while (text.includes(word)) {

        text = (text.replace(word, replace));
    }
    console.log(text);
}

solve("A small sentence with some words", "small");
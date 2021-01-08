function main(num) {
    let count = num / 10;

    if (count == 10) {
        console.log(`100% Complete!`);
        console.log(`[%%%%%%%%%]`);
    } else {
        let pr = '%';
        let dot = '.';
        console.log(`${num}% [${pr.repeat(count)}${dot.repeat(10 - count)}]`);
        console.log(`Still loading...`);
    }
}
main(30);
main(50);
main(100);
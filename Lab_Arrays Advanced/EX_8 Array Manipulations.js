function main(input) {
    let array = input[0].split(' ');

    for (let index = 1; index < input.length; index++) {
        let token = input[index].split(' ');
        switch (token[0]) {
            case 'Add':
                array.push(token[1]);
                break;
            case 'Remove':
                array=array.filter(el=>el!==token[1]);
                break;
            case 'RemoveAt':
                array.splice(token[1], 1);
                break;
            case 'Insert':
                array.splice(token[2], 0, token[1]);
                break;
        }
    }
    console.log(array.join(' '));
}
main(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);
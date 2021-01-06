function solve(input) {
    let result = [];
    for (let index = 0; index < input.length; index++) {
        let element = input[index];
        switch (element) {
            case 'add':
                result.push((index + 1));
                break;
            case 'remove':
                result.pop();
                break;
        }
    }
    let res = '';

    if (result.length === 0) {
        console.log('Empty');
    } else {

        for (const key in result) {
            if (Object.hasOwnProperty.call(result, key)) {
                const element = result[key];
                res = res.concat(element, ' ');
            }
        }
        console.log(`${res}`);
    }
}
solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove']);
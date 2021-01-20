function solve(inoutJson){
    let array=inoutJson.map(element=>JSON.parse(element))
    .sort((a,b) => Object.keys(a).join().localeCompare(Object.keys(b).join()))
   .forEach(word => {
    let term= Object.keys(word).join();
    let value= word[term];
    console.log(`Term: ${term} => Definition: ${value}`);
    });;

}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    );
function solve(array){
    let register=[];

    while(array.length){
        let [heroName, level, items]= array.shift().split(' / ');
        level= Number(level);
        items=items.split(', ');
        items.sort((a,b)=>a.localeCompare(b));
      //  console.log(heroName, level, items);
        register.push(hero={heroName,level, items});
    }
    register
    .sort((a,b)=>a['level']-b['level'])
    .forEach(hero=>
    console.log(`Hero: ${hero['heroName']}\nlevel => ${hero['level']}\nitems => ${hero['items'].join(', ')}`));
}

solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    );
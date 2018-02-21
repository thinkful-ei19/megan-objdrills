const obj={
    foo: true,
    bar: false,
    fum: 32,
    quuz: 'yes',
    spam: 'no'
}

for(let key in obj){
    console.log(`${key} : ${obj[key]}`);
}
const obj = {
    name1: 1,
    name2: 2,
    name3: 3,
    name4: 4,
    name5: 5,
}

const result = Object.entries(obj).reduce((acc, [key, value])=>{
    console.log(acc, key, value);
    acc[key] = value; //acc['name1']: 1
    return acc;
},{});
console.log(result);
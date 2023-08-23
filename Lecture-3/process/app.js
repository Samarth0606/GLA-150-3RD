// console.log(process.argv)


let arr = process.argv;
let ans = arr.slice(2);
console.log(ans);

for(let item of ans){
    console.log(`hello from ${item}`)
}
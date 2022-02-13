// array methods:
let arr = [1,2,3];

// arr.push() // adds an item to the end of array
// arr.unshift() // adds an item to the start of array
// arr.pop() // removes the last item
// arr.shift() // removes the first item
// arr.splice(1,2) // removes the 2nd item till the 3rd

let last_item = arr[(arr.length) -1]
console.log(last_item);

for ( let a of arr){
    console.log(`this is an item: ${a}`);
}
const fs = require('fs')

// fs.readFile('C:/Windows/win.ini', 'utf8', function(err, result){
//     if (err){
//         throw err;
//     }
//     console.log(result);
// })


// const asyncFs = fs.readFileSync('C:/Windows/win.ini', 'utf8');
// console.log(asyncFs);

const fsp = fs.promises;
async function main(){
    const res = await fsp.readFile('C:/Windows/win.ini', 'utf8')
    console.log(res);
}
main()
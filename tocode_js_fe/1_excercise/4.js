// rot13('hello') === 'uryyb'

// rot13('javascript') === 'wninfpevcg'

// rot13('rot13') === 'ebg13'

const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z']
const result = []
Object.freeze(abc)
function rot13(convert){
    for (let i = 0; i < convert.length; i++) {
    result.push(convert[i]);
       result.push(abc[i+ 18]);
    }
console.log(result);
}
rot13('aba')
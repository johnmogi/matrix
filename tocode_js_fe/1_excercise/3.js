let rand = Math.floor(Math.random() * 1)

    let num = parseInt(prompt('enter a number'))
    if (num < rand) {
        console.log(`chosen ${num} is too small... ${rand}`);
    }
    else if (num > rand){
        console.log(`chosen ${num} is too big... ${rand}`);
    }
    else {
        console.log('Bingo');

    }



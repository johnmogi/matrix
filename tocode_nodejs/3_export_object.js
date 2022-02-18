class Item{
    print(){
        console.log('I am original');
    }
}

// module.exports = Item;
module.exports = new Item;

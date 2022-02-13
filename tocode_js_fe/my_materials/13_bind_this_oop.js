const log = document.querySelector("#log")
const increment = document.querySelector("#increment")

class Counter{

    constructor(){
        this.val = 0
    }

    // inc(){ easiest is arrow - but needs to compile - otherwise bind in constructor or prototype...
    inc = () => {

        this.val ++
        log.textContent = this.val
        console.log(this.val);
    }
}
let c = new Counter;

// c.inc()
increment.addEventListener('click', c.inc)
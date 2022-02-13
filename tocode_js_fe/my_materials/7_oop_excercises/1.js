class Textarea{
    constructor(el){
        this.CharAmount = 0;
        el.innerHTML = `
        <textarea name="" class="textControl" cols="30" rows="10"></textarea>
        `
        this.textInput = el.querySelector('.textControl')
        el.querySelector('textarea').addEventListener('input', this.changeInput)
    }

    changeInput(){
        // let currentInput = this.el.innerHTML

    }

}

const el = document.createElement('div');
document.body.appendChild(el)
// const t1 = new Textarea(el);




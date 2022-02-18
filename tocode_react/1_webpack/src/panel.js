class Panel {
    constructor() {
      this.el = document.createElement('ul');
      this.el.classList.add('panel');
      document.body.appendChild(this.el);
    }
  
    write(msg) {
      const li = document.createElement('li');
      li.textContent = msg;
      this.el.appendChild(li);
    }
  }
  
const panel = new Panel();
export default panel;
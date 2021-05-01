const clicked = (self) => {
    let containers = document.querySelectorAll('.school');

    if (self.parentElement.classList.contains('collapsed')) {
        self.parentElement.classList.remove('collapsed'); 
        self.parentElement.classList.remove('commd_background'); 
        console.log(self);
        self.parentElement.style.background = '';
        self.children[1].innerHTML = '+';
    } else {
        self.parentElement.classList.add('collapsed');
        self.parentElement.classList.add('commd_background');
        console.log(self.parentElement)
        self.children[1].innerHTML = '-';
    }

    containers.forEach(ele => {
        if (ele !== self.parentElement) {
            ele.classList.remove('collapsed');
            self.parentElement.classList.remove('commd_background'); 
            ele.children[0].children[1].innerHTML = '+';
        } 
    });
}
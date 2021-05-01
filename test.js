const testHover = (self) => {
    let background = self.parentElement.parentElement.parentElement.parentElement;
    background.style.background = 'url("images/bfa_commd.jpeg")';

    console.log(self.parentElement.parentElement.parentElement.parentElement);
}
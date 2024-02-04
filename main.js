const changeBackgroundColour = document.getElementById('changeBackgroundColour');

function changeBackground() {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}

changeBackgroundColour.addEventListener('click', changeBackground)
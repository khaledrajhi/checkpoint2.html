
const colorBox = document.getElementById('color-box');
const changeColorBtn = document.getElementById('change-color-btn');

changeColorBtn.addEventListener('click', function()
 {let color=getRandomRGBColor()
    document.body.style.backgroundColor = color; 
});

function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`; 

}


let heading = document.getElementById('heading');
let button = document.querySelectorAll('button')[0];
let hex = document.getElementById('hex');

let ar = ['A', 'B', 'C', 'D', 'E', 'F', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let initialHeading  = heading.innerHTML;

button.addEventListener('click', ()=>{
    let hexCode = '#';
    hex.innerHTML = hexCode;
    for(let i=0;i<6;i++){
        let color = ar[Math.floor(Math.random()*ar.length)];
        hexCode += color;
        hex.innerHTML += color;
    }
    document.querySelector('body').style.backgroundColor = hexCode;
    heading.style.color = hexCode;
    button.style.color = hexCode;
})
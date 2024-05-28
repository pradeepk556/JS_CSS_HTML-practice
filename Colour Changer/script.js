const colors = ['seagreen', 'orange', 'brown', 'grey', 'skyblue', 'wheat'];
let bgColor = document.querySelector('body');
let button = document.querySelector('button');
let h1 = document.querySelector('h1');


const changeColor = () =>{
    let color = colors[Math.floor(Math.random() * colors.length)];
    if(color == 'brown'){
        button.style.backgroundColor = "grey";
        h1.style.color = "grey";
    }
    else{
        button.style.backgroundColor = "brown";
        h1.style.color = "brown";
    }
    bgColor.style.backgroundColor = color;
}
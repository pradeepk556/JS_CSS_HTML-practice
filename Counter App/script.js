let ans = document.getElementById('value');

const increment = () =>{
    let num = Number.parseInt(ans.innerHTML);
    num++;
    ans.innerHTML = num;
}

const decrement = () =>{
    let num = Number.parseInt(ans.innerHTML);
    num--;
    ans.innerHTML = num;
}
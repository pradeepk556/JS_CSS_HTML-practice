let url = 'https://kontests.net/api/v1/all';
let result = fetch(url);

let images = [
    './images/1.jfif',
    './images/2.jfif',
    './images/3.jfif',
    './images/4.jfif',
    './images/5.jfif',
    './images/6.jfif',
    './images/7.jfif',
    './images/8.png',
    './images/9.jfif',
    './images/10.jfif',
]
let html = "";
result.then((values) => {
    return values.js
    on();
}).then((contests) => {
    // console.log(contests);
    contests.forEach((element) => {
        html += `<div class="card">
                    <img src=${images[Math.floor(Math.random() * images.length)]} class="img">
                    <h3>${element['name']}</h3>
                    <p>Start Time : ${element['start_time']}</p>
                    <p>End Time   :${element['end_time']}</p>
                    <p>Duration   :${element['duration']}</p>
                    <p>Flatform   :${element['site']}</p>
                    <a href=${element['url']}> Join </a>
                </div>`;
    })
    Contests.innerHTML = html;

});

let search = document.getElementById('search');
search.addEventListener('keyup', ()=>{
    let cards = document.getElementsByClassName('card');
    let searchValue = search.value.toLowerCase();
    Array.from(cards).forEach((element)=>{
        let inText = element.getElementsByTagName('p')[3].innerText.toLowerCase();
        if(inText.includes(searchValue)){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
    })
})

//let url = 'https://cyberboysumanjay.github.io/GaanaAPI/';

//let url = "https://github.com/cyberboysumanjay/JioSaavnAPI";
const api_key = '962e3533b6374098aa13b16c04e26872';
// let url = "https://newsapi.org/v2/everything?q=tesla&from=2023-08-21&sortBy=publishedAt&apiKey"

const url = "https://newsapi.org/v2/everything?q=";

let appendedClass = '';

function fetchNews(searchText){
    let fullUrl = `${url}${searchText}&apiKey=${api_key}`;
    let result = fetch(fullUrl);
    result.then((v) =>{
        return v.json();
    }).then((news) =>{
        let articles = news.articles;
        let html = '';
        articles.forEach(element => {
            if(element.urlToImage){
                html += `
                        <div class="card" onclick="openNews(${element.url.substr(element.url.indexOf('//')+1)})">
                            <img src=${element.urlToImage}>
                            <h3>${element.title}</h3>
                            <p>${element.description}</p>
                        </div>   
                        `
            }
        });
        newsCards.innerHTML = html;
    });
}

function loadNews(searchText){
    if(appendedClass != ''){
        appendedClass.classList().remove('.active');
    }
    appendedClass = document.querySelector(searchText);
    appendedClass.classList.add('.active');
    fetchNews(searchText);
}

function openNews(searchText){
    fetchNews(searchText)
    if(appendedClass != ''){
        appendedClass.classList.remove('.active');
    }
}

let searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', ()=>{
    let search = document.getElementById('search-text');
    let searchText = search.value;
    fetchNews(searchText);
    search.value = '';
})


function openNews(url){
    window.open(`https://${url}`, '_blank');
}
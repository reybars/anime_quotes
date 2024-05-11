

async function getAnime() {
    const response = await fetch('https://animechan.xyz/api/random')
    const data = await response.json();
    let quote = document.getElementById('quote');
    let anime = document.getElementById('anime-name');
    let character = document.getElementById('anime-character');
    quote.innerHTML = data.quote;
    anime.innerHTML = `anime: ${data.anime} - `;
    character.innerHTML = data.character;
    
}

getAnime();

function newQuotes() {
    getAnime();
}
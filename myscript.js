fetchanimequotes();

function newQuotes() {
    fetchanimequotes();
}

async function fetchanimequotes() {
    const headers = new Headers({
      'Authorization': 'NzMyOTQ2OTEyNDExNTE2OTQ4.MTcxNTQzNTUxNg--.38e22df28'
    });
  
    try {
      const response = await fetch('https://waifu.it/api/v4/quote', {
        method: 'GET',
        headers: headers
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();

      let quote = document.getElementById('quote');
      let anime = document.getElementById('anime-name');
      let character = document.getElementById('anime-character');

      quote.innerHTML = data.quote;
      anime.innerHTML = `anime: ${data.anime} `;
      character.innerHTML = ` - ${data.author}`;
      console.log(data);

    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Or handle the error differently
    }
}


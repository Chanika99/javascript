function searchChuckNorrisJokes(event) {
      event.preventDefault();

      const query = document.getElementById("query").value;
      const apiUrl = `https://api.chucknorris.io/jokes/search?query=${query}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          displayJokes(data.result);
        })
        .catch(error => {
          console.error('Error fetching Chuck Norris jokes:', error);
        });
    }

    function displayJokes(jokes) {
      const jokesContainer = document.getElementById("jokes");


      jokesContainer.innerHTML = '';


      jokes.forEach(joke => {
        const article = document.createElement("article");
        const jokeParagraph = document.createElement("p");
        jokeParagraph.textContent = joke.value;
        article.appendChild(jokeParagraph);
        jokesContainer.appendChild(article);
      });
    }
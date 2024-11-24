function fetchChuckNorrisJoke() {
      const apiUrl = 'https://api.chucknorris.io/jokes/random';

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const joke = data.value;
          console.log('Chuck Norris Joke:', joke);
        })
        .catch(error => {
          console.error('Error fetching Chuck Norris joke:', error);
        });
    }

    // Call the function to fetch and display a Chuck Norris joke
    fetchChuckNorrisJoke();
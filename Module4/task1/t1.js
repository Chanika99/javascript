function searchSeries(event) {
      event.preventDefault();

      const query = document.getElementById("query").value;
      const apiUrl = `https://api.tvmaze.com/search/shows?q=${query}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          console.log("Search Results:", data);
          // You can process and display the data as needed
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }
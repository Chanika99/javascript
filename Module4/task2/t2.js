function searchSeries(event) {
      event.preventDefault();

      const query = document.getElementById("query").value;
      const apiUrl = `https://api.tvmaze.com/search/shows?q=${query}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          console.log("Search Results:", data);

          // Example: Display the first show name and summary
          if (data.length > 0) {
            const firstShow = data[0].show;
            console.log("First Show Name:", firstShow.name);
            console.log("Summary:", firstShow.summary);
          } else {
            console.log("No results found.");
          }
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }
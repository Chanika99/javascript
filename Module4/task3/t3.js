function searchSeries(event) {
      event.preventDefault();

      const query = document.getElementById("query").value;
      const apiUrl = `https://api.tvmaze.com/search/shows?q=${query}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {

          document.getElementById("results").innerHTML = '';


          data.forEach(tvShow => {
            const article = document.createElement("article");


            const nameElement = document.createElement("h2");
            nameElement.textContent = tvShow.show.name;
            article.appendChild(nameElement);


            const urlElement = document.createElement("a");
            urlElement.textContent = "Details";
            urlElement.href = tvShow.show.url;
            urlElement.target = "_blank";
            article.appendChild(urlElement);


            const imageElement = document.createElement("img");
            imageElement.src = tvShow.show.image?.medium || 'no-image-available.png';
            imageElement.alt = tvShow.show.name;
            article.appendChild(imageElement);


            const summaryElement = document.createElement("div");
            summaryElement.innerHTML = tvShow.show.summary;
            article.appendChild(summaryElement);


            document.getElementById("results").appendChild(article);
          });
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }
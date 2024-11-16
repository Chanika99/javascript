'use strict';

// When the form is submitted...
const tvForm = document.querySelector('#tv-show')
tvForm.addEventListener('submit', async function(evt) {
    // ... prevent the default action.
    evt.preventDefault();
    // get value of input element
    const query = document.querySelector('input[name=q]').value;
    try {                                               // error handling: try/catch/finally
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);    // starting data download, fetch returns a promise which contains an object of type 'response'
        const tvShows = await response.json();
        for(const tvShow of tvShows)
        // retrieving the data retrieved from the response object using the json() function
        console.log(tvShow.show.name);// log the result to the console
        const html = `<article><h3>${tvShow.show.image.medium}</h3></article>`
        document.querySelector('#target').innerHTML += html;

    } catch (error) {
        console.log(error.message);
    }
});
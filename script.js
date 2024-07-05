let api = "  http://www.omdbapi.com/?&apikey=b2152ab0&t=";
console.log(api);

function searchMovie() {
    let query = document.getElementById("movieName").value;
    console.log(query);
    let search = api + query;
    console.log(search);
    fetch(search).then((data) => {
        return data.json()
    }).then((data) => {
        console.log(data);
        document.getElementById("title").innerText = data.Title;
        document.getElementById("desc").textContent = data.Plot;
        document.getElementById("genre").textContent = data.Genre;
        document.getElementById("actors").textContent = data.Actors;
        document.getElementById("directors").textContent = data.Director;
        document.getElementById("writers").textContent = data.Writer;
        document.getElementById("collection").textContent = data.BoxOffice;
        document.getElementById("awards").textContent = data.Awards;
        document.getElementById("ratings").textContent = data.imdbRating;
        document.getElementById("poster").src = data.Poster;


    });
}
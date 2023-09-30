// replace with your api kehy
const api_url =
  "https://api.nasa.gov/planetary/apod?api_key=your api key";

const copyright = document.getElementById("copyright");
const date = document.getElementById("date");
const explanation = document.getElementById("explanation");
const title = document.getElementById("title");
const apodImage = document.getElementById("apod");

fetch(api_url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    showDynamicContent(data);
  });

function showDynamicContent(apiData) {
   
    apodImage.src = apiData.hdurl;
    
    title.textContent = apiData.title;
    explanation.textContent = apiData.explanation;
    date.textContent = apiData.date;
    copyright.textContent = apiData.copyright;

}

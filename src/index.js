document.addEventListener('DOMContentLoaded', () =>{
    
// Select DOM elements
const apodImage = document.getElementById('apod-image');
const apodTitle = document.getElementById('apod-title');
const apodExplanation = document.getElementById('apod-explanation');
const apodDate = document.getElementById('apod-date');

// Fetch Astronomy Picture of the Day from API
fetch('https://api.nasa.gov/planetary/apod?api_key=neIf881jkrVVBuY8LMMlAKE1DgCukaoc0JS6GZoU')
  .then(response => response.json())
  .then(data => {
    // Set image source, title, explanation and date
    apodImage.src = data.hdurl;
    apodTitle.textContent = data.title;
    apodExplanation.textContent = data.explanation;
    apodDate.textContent = data.date;
  })
  .catch(error => console.error(error));
  
})
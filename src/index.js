document.addEventListener('DOMContentLoaded', () =>{
    
// Select DOM elements
const apodImage = document.getElementById('apod-image');
const apodTitle = document.getElementById('apod-title');
const apodExplanation = document.getElementById('apod-explanation');
const apodDate = document.getElementById('apod-date');
const likeButton = document.getElementById('like-button');
const likeCount = document.getElementById('like-count');

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

  // Add event listener to like button
likeButton.addEventListener('click', () => {
  let count = parseInt(likeCount.textContent);
  count++;
  likeCount.textContent = count;
});

})
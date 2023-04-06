document.addEventListener('DOMContentLoaded', () =>{

    console.log('DOM IS READY')
// Defining characters for the empty and full hearts.
const fullHeart = '<i id="heart2" class="fa-solid fa-heart fa-2xl" style="color: #ff0000;"></i>'
const emptyHeart = '<i id="heart1" class="fa-regular fa-heart fa-2xl" style="color: #ff0000;"></i>'
const baseURL = `https://api.nasa.gov/planetary/apod?api_key=neIf881jkrVVBuY8LMMlAKE1DgCukaoc0JS6GZoU`


fetch(baseURL)
.then(res => res.json())
.then(data => renderData(data))

const upperContainer = document.querySelector('.container')
function renderData(data){
    const finalImg = document.querySelector('#image')
    finalImg.src = `${data.url}`
    finalImg.alt = `${data.title}`

    const finalTitle = document.querySelector('.title')
    finalTitle.innerHTML = `${data.title}`
    const finalDate = document.querySelector('.date')
    finalDate.innerHTML = `${data.date}`
    const finalDescription = document.querySelector('.description')
    finalDescription.innerHTML = `${data.explanation}`

    //upperContainer.appendChild(finalImg)
    
}

})
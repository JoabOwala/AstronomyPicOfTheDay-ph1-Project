document.addEventListener('DOMContentLoaded', () =>{
    
    console.log('DOM IS READY')
// Defining characters for the empty and full hearts.
const fullHeart = '♥'
const emptyHeart = '♡'
const baseURL = `https://api.nasa.gov/planetary/apod?api_key=neIf881jkrVVBuY8LMMlAKE1DgCukaoc0JS6GZoU`
const finalImg = document.querySelector('#image')
const finalTitle = document.querySelector('.title')
const finalDate = document.querySelector('.date')
const finalDescription = document.querySelector('.description')

//retrive data from API
fetch(baseURL)
.then(res => res.json())
.then(data => renderData(data))

function renderData(data){
    finalImg.src = `${data.url}`
    finalImg.alt = `${data.title}`
    finalTitle.innerHTML = `${data.title}`
    finalDate.innerHTML = `${data.date}`
    finalDescription.innerHTML = `${data.explanation}`    
}
const myHeartClick = document.querySelectorAll("#heart")

function heartCallback(e){
    const heartEmoji = e.target

    if(heartEmoji.innerHTML === emptyHeart){
        heartEmoji.innerHTML = fullHeart
    }else{
        heartEmoji.innerHTML = emptyHeart
    }
}

for(const emoji of myHeartClick){
    emoji.addEventListener("click", heartCallback)
  }

})
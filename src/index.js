document.addEventListener('DOMContentLoaded', () =>{
    
// Defining characters for the empty and full hearts.
const fullHeart = '♥'
const emptyHeart = '♡'
const baseURL = `https://api.nasa.gov/planetary/apod?api_key=neIf881jkrVVBuY8LMMlAKE1DgCukaoc0JS6GZoU`
const finalImg = document.querySelector('#image')
const finalTitle = document.querySelector('.title')
const finalDate = document.querySelector('.date')
const finalDescription = document.querySelector('.description')
const sab = document.querySelector('input')
const fom = document.getElementById('comments-form')
const myHeartClick = document.querySelectorAll("#heart")

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

//like emoji
function heartCallback(e){
    e.preventDefault()
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

  //clear button
document.addEventListener('click',clearBut)
  function clearBut(){
    document.querySelector('form').reset()
  }

  //submit button
  sab.addEventListener('click',fomSubmit)

  function fomSubmit(){
    if(fom.comment.value == ""){
      alert("Please enter some text first");
    }else{
      document.comment.submit.submit();
    }
  }

})
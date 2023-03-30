
let isMain = true;

function renderGame(){
  document.body.classList.add("questionTriggeredfun", "fun")
  isMain=false;
  let dice = Math.floor(Math.random()*5+1)
  let contentHtml=''
  switch (dice){
    case 1:
      fetch("https://api.truthordarebot.xyz/v1/truth")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        contentHtml=`
          <h1 id="title">You are assigned to: </h1>
          <h1 class="topic">✌ TRUTH ✌</h1> 
          <h2>Your question is:</h2>
          <p>${data.question}</p> 
          <h3 id="activity">Click to go back to main page</h3>
          `
        document.getElementById("main").innerHTML=contentHtml
      })
      break;
    case 2:
      fetch("https://api.truthordarebot.xyz/api/dare")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        contentHtml=`
          <h1 id="title">You are assigned to </h1>
          <h1 class="topic">😂 DARE 😂</h1>
          <h2>Your question is:</h2>
          <p>${data.question}</p> 
          <h3 id="activity">Click to go back to main page</h3>
          `
        document.getElementById("main").innerHTML=contentHtml
      })
      break;
    case 3:
      fetch("https://api.truthordarebot.xyz/api/wyr")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        contentHtml=`
          <h1 id="title">You are assigned to: </h1>
          <h1 class="topic">👏 WOULD YOU RATHER 👏</h1>
          <h2>Your question is:</h2>
          <p>${data.question} Explain Why.</p> 
          <h3 id="activity">Click to go back to main page</h3>
          `
        document.getElementById("main").innerHTML=contentHtml
      })
      break;
      case 4:
      fetch("https://api.truthordarebot.xyz/api/paranoia")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        contentHtml=`
          <h1 id="title">You are assigned to:</h1>
          <h1 class="topic">🙏 PARANOIA QUESTION 🙏</h1>
          <h2>Your question is:</h2>
          <p>${data.question} Explain Why.</p> 
          <h3 id="activity">Click to go back to main page</h3>
          `
        document.getElementById("main").innerHTML=contentHtml
      })
      break;
      case 5:
      fetch("https://api.truthordarebot.xyz/api/nhie")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        contentHtml=`
          <h1 id="title">Eveyone must join: </h1>
          <h1 class="topic"> 🍾 NEVER HAVE I EVER 🍾</h1>
          <h2>If u ever have done it before , lets' drink </h2>
          <p>${data.question} Explain Why.</p> 
          <h3 id="activity">Click to go back to main page</h3>
          `
        document.getElementById("main").innerHTML=contentHtml
      })
      break;
    
    
  }
}

function renderMain(){
  document.getElementById("main").innerHTML=`
    <h1 id="title">🤖 PARTY GAMES 🤖</h1>
    <img src ="funnyBeer.webp"
    <h3 id="activity">Click the button to play</h4>`
  isMain=true
  document.body.classList.remove("questionTriggered", "fun")
}

document.getElementById("get-activity").addEventListener("click", function(){
  isMain ? renderGame() : renderMain()
  document.getElementById("get-activity").classList.toggle("back")
})

renderMain()
 
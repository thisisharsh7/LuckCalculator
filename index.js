const sendBtn = document.querySelector('#send')
const pannel = document.querySelector('#pannel')
let value=Math.floor((Math.random()*100)+1)
sendBtn.addEventListener('click',myFunction)

function myFunction(){
    pannel.innerHTML = `
          <i class="fas fa-heart"></i>
          <strong>Thank You!</strong>
          <br>
          <strong>You are ${value}% lucky. </strong>
      `
}

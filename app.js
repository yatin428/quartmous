document.addEventListener('DOMContentLoaded',() =>{

  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
  ]

  cardsArray.sort(()=>0.5-Math.random())
  const grid=document.querySelector('.grid')
  var cardsChosen = []
  var cardsChosenId = []
//create your board
function createBoard() {
  for(let i=0;i<cardArray.length;i++)
    var card=document.createElement('img')
    card.setAttribute('src','images/blank.png')
    card.setAttribute('data-id',i)
    card.addEventListener('click',flipcard)
    grid.appendChild(card)
}
}
//check for match
function checkForMatch(){
  var cards=document.querySelector('img')
  const resultDisplay=document.querySelector('#result')
  const optionOneId=cardsChosenId[0]
  const optionTwoId=cardsChosenId[1]
  if(cardsChosen[0]==cardsChosen[1])
  {
    alert('you found a match')
    cards[optionOneId].setAttribute('src','images/white.png')
    cards[optionTwoId].setAttribute('src','images/white.png')
  }else {
    cards[optionOneId].setAttribute('src','images/blank.png')
    cards[optionTwoId].setAttribute('src','images/blank.png')
    alert('Sorry,try again')
  }
  cardsChosen=[]
  cardsChosenId=[]
  resultDisplay.textContent=cardsWon.length
  if(cardsWon.length==cardsArray.length/2){
    result.Display.textContent.'Congratulations.you Won!'
  }
}
fuction flipcard() {
  var cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src',cardArray[cardId].img)
  if(cardsChosen.length==2){
    setTimeout(checkForMatch,500)
  }
}






)
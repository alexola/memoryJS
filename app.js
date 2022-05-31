const cardArray = [
  {
    name: 'fries',
    img:'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img:'images/cheeseburger.png'
  },
  {
    name: 'hotdog',
    img:'images/hotdog.png'
  },
  {
    name: 'icea-cream',
    img:'images/icea-cream.png'
  },
  {
    name: 'milkshake',
    img:'images/milkshake.png'
  },
  {
    name: 'pizza',
    img:'images/pizza.png'
  },
  {
    name: 'fries',
    img:'images/fries.png'
  },
  {
    name: 'cheeseburger',
    img:'images/cheeseburger.png'
  },
  {
    name: 'hotdog',
    img:'images/hotdog.png'
  },
  {
    name: 'ice-cream',
    img:'images/ice-cream.png'
  },
  {
    name: 'milkshake',
    img:'images/milkshake.png'
  },
  {
    name: 'pizza',
    img:'images/pizza.png'
  }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const scoreDisplay = document.querySelector('#score')

let cardsPicked = []
let cardsPickedIds = []
const cardsMatched = []


function createBoard() {
  for(let i = 0; i <cardArray.length; i++){
    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card)
  }
}
createBoard()


function checkMatch() {
  const cards = document.querySelectorAll('#grid img')
  const pickedOneId = cardsPickedIds[0]
  const pickedTwoId = cardsPickedIds[1]

  if (pickedOneId == pickedTwoId) {
    cards[pickedOneId].setAttribute('src', 'images/blank.png')
    cards[pickedTwoId].setAttribute('src', 'images/blank.png')
  }

  if (cardsPicked[0]== cardsPicked[1]){
    alert('You got a match!')
    cards[pickedOneId].setAttribute('src', 'images/white.png')
    cards[pickedTwoId].setAttribute('src', 'images/white.png')
    cards[pickedOneId].removeEventListener('clicked', flipCard)
    cards[pickedTwoId].removeEventListener('clicked', flipCard)
    
    cardsMatched.push(cardsPicked)
  } else {
    cards[pickedOneId].setAttribute('src', 'images/blank.png')
    cards[pickedTwoId].setAttribute('src', 'images/blank.png')
    alert('Sorry try again!')
  }
  
  cardsPicked = []
  cardsPickedIds = []
  scoreDisplay.textContent = cardsMatched.length
  if (cardsMatched.length === cardArray.length/ 2 ) {
    scoreDisplay.textContent ='Congratulations you got them all!'
  }
}


function flipCard() {
  const cardId = this.getAttribute('data-id')
  cardsPicked.push(cardArray[cardId].name)
  cardsPickedIds.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)

  if(cardsPicked.length === 2) {
    setTimeout(checkMatch, 500)
  }

}
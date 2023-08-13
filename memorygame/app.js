const carArray = [
    {
        name: 'catBus',
        img: 'images/catBus.png'
    },
    {
        name: 'chichiayaku',
        img: 'images/chichiyaku.png'
    },
    {
        name: 'haku',
        img: 'images/haku.png'
    },
    {
        name: 'howl',
        img: 'images/howl.png'
    },
    {
        name: 'kiki',
        img: 'images/kiki.png'
    },
    {
        name: 'mononokePrincess',
        img: 'images/mononokePrincess.png'
    },
    {
        name: 'catBus',
        img: 'images/catBus.png'
    },
    {
        name: 'chichiayaku',
        img: 'images/chichiyaku.png'
    },
    {
        name: 'haku',
        img: 'images/haku.png'
    },
    {
        name: 'howl',
        img: 'images/howl.png'
    },
    {
        name: 'kiki',
        img: 'images/kiki.png'
    },
    {
        name: 'mononokePrincess',
        img: 'images/mononokePrincess.png'
    },

]

carArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
const cardsWon = []


function createBoard() {
    for (let i = 0; i < carArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
        


    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]  
    

    console.log(cards)
    console.log('check for match')

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('you have clicked the same image')
    }

    if (cardsChosen[0] === cardsChosen[1]) {
        alert('you found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('sorry, try again')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenId = []

    if (cardsWon.length === carArray.length/2) {
        resultDisplay.textContent= 'Congratulations! you found them all!'
    } 

}


function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(carArray[cardId].name)
    cardsChosenId.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenId)
    this.setAttribute('src', carArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }


}
const inUniverBtn = document.getElementById('in-univer-btn');
const dots = document.querySelector('.dots');
const girl = document.getElementById('girl');
const ratingBtn = document.getElementById('rating');
const modalWindow = document.querySelector('.modal');
const modalOverlay = document.querySelector('.overlay');
const modalCloseBtn = document.querySelector('.close-icon');
let currentDotIndex = 1;

const data = {
    "rating": [
        {
            "id": "123",
            "name": "Владимир",
            "lastName": "Ларионов",
            "img": "./male.png",
            "points": "463"
        },
        {
            "id": "9",
            "name": "Владимир",
            "lastName": "Сергеев",
            "img": "./male.png",
            "points": "521"
        },
        {
            "id": "231",
            "name": "Вениамин",
            "lastName": "Васильев",
            "img": "./male.png",
            "points": "865"
        },
        {
            "id": "321",
            "name": "Мария",
            "lastName": "Логинова",
            "img": "./female.png",
            "points": "865"
        },
        {
            "id": "492",
            "name": "Борис",
            "lastName": "Казанцев",
            "img": "./male.png",
            "points": "784"
        },
        {
            "id": "452",
            "name": "Полина",
            "lastName": "Калинина",
            "img": "./female.png",
            "points": "225"
        },
        {
            "id": "796",
            "name": "Даниил",
            "lastName": "Воробьёв",
            "img": "./male.png",
            "points": "642"
        },
        {
            "id": "4",
            "name": "Эрик",
            "lastName": "Аксёнов",
            "img": "./male.png",
            "points": "150"
        },
        {
            "id": "1155",
            "name": "Иван",
            "lastName": "Иванов",
            "img": "./male.png",
            "points": "100"
        },
        {
            "id": "12145",
            "name": "Артем",
            "lastName": "Алексеев",
            "img": "./male.png",
            "points": "1000"
        }
    ],
    "friends": [
        {
            "id": "9",
            "name": "Владимир",
            "lastName": "Сергеев",
            "img": "./male.png"
        },
        {
            "id": "4",
            "name": "Эрик",
            "lastName": "Аксёнов",
            "img": "./male.png"
        },
        {
            "id": "15411",
            "name": "Ирина",
            "lastName": "Чеснокова",
            "img": "./female.png"
        },
        {
            "id": "15564",
            "name": "Дарина",
            "lastName": "Боброва",
            "img": "./female.png"
        }
    ]
}

inUniverBtn.addEventListener('click', () => {
    if (dots.length === 0) return;


    const currentDot = dots.children[currentDotIndex];
    const dotRect = currentDot.getBoundingClientRect();
    girl.style.left = `${dotRect.left}px`;
    girl.style.top = `${dotRect.top - 60}px`;
    currentDotIndex++;
});

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const frendsNav = document.querySelector('.frends-nav');
const frendCards = Array.from(frendsNav.children);

let currentIndex = 0;

function updateDisplay() {
    frendsNav.innerHTML = '';
    for (let i = 0; i < frendCards.length; i++) {
        const index = (currentIndex + i) % frendCards.length;
        frendsNav.appendChild(frendCards[index].cloneNode(true));
    }
    const emptyCell = document.createElement('button');
    emptyCell.className = 'frend-card empty';
    frendsNav.appendChild(emptyCell);
}

leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + frendCards.length) % frendCards.length;
    updateDisplay();
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % frendCards.length;
    updateDisplay();
});
updateDisplay();



const ratingList = document.querySelector('.rating-list');

function populateRatingList(data) {
    ratingList.innerHTML = '';
    const sortedRating = data.rating.sort((a, b) => b.points - a.points);

    sortedRating.forEach((person, index) => {
        const card = document.createElement('div');
        card.className = 'frieng-bg';

        const isFriend = data.friends.some(friend => friend.id === person.id);
        if (isFriend) {
            card.classList.add('friend');
        }
        card.innerHTML = `
            <p>${index + 1}</p> 
            <img class="rating__avatar" src="${person.img}" alt="${person.lastName}">
            <strong>${person.name} ${person.lastName}</strong>
            <p>${person.points}</p>
        `;
        ratingList.appendChild(card);
    });
}

populateRatingList(data);


ratingBtn.addEventListener('click', () => {
    modalWindow.classList.add('show');
    setTimeout( () =>
        modalOverlay.classList.add('show'), 500
    )

});

modalCloseBtn.addEventListener('click', () => {
    modalWindow.classList.remove('show');
    modalOverlay.classList.remove('show');
});

modalOverlay.addEventListener('click', () => {
    modalWindow.classList.remove('show');
    modalOverlay.classList.remove('show');
});
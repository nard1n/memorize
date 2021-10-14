const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
const playerLives = 6;

playerLivesCount.textContent = playerLives;

const getData = () => [
    { imgSrc: './images/amongus1.jpeg', id: 1, name: "img1" },
    { imgSrc: './images/amongus0.jpeg', id: 2, name: "img0" },
    { imgSrc: './images/amongus2.jpeg', id: 3, name: "img2" },
    { imgSrc: './images/amongus3.jpeg', id: 4, name: "img3" },
    { imgSrc: './images/amongus4.jpeg', id: 5, name: "img4" },
    { imgSrc: './images/amongus5.jpeg', id: 6, name: "img5" },
    { imgSrc: './images/amongus7.jpeg', id: 7, name: "img7" },
    { imgSrc: './images/amongus8.jpeg', id: 8, name: "img8" },
    { imgSrc: './images/amongus1.jpeg', id: 9, name: "img1" },
    { imgSrc: './images/amongus0.jpeg', id: 10, name: "img0" },
    { imgSrc: './images/amongus2.jpeg', id: 11, name: "img2" },
    { imgSrc: './images/amongus3.jpeg', id: 12, name: "img3" },
    { imgSrc: './images/amongus4.jpeg', id: 13, name: "img4" },
    { imgSrc: './images/amongus5.jpeg', id: 14, name: "img5" },
    { imgSrc: './images/amongus7.jpeg', id: 15, name: "img7" },
    { imgSrc: './images/amongus8.jpeg', id: 16, name: "img8" },   
];

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5)
    return cardData;
}

const cardGenerator = () => {
    const cardData = randomize();

    cardData.forEach( item => {
        
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');

        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';

        //attach info to card
        face.src=item.imgSrc;

        //attach cards to section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle("toggleCard");
        })
    })

    
}

cardGenerator();

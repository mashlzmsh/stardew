const character = localStorage.getItem("characterResult");

const characterCards = {
    Harvey: {
        img: "harvey.jpg",
        desc: "Ты ответственный и добрый интроверт, который ценит стабильность и знания. У тебя есть все шансы стать академическим наставником для других."
    },
    Abigail: {
        img: "abigail.jpg",
        desc: "Ты авантюрная, независимая и необычная личность, обожаешь всё загадочное и идешь своим путём. Твои навыки и креативность точно пригодятся в студорганизациях."
    },
    Sebastian: {
        img: "sebastian.jpg",
        desc: "Ты загадочная и 'не такая как все', но по-своему гениальная личность. Осталось найти единомышленников и замутить совместный бизнес."
    },
    Emily: {
        img: "emily.jpg",
        desc: "Ты духовная, творческая и открытая личность, которая видит магию в обычных вещах. Твой секрет успеха харизма и вдохновение."
    },
    Lewis: {
        img: "lewis.jpg",
        desc: "Ты прирожденный лидер и организатор, который ценит порядок и традиции. Почему ты ещё не староста?"
    },
    Morris: {
        img: "morris.jpg",
        desc: "Ты амбициозный прагматик и карьерист, который нацелен на результат. Инвестируй и формируй крутое резюме уже сейчас!."
    },
};

const resultData = characterCards[character];

document.getElementById("result-container").innerHTML = `
    <h1>${character}</h1>
    <img src="${resultData.img}" alt="${character}">
    <p id="desc"></p>
    <a href="quiz.html">Пройти снова</a>
`;
const text = resultData.desc;
const descElement = document.getElementById("desc");
let index = 0;

function typeWriter() {
    if (index < text.length) {
        descElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}
typeWriter();
document.getElementById("result-container").classList.add("result-container");

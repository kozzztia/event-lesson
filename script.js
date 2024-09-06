// Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.
// Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.
// Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість змінювати розмір блоку, якщо затиснути мишку в правому нижньому кутку і тягнути її далі.


function render(element) {
    document.body.innerHTML = "";
    document.body.appendChild(element);
    if (element.tagName === "TEXTAREA") {
        element.focus();
    }
}

function createElement(tag) {
    return document.createElement(tag);
}

function createDiv(text) {
    const div = createElement('div');
    div.classList.add("content");
    div.innerText = text;
    return div;
}

function createTextarea(text) {
    const textarea = createElement('textarea');
    textarea.classList.add("content");
    textarea.value = text;
    textarea.focus();
    return textarea;
}

let currentText = "";

document.body.appendChild(createDiv(currentText));

document.body.addEventListener('keydown', (event) => {
    let content;

    if (event.ctrlKey) {
        if (event.ctrlKey && event.code === 'KeyS') {
            event.preventDefault();

            const textarea = document.querySelector('textarea');
            currentText = textarea.value;
            content = createDiv(currentText);
            render(content);
        } else if (event.ctrlKey && event.code === 'KeyE') {
            event.preventDefault();
            const div = document.querySelector('div');
            currentText = div.innerText;
            content = createTextarea(currentText);
            render(content);
        }
    }
});


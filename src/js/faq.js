const faq = () =>{
    const faqArr = [
        {
            question: 'Как проходят занятия?',
            answer:'Онлайн-занятия проходят на специализированных интерактивных досках.\n' +
                'Для своих учеников я составляю индивидуальный план занятий на год, где можно будет отслеживать, какие темы мы проходим.\n' +
                'Кроме того, я провожу регулярные тестирования, все результаты которых будут отображаться в индивидуальном плане.\n' +
                'В конце каждого месяца я буду отправлять вам отчёт о проделанной за месяц работе и результатах промежуточных тестов.'
        },
        {
            question: 'Что за договор?',
            answer:'Для официального оформления отношений будет заключен договор на оказание услуг, который можно будет предъявить вместе с чеками в налоговую службу для возврата налогового вычета.\n' +
                'В нем закреплены основные положения касательно занятий, в том числе пункты про своевременную оплату и заблаговременное оповещение о переносе или отмене занятий.'
        },
        {
            question: 'С какими учениками я занимаюсь?',
            answer:'Я занимаюсь со всеми начиная с 9 лет и старше, в том числе со взрослыми, главное – минимально уметь работать с компьютером)'
        },
        {
            question: 'Какие приложения нужны для занятий?',
            answer:'Любое средство для связи (Zoom, Skype, Discord). Желательно иметь их в скачанном и установленном виде во избежание проблем технического характера.\n' +
                'Кроме того, я использую онлайн-доску Miro, на которой необходимо зарегистрироваться до начала занятий и открывать ее с компьютера для удобства работы на уроке.'
        },
        {
            question: 'Будет ли домашка?',
            answer:'Обязательно! Я большой любитель задавать домашку и желательно побольше, поэтому нужно быть морально готовыми к приличному объему дз. При первом невыполнении я могу простить, потом буду ругаться и жаловаться 😠'
        }
    ]

    function makeQuestions(arr, selector, parentSelector) {
        arr.forEach(item => {
            const collapsibleItem = document.createElement("div")
            collapsibleItem.classList.add(selector)
            collapsibleItem.innerHTML = `
                <div class="collapsible-btn">
                    ${item.question}

                </div>
                <div class="collapsible-content">
                    ${item.answer}
                </div>
            `;
            document.querySelector(parentSelector).append(collapsibleItem);
        })
    }
    makeQuestions(faqArr, 'collapsible-item', '.collapsible-list');
    
    function toggleCollapsibleItem(selector, contentSelector, btnSelector) {
        let collapsibleItems = document.querySelectorAll(selector);
        collapsibleItems.forEach(item => {
            item.addEventListener("click", function() {
                item.querySelector(btnSelector).classList.toggle("opened");
                let content = item.querySelector(contentSelector);
                if (content.style.maxHeight){
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        })
    }
    toggleCollapsibleItem('.collapsible-item', '.collapsible-content', '.collapsible-btn')

}

export default faq
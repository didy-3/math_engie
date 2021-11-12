import {postData} from "./services";

const forms = (modalToggleDataSelector, modalSelector) => {

    const modalToggle = document.querySelectorAll(modalToggleDataSelector),
        modal = document.querySelector(modalSelector);
    /*        modalTimerId = setTimeout(() => {
                document.querySelector('#modal-request').style.display = 'grid';
                document.body.style.overflow = 'hidden';
            }, 5000);*/


    //events on all btns to popup modal window
    modalToggle.forEach(item => {
        item.addEventListener('click', showModal)
    });

    function showModal() {
        modal.style.display = 'grid';
        document.body.style.overflowY = 'hidden';
        /*clearInterval(modalTimerId)*/
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    //ways to close modal
    modal.addEventListener('click', (e => {
        if (e.target === modal ||
            e.target === document.querySelector(`${modalSelector} .modal-close-btn`) ||
            e.target === document.querySelector(`${modalSelector} img`)
        ) {
            closeModal()
        }
    }));
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && (modal.style.display = 'grid'))
            closeModal()
    })

    //for backend work

    const form = modal.querySelector('form'),
        inputs = modal.querySelectorAll('form input, form select'),
        message = {
            loading: "Идет отправка",
            send: 'Отправлено',
            error: 'Ошибка'
        };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('h2');
        statusMessage.classList.add('status');
        form.append(statusMessage);
        const formData = new FormData(form);

        postData('telegram.php', formData, message)
            .then(
                res => {
                    statusMessage.innerHTML = message.send
                }
            )
            .catch(
                () => {
                    statusMessage.innerHTML = message.error
                }
            )
            .finally(
                () => {
                    inputs.forEach(elem => elem.value = '')
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                }
            )
    })

}

export default forms;
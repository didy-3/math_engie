const forms = (modalToggleDataSelector, modalSelector) =>{

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
        document.body.style.overflow = 'hidden';
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


}

export default forms;
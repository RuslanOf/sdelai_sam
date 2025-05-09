window.addEventListener('DOMContentLoaded', () => {
    const modals = () => {
        function bindModal(triggerSelector, modalSelector, closeSelector) {
    
            const trigger = document.querySelectorAll(triggerSelector)
            const modal = document.querySelector(modalSelector)
            const close = document.querySelector(closeSelector)
    
            trigger.forEach(item => {
                item.addEventListener('click', (event) => {
                    if (event.target) {
                        event.preventDefault()
                    }
    
                    modal.style.display = "block"
                    document.body.style.overflow = "hidden"
                    //document.body.classList.add('modal-open')
    
                })
            });
    
            close.addEventListener('click', () => {
                modal.style.display = "none"
                document.body.style.overflow = ""
                document.body.classList.remove('modal-open')
            })
    
            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.style.display = "none"
                    document.body.style.overflow = ""
                    //document.body.classList.remove('modal-open')
                }
            })
        }
    
        function showModalByTime(selector, time) {
            setTimeout(() => {
                document.querySelector(selector).style.display = 'block'
                document.body.style.overflow = "hidden"
            }, time)
        }
    
        bindModal('.phone_link', '.popup', '.popup .popup_close')
    
        // showModalByTime('.popup', 3000)
    }

    modals()
})
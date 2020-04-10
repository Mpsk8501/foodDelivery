const modalOpenBtn = document.querySelector('#cartModalOpen');
const cartModal = document.querySelector('#cartModal');

const listener = (e) => {
    const item = e.target;
    if (item.getAttribute('data-close')) {
        cartModal.classList.toggle('modal__open');
        cartModal.removeEventListener('click', listener)
    }
};

const modalHandler = () => {
    cartModal.classList.toggle('modal__open');
    cartModal.addEventListener('click', listener)
};

modalOpenBtn.onclick = modalHandler;

new WOW().init();


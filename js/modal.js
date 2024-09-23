(() => {
    const refs = {
      openModalBtn: document.querySelector('[js-open-button]'),
      closeModalBtn: document.querySelector('[js-close-button]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();
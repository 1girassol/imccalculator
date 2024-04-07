 export const modal = { //object literals = propriedade seguido do valor

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.title span'), //vírgula pra separar os objetos
    btnClose: document.querySelector('.close'),

    open(){
        modal.wrapper.classList.add('open')
    },

    close(){
        modal.wrapper.classList.remove('open')
    }

}

modal.btnClose.onclick = () => {
    modal.close() //quando a arrow function tiver apenas 1 linha pode ficar sem {}
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown (event){
    // console.log(event.key) para ver qual tecla esta sendo clicada
    if(event.key === 'Escape'){
        modal.close('open')
    }
} //função para usar esc para fechar o modal


let menuButtons = document.querySelectorAll('button')

Array.from(menuButtons).forEach(function(element) {
    element.addEventListener('click', function(){
        let action = this.getAttribute('data-action')
        let menuType = this.getAttribute('data-type')
        action === 'open'? document.querySelector(`.${menuType}`).classList.remove('hide') : document.querySelector(`.${menuType}`).classList.add('hide')
    })
})
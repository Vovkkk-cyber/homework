import { renderComments } from './renderComments.js'
import { initFormButtonListeners } from './buttonEl.js'
import { updateComments } from './coments.js'
import { getComments } from './api.js'

document.querySelector('.comments').innerHTML = 'Пожалуйста подождите...'

getComments().then((data) => {
    updateComments(data)
    renderComments()
})

initFormButtonListeners()

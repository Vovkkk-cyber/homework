import { renderComments } from './renderComments.js'
import { initFormButtonListeners } from './buttonEl.js'
import { updateComments } from './coments.js'
import { getComments } from './api.js'

document.querySelector('.comments').innerHTML = 'Пожалуйста подождите...'

getComments()
    .then((data) => {
        updateComments(data)
        renderComments()
    })
    .catch((error) => {
        if (error.message === 'Ошибка сервера') {
            return alert('Ошибка на нашей стороне, поробуйте позже')
        }
        alert(error.message)
    })

initFormButtonListeners()

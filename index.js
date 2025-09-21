import { renderComments } from './renderComments.js'
import { updateComments } from './coments.js'
import { getComments } from './api.js'

export const fetchAndRenderComments = (isFirstLoading) => {
    if (isFirstLoading) {
        document.querySelector('.container').innerHTML =
            `<p>Пожалуйста подождите, загружаю комментарии...</p>`
    }

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
}

fetchAndRenderComments(true)

import { renderComments } from './renderComments.js'
import { updateComments } from './coments.js'
import { getComments, postComments } from './api.js'

const buttonEl = document.getElementById('button')
const nameEl = document.getElementById('name')
const commentEl = document.getElementById('comment')
const commentForm = document.getElementById('comment-form')
const addCommentLoader = document.getElementById('add-comment-loader')

export function initFormButtonListeners() {
    buttonEl.addEventListener('click', handlePostClick)
}
const handlePostClick = () => {
    const name = nameEl.value
        .trim()
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
    const comment = commentEl.value
        .trim()
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')

    nameEl.classList.remove('error')
    commentEl.classList.remove('error')

    if (nameEl.value === '') {
        nameEl.classList.add('error')
    }
    if (commentEl.value === '') {
        commentEl.classList.add('error')
    }
    if (nameEl.value === '' || commentEl.value === '') {
        return
    }

    commentForm.style.display = 'none'
    addCommentLoader.style.display = 'block'

    postComments(comment, name)
        .then(() => {
            return getComments().then((data) => {
                updateComments(data)
                renderComments()
            })
        })
        .then(() => {
            commentForm.style.display = 'flex'
            addCommentLoader.style.display = 'none'
            nameEl.value = ''
            commentEl.value = ''
        })
        .catch((error) => {
            commentForm.style.display = 'flex'
            addCommentLoader.style.display = 'none'

            if (error.message === 'Failed to fetch') {
                alert('Нет интернета, попробуйте снова')
            }

            if (error.message === 'Неверный запрос') {
                alert('Имя и комментарий должны быть не короче 3х символов')
            }

            if (error.message === 'Ошибка сервера') {
                handlePostClick()
            }
        })
}

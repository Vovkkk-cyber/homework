import { renderComments } from './renderComments.js'
import { comments, updateComments } from './coments.js'
import { getComments } from './api.js'
import { postComments } from './api.js'

export const buttonEl = document.getElementById('button')
buttonEl.addEventListener('click', () => {
    const nameEl = document.getElementById('name')
    const commentEl = document.getElementById('comment')
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

    const now = new Date()
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
    }
    const dateString = now.toLocaleString('ru-RU', options).replace(',', '')

    const newComment = {
        id: comments.length + 1,
        name: name,
        text: comment,
        date: dateString,
        likeCount: 0,
        liked: false,
    }

    postComments(comment, name).then(() => {
        return getComments().then((data) => {
            updateComments(data)
            renderComments()
        })
    })
})

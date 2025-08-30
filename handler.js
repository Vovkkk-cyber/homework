import { renderComments } from './renderComments.js'
import { comments } from './coments.js'

export function handleLikes() {
    const likeButtons = document.querySelectorAll('.like-button')
    likeButtons.forEach((likeButton) => {
        likeButton.addEventListener('click', () => {
            event.stopPropagation()
            const id = likeButton.dataset.id
            const comment = comments.find((c) => c.id === +id)

            if (comment.isLiked) {
                comment.isLiked = false;
                comment.likes -= 1;
            } else {
                comment.isLiked = true;
                comment.likes += 1;
            }

            renderComments()
        })
    })
}

export function addInitReplyListeners() {
    document.querySelectorAll('.comment').forEach((comment) => {
        comment.addEventListener('click', () => {
            const id = comment.dataset.id
            const currentComment = comments.find((c) => c.id === +id)
            const addCommentTextInput = document.getElementById('comment')
            addCommentTextInput.value = `${currentComment.name} > ${currentComment.text}`
            addCommentTextInput.focus()
        })
    })
}

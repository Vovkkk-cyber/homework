import { comments } from './coments.js'
import { handleLikes, addInitReplyListeners } from './handler.js'

export function renderComments() {
    const commentsList = document.getElementById('comments')
    commentsList.innerHTML = ''
    const commentHtml = comments
        .map((comment) => {
            const classString = `like-button ${comment.isLiked ? '-active-like' : ''}`
            const newComment = `
      <li data-id="${comment.id}" class="comment" >
        <div class="comment-header">
          <div class="comment-name">${comment.name}</div>
          <div>${new Date(comment.date).toLocaleDateString()}</div>
        </div>
        <div class="comment-body">
          <div class="comment-text">
            ${comment.text}
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${comment.likes}</span>
            <button data-id="${comment.id}" class="${classString}"></button>
          </div>
        </div>
      </li>
        `
            return newComment
        })
        .join('')
    commentsList.innerHTML = commentHtml
    handleLikes()
    addInitReplyListeners()
}

import { renderComments } from './renderComments.js'
import { buttonEl } from './buttonEl.js'
import { updateComments } from './coments.js'
import { getComments } from './api.js'
buttonEl

getComments().then((data) => {
    updateComments(data.comments)
    renderComments()
})



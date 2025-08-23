import { renderComments } from './renderComments.js'
import { buttonEl } from './buttonEl.js'
buttonEl
renderComments()
fetch('https://wedev-api.sky.pro/api/v1/:personal-key/comments')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })

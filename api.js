export const getComments = () => {
    return fetch(
        'https://wedev-api.sky.pro/api/v1/vladimir-blindowscky/comments',
    )
        .then((response) => {
            return response.json()
        })
        .then((responseData) => {
            const appComments = responseData.comments.map((comment) => {
                return {
                    id: comment.id,
                    name: comment.author.name,
                    date: new Date(comment.date),
                    text: comment.text,
                    likes: comment.likes,
                    isLiked: false,
                }
            })
            return appComments
        })
}
export const postComments = (text, name) => {
    return fetch(
        'https://wedev-api.sky.pro/api/v1/vladimir-blindowscky/comments',
        {
            method: 'POST',
            body: JSON.stringify({
                text,
                name,
            }),
        },
    ).then((response) => {
        return response.json()
    })
}

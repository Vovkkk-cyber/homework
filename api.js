export function getComments() {
    return fetch(
        'https://wedev-api.sky.pro/api/v1/vladimir-blindowscky/comments',
    ).then((response) => {
        return response.json()
    })
}
export const postComments = (text, name) => {
    return fetch('https://wedev-api.sky.pro/api/v1/vladimir-blindowscky/comments',{
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

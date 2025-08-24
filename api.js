export function getComments() {
    return fetch("https://wedev-api.sky.pro/api/v1/vladimir-blindowscky/comments").then(
        (response) => {
            return response.json();
        },
    );
}
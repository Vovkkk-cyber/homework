/* eslint-disable prettier/prettier */
import { fetchAndRenderComments } from './index.js'
import { registration, setName, setToken } from './api.js'
import { renderLogin } from './renderLogin.js'

export const renderRegistration = () => {
    const container = document.querySelector('.container')

    const loginHtml = `
    <section class="add-form">
      <h1>Форма регистрации</h1>
      <input 
        type="text" 
        class="add-form-name" 
        placeholder="Введите имя" 
        id="name"
        required
      />
      <input 
        type="text" 
        class="add-form-name" 
        placeholder="Введите логин" 
        id="login"
        required
      />
      <input 
        type="text" 
        class="add-form-name" 
        placeholder="Введите пароль" 
        id="password"
        required
      />
      <fieldset class="add-form-registry">
        <button class="add-form-button button-main" type="submit">
            Зарегестрироваться</button>
        <u class="add-form-button entry">
            Войти
        </u>
      </fieldset>
    </section>
    `

    container.innerHTML = loginHtml

    document.querySelector('.entry').addEventListener('click', () => {
        renderLogin()
    })

    const nameEl = document.querySelector('#name')
    const loginEl = document.querySelector('#login')
    const passwordEl = document.querySelector('#password')
    const submitButtonEl = document.querySelector('.button-main')

    submitButtonEl.addEventListener('click', () => {
        registration(nameEl.value, loginEl.value, passwordEl.value)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                if (data.error) {
                    alert(`Ошибка. ${data.error}`)
                }

                setToken(data.user.token)
                setName(data.user.name)
                fetchAndRenderComments()
            })
            .catch((err) => {
                console.log(err)
            })
    })
}

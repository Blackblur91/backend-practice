console.log("Loaded")

const rootElement = document.querySelector("#root")
console.log(rootElement)

const formComponent = () => `

<form>
  <input type="text" name="name" placeholder="enter name">
  <input type="text" name="password" placeholder="enter password">

  <button>send</button>
</form>
`

const root = document.getElementById("#root")

rootElement.insertAdjacentHTML("beforeend", formComponent())

const formElement = document.querySelector('form')
formElement.addEventListener('submit', (event) => {
  event.preventDefault()

  const userName = document.querySelector(`input[name="name"]`).value
  const userPassword = document.querySelector(`input[name="password"]`).value

  fetch ('/users/new-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: userName,
      password: userPassword
    })
  })
  .then(res => res.json())
  .then(resJson => console.log(resJson))
})
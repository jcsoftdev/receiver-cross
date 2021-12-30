import './style.css'
const PERMITTED_DOMAIN = import.meta.env.VITE_ALLOWED_DOMAIN
/**
 * Receiving message from other domain
 */
console.log(PERMITTED_DOMAIN)
window.addEventListener('message', function (event) {
  if (event.origin === PERMITTED_DOMAIN) {
    console.log(event.data)
    if (event.data) {
      console.log(event.data)
      localStorage.setItem(event.data.key, JSON.stringify(event.data.value))
    }
    document.getElementById('prueba').innerHTML = `${JSON.stringify(event.data)}`
  }
})
document.querySelector('#app').innerHTML = `
  <h1 class='title'>Storage</h1>
  <pre id="storage"></pre>
`

const getAllStorageKeys = () => {
  const keys = Object.keys(localStorage)
  return keys.map((key) => {
    const value = localStorage.getItem(key)
    return { key, value }
  })
}



const renderStorage = () => {
  const $storage = document.querySelector('#storage')
  const storage = getAllStorageKeys()
  console.log(storage)
  const el = {}
  storage.forEach((item, i) => el[item.key] = item.value)
  console.log({el})
  $storage.innerHTML = JSON.stringify(el, null, 4)
}
window.addEventListener('storage', () => {
  renderStorage()
})

renderStorage()

import { register } from 'flighthub-vue'
import 'flighthub-vue/dist/style.css'

register()
// console.log('test', register)

const el = document.getElementById('precog-sales-display')
console.log('el', el) 

el.addEventListener('save-and-export', (e) => {
  console.log('save-and-export', e, e.detail)
}, false)
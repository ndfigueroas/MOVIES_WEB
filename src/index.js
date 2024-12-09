import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'


const app= express()
const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(join(__dirname,'views'));

app.set('views',join(__dirname,'views'))
app.set('view engine','ejs')

app.get('/',(req,res) => res.render('index'))

app.listen(3000)

console.log('Server está siendo escuchado en el pueto, 3000')


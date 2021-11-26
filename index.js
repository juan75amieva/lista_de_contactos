 import express from 'express'
import favicon from 'serve-favicon'
import cors from 'cors'
import dotenv from 'dotenv'
import{conect} from './src/bbdd.js'

const puerto = 3001
dotenv.config()

const app = express()
app.use(favicon('public/favicon.png'))
app.use(cors())

app.get('/', (req,res)=> {
    let usuario = process.env.USUARIO
    console.log(conect)
    res.send(`${usuario}`) 

})

app.listen(puerto, (req, res)=>{
    console.log(`Aplicaion iniciada en http://localhost:3001`)
})
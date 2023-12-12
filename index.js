const express = require('express')
const app = express()

app.use(express.json());

app.get('/login', (req, res) => {
    const {user, password} = req.query
    if(!user || !password){
        res.status(400).json({msg: 'you need to provide <user> and <password> parameter'})
        return
    }
    if(user == 'juanalejandro' && password == '123'){
        res.json({msg: 'you sign in succesfully'})
        return
    }
    res.status(400).json({msg: 'Error en el usuario o contraseña'})
})

app.get('/:nombre', (req, res) => {
    const params = req.params
    res.json({params})
})
// http://localhost:3000/login?user=juanalejandro&password=123

app.post('/login', (req, res) => {
    const {user, password} = req.body
    if(!user || !password){
        res.status(400).json({msg: 'you need to provide <user> and <password> parameter'})
        return
    }
    if(user == 'juanalejandro' && password == '123'){
        res.json({msg: 'you sign in succesfully'})
        return
    }
    res.status(404).json({msg: 'Error en el usuario o contraseña'})
})

app.put('/', (req, res) => {
    res.json({msg: "Hola PUT"})
})

app.patch('/', (req, res) => {
    res.json({msg: "Hola PATCH"})
})

app.delete('/', (req, res) => {
    res.json({msg: "Hola DELETE"})
})



app.listen(3000, () => {console.log('listening on port 3000')})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
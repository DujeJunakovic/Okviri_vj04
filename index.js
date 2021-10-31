const express = require('express')
const app = express()
app.use(express.json())

let poruke = [
    {
    id: 1,
    sadrzaj: 'Poruka broj jedan',
    },
    {
    id: 2,
    sadrzaj: 'Poruka broj dva',
    },
    {
    id: 3,
    sadrzaj: 'Poruka broj tri',
    }   ]
   
app.get('/', (req, res) =>{
 res.send('<h1>Početna stranica</h1>')
})


app.get('/api/poruke/:id', (req, res) =>{
    const id = Number(req.params.id)
    const poruka = poruke.find(p => p.id === id)
    
    if (poruka){
    res.json(poruka)
    } else {
    res.status(404).end()
    }
   })
   
    app.delete('/api/poruke/:id', (req, res) => {
        const id = Number(req.params.id)
        poruke = poruke.filter(p => p.id !== id)
        res.status(204).end()
       })

      app.post('/api/poruke', (req, res) => {
        const maxId = notes.length > 0
        ? Math.max(...poruke.map(p => p.id))
        : 0
        const poruka = req.body
        poruka.id = maxId + 1
        poruke = poruke.concat(poruka)
        res.json(poruka)
       })
       
       

const PORT = 3001
app.listen(PORT, () => {
 console.log(`Posluzitelj je pokrenut na portu ${PORT}`);
})
